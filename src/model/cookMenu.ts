export type food = { name: ''; age: undefined }

export type reqFood = { name: string; count: number }

export type editFood = { name: string; age: number }

export type cookMenuRequest = {
  name: string
  genre?: number
  weight?: number
  ingredients?: reqFood[]
  seasoning?: reqFood[]
  url?: string
  memo?: string
}

export type cookMenuUpdateRequest = cookMenuRequest & { id: number }

export type inputCookMenu = {
  name: string
  genre?: string
  weight?: string
  ingredients?: food[]
  seasonings?: food[]
  url: string
  memo: string
}

export type editCookMenu = {
  id: number
  name: string
  genre?: 0 | 1 | 2 | 3
  weight?: 0 | 1 | 2 | 3
  ingredients?: editFood[]
  seasonings?: editFood[]
  url?: string
  memo?: string
}
