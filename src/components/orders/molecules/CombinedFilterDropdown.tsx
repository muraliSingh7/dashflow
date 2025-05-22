"use client";

import { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CombinedFilterDropdownProps {
  filterOptions: {
    [key: string]: {
      label: string;
      options: any[];
      selected: string[];
      onChange: (selected: string[]) => void;
    };
  };
}

export function CombinedFilterDropdown({
  filterOptions,
}: CombinedFilterDropdownProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = (
    value: string,
    selected: string[],
    onChange: (next: string[]) => void
  ) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const popover = document.getElementById("popover");
      if (popover && !popover.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filterOptionsKeys = Object.keys(filterOptions);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="w-[180px] justify-start">
          Filter Orders
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[260px] p-4 space-y-4" align="start">
        {filterOptionsKeys.map((key,index) => {
          const { label, options, selected, onChange } = filterOptions[key];

          return (
            <div key={key}>
              <Label className="text-sm text-muted-foreground">{label}</Label>
              <ScrollArea className="max-h-[120px] pr-2 mt-2">
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2 py-1">
                    <Checkbox
                      id={`${key}-${option}`}
                      checked={selected.includes(option)}
                      onCheckedChange={() =>
                        handleToggle(option, selected, onChange)
                      }
                    />
                    <label htmlFor={`${key}-${option}`} className="text-sm">
                      {option}
                    </label>
                  </div>
                ))}
              </ScrollArea>
              {filterOptionsKeys.length - 1 !== index && <Separator className="my-2" />}
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
