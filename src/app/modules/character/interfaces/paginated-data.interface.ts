export interface IPaginatedData<Data> {
  info: {
    count: number;
  }
  results: Data[];
}
