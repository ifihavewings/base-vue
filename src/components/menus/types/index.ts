export interface IMenuItem {
    id: number;
    name: string;
    iconName?: string;
    children?: IMenuItem[];
  }
  