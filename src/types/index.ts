export interface CatType {
  id: number,
  url: string,
  favourited: string
}

export interface IRootState {
  allCats: CatType[],
  favouriteCats: CatType[],
  catStatus: string
}
