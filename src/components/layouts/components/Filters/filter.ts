export interface Filters {
    _page: number;
    _limit: number;
    categories_id?: number;
    totalItems?: number;
    categoryName?: string;
    name_like?: string;
}