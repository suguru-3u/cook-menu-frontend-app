export type food = { name: ''; age: undefined }

export type reqFood = { name: string; count: number }

export type cookMenuRequest = {
  name: string
  genre?: number
  weight?: number
  ingredients?: reqFood[]
  seasoning?: reqFood[]
  url?: string
  memo?: string
}

export type inputCookMenu = {
  name: string
  genre?: string
  weight?: string
  ingredients?: food[]
  seasonings?: food[]
  url: string
  memo: string
}
