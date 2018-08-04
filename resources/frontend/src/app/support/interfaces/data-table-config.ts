export interface SortableData {
    key?: string;
    direction?: string;
    el?: any;
}

export interface DataTableConfig {
    sortable: SortableData;
    currentPage: number;
    itemsPerPage: number;
    filter: any;
}
