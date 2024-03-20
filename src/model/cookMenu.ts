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
