export interface ApiPagination {
  page_count: number;
  current_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  count: number;
  limit: number;
}
