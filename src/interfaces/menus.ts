// MenuItem.ts
export interface MenuItem {
    id: number;
    label: string;
    children?: MenuItem[];
}
