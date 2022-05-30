export interface CatType {
  id: number,
  url: string,
  favourite: boolean,
}

export interface IRootState {
  allCats: CatType[],
  favouriteCats: CatType[],
  currentPage: number,
  catStatus: string
}
