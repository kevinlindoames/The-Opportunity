export interface Opportunity {
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
}

export interface OpportunityFilters {
  type?: "tender" | "agile";
  startDate?: string;
  endDate?: string;
  onlyActive?: boolean;
}
