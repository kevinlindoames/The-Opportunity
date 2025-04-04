// src/app/opportunities/page.tsx
"use client";
import OpportunityFilters from "../../components/opportunities/OpportunityFilters";
import OpportunityTable from "../../components/opportunities/OpportunityTable";

export default function OpportunitiesPage() {
  return (
    <div>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold leading-6 text-gray-900">
          Listado de Oportunidades
        </h1>
      </div>

      <div className="mt-4">
        <OpportunityFilters />
      </div>

      <div className="mt-4">
        <OpportunityTable />
      </div>
    </div>
  );
}
