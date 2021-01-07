export type Color = {
  id: number;
  hex: string;
};

export type VRScan = {
  id: number;
  name: string;
  thumb: string;
  colors: number[];
};

export type Store = {
  // fetch on login
  colors: Color[];

  searchFilter: string;

  page: number;
  vrScans: VRScan[];
};
