
"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CombinedFilterDropdown } from "./molecules/CombinedFilterDropdown";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function getUniqueValues<TData>(data: TData[], key: keyof TData){
  return Array.from(
    new Set(
      data
        .map((item) => item[key])
        .filter((value): value is Exclude<typeof value, null | undefined> => value != null)
    )
  ).sort();
}


export function OrdersDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);


  const getFilterValue = (id: string): string[] => {
    const filter = columnFilters.find((f) => f.id === id);
    return Array.isArray(filter?.value) ? filter.value : [];
  };

  const filterOptions = {
    status: {
      label: "Status",
      options: getUniqueValues(data, "status" as keyof TData),
      selected: getFilterValue("status"),
      onChange: (val: string[]) =>
        setColumnFilters((prev) => [
          ...prev.filter((f) => f.id !== "status"),
          ...(val.length > 0 ? [{ id: "status", value: val }] : []),
        ])

    },
    pizzaType: {
      label: "Pizza Type",
      options: getUniqueValues(data, "pizzaType" as keyof TData),
      selected: getFilterValue("pizzaType"),
      onChange: (val: string[]) =>
        setColumnFilters((prev) => [
          ...prev.filter((f) => f.id !== "pizzaType"),
          ...(val.length > 0 ? [{ id: "pizzaType", value: val }] : []),
        ])
    },
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    }
  });

  return (
    <div className="rounded-lg border shadow-sm bg-card">
      <div className="p-4">
        <CombinedFilterDropdown filterOptions={filterOptions} />
      </div>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-muted/50 transition-colors duration-150"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 p-4 border-t">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
