// src/components/opportunities/OpportunityFilters.tsx
"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../lib/redux/store";
import { setFilters } from "../../lib/redux/slices/opportunitiesSlice";
import { OpportunityFilters as FilterTypes } from "../../types/Opportunity";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Necesitarás instalar date-fns:
// npm install date-fns

const OpportunityFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(
    (state: RootState) => state.opportunities.filters
  );
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  // Inicializar fechas desde los filtros si existen
  useEffect(() => {
    if (filters.startDate) {
      setStartDate(new Date(filters.startDate));
    }
    if (filters.endDate) {
      setEndDate(new Date(filters.endDate));
    }
  }, []);

  const handleTypeChange = (value: string) => {
    dispatch(setFilters({ ...filters, type: value || undefined }));
  };

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date);
    if (date) {
      dispatch(setFilters({ ...filters, startDate: date.toISOString() }));
    } else {
      const { startDate, ...restFilters } = filters;
      dispatch(setFilters(restFilters));
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date);
    if (date) {
      dispatch(setFilters({ ...filters, endDate: date.toISOString() }));
    } else {
      const { endDate, ...restFilters } = filters;
      dispatch(setFilters(restFilters));
    }
  };

  const resetFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    dispatch(setFilters({ onlyActive: true }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filtros</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Label htmlFor="type">Tipo</Label>
            <Select value={filters.type || ""} onValueChange={handleTypeChange}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Todos los tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos</SelectItem>
                <SelectItem value="tender">Licitación</SelectItem>
                <SelectItem value="agile">Compra Ágil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Fecha desde</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="startDate"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={handleStartDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">Fecha hasta</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="endDate"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "Seleccionar fecha"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={handleEndDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-end">
            <Button variant="outline" onClick={resetFilters} className="w-full">
              Limpiar filtros
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityFilters;
