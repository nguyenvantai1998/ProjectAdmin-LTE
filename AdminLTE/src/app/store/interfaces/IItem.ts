export interface Item {
    id?: number;
    name?: string;
    price?: string;
 }
 
 export interface AppState {
    count: number;
    item: Item[];
 }