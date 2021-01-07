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
  colors: Color[];
  vrScans: VRScan[];

  searchFilter: string;
};
