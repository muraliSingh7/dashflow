
"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { PizzaOrder, OrderStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

const statusColors: Record<OrderStatus, string> = {
  Pending: "bg-amber-100 text-amber-700 border-amber-300 hover:bg-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-700 dark:hover:bg-amber-800/50",
  "In Progress": "bg-indigo-100 text-indigo-700 border-indigo-300 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-700 dark:hover:bg-indigo-800/50",
  Delivered: "bg-green-100 text-green-700 border-green-300 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700 dark:hover:bg-green-800/50",
  Cancelled: "bg-red-100 text-red-700 border-red-300 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700 dark:hover:bg-red-800/50",
};

export const columns: ColumnDef<PizzaOrder>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-2"
        >
          Order ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium table-row-animation">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => <div className="table-row-animation">{row.getValue("customerName")}</div>,
  },
  {
    accessorKey: "pizzaType",
    header: "Pizza Type",
    cell: ({ row }) => <div className="table-row-animation">{row.getValue("pizzaType")}</div>,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => <div className="text-center table-row-animation">{row.getValue("quantity")}</div>,
  },
  {
    accessorKey: "orderDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-2"
        >
          Order Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("orderDate") as Date;
      return <div className="table-row-animation">{format(date, "PPpp")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as OrderStatus;
      return (
        <Badge variant="outline" className={`py-1 px-3 text-xs font-medium table-row-animation ${statusColors[status]}`}>
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
