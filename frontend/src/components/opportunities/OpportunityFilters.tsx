"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../lib/redux/store";
import {
  setFilters,
  resetFilters,
} from "../../lib/redux/slices/opportunitiesSlice";
import { OpportunityFilters as FilterTypes } from "../../types/Opportunity";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePickerSimple } from "@/components/ui/date-picker-simple";

const OpportunityFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(
    (state: RootState) => state.opportunities.filters
  );
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  useEffect(() => {
    if (filters.startDate) {
      setStartDate(new Date(filters.startDate));
    }
    if (filters.endDate) {
      setEndDate(new Date(filters.endDate));
    }
  }, []);

  const handleTypeChange = (value: string) => {
    if (value === "all") {
      const { type, ...restFilters } = filters;
      dispatch(setFilters(restFilters));
    } else {
      dispatch(setFilters({ ...filters, type: value }));
    }
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

  const handleShowInactiveChange = (checked: boolean) => {
    if (checked) {
      dispatch(
        setFilters({
          ...filters,
          onlyActive: false,
        })
      );
    } else {
      const { onlyActive, ...restFilters } = filters;
      dispatch(setFilters(restFilters));
    }
  };

  const handleResetFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    dispatch(resetFilters());
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
            <Select
              value={filters.type || "all"}
              onValueChange={handleTypeChange}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Todos los tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="tender">Licitación</SelectItem>
                <SelectItem value="agile">Compra Ágil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Fecha desde</Label>
            <DatePickerSimple
              date={startDate}
              onSelect={handleStartDateChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">Fecha hasta</Label>
            <DatePickerSimple date={endDate} onSelect={handleEndDateChange} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="showInactive"
                checked={filters.onlyActive === false}
                onCheckedChange={handleShowInactiveChange}
              />
              <Label htmlFor="showInactive" className="text-sm font-medium">
                Mostrar oportunidades cerradas
              </Label>
            </div>

            <Button
              variant="outline"
              onClick={handleResetFilters}
              className="w-full"
            >
              Limpiar filtros
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityFilters;
