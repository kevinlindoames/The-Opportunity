// src/types/Opportunity.ts
export interface Opportunity {
  _id: string;
  code: string;
  title: string;
  type: "tender" | "agile";
  is_followed: boolean;
  publish_date: string;
  close_date: string;
  description?: string;
  budget?: number;
  requirements?: string[];
  status?: string;
  categories?: string[];
  attachments?: { name: string; url: string }[];
}

export interface OpportunityFilters {
  type?: string;
  startDate?: string;
  endDate?: string;
  onlyActive?: boolean;
}
