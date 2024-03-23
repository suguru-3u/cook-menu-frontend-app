export type cookMenuRequest = {
  name: string
  genre: 1 | 2 | 3 | 4
  weight: 1 | 2 | 3
  ingredients?: [
    {
      name: string
      count: number
    }
  ]
  seasoning?: [
    {
      name: string
      count: number
    }
  ]
  url?: string
  memo?: string
}

type food = { name: ''; age: undefined }

export type inputCookMenu = {
  name: string
  genre?: string
  weight?: string
  ingredients: food[]
  seasonings: food[]
  url: string
  memo: string
}
