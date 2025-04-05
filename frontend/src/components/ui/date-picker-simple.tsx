// src/components/ui/date-picker-simple.tsx
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerSimple({
  date,
  onSelect,
}: {
  date?: Date;
  onSelect: (date?: Date) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Seleccionar fecha</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 bg-white rounded-md shadow">
          <div className="space-y-2">
            <div className="grid grid-cols-7 gap-1">
              {["D", "L", "M", "X", "J", "V", "S"].map((day, i) => (
                <div
                  key={i}
                  className="text-center text-xs font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}

              {/* Simplificado: solo muestra un input para elegir fecha */}
              <div className="col-span-7 pt-2">
                <input
                  type="date"
                  className="w-full border rounded p-2"
                  value={date ? format(date, "yyyy-MM-dd") : ""}
                  onChange={(e) => {
                    const selectedDate = e.target.value
                      ? new Date(e.target.value)
                      : undefined;
                    onSelect(selectedDate);
                  }}
                />
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full mt-2"
              onClick={() => onSelect(undefined)}
            >
              Limpiar
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
