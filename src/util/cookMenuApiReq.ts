import { type inputCookMenu, type food, type cookMenuRequest, type reqFood } from '@/model/cookMenu'

export function createRegisterReq(inputCookMenu: inputCookMenu) {
  const reqGenre = conversionGenre(inputCookMenu.genre)
  const reqWeight = conversionWeight(inputCookMenu.weight)
  const reqIngredients = conversionReqIngredients(inputCookMenu.ingredients!)
  const reqSeasonings = conversionReqseasoning(inputCookMenu.seasonings!)

  const requestData: cookMenuRequest = {
    name: inputCookMenu.name,
    genre: reqGenre,
    weight: reqWeight,
    ingredients: reqIngredients,
    seasoning: reqSeasonings,
    url: inputCookMenu.url,
    memo: inputCookMenu.memo
  }

  return requestData
}

function checkNullAndUndefind(str?: string) {
  return str === undefined || str === null
}

function conversionGenre(genre?: string) {
  if (checkNullAndUndefind(genre)) return undefined
  const mapGenre = new Map([
    ['和食', 0],
    ['中華', 1],
    ['洋食', 2],
    ['エスニック', 3]
  ])
  return mapGenre.get(genre!)
}

function conversionWeight(weight?: string) {
  if (checkNullAndUndefind(weight)) return undefined
  const mapWeight = new Map([
    ['軽め', 0],
    ['普通', 1],
    ['重め', 2]
  ])
  return mapWeight.get(weight!)
}

function conversionReqIngredients(ingredients: food[]): reqFood[] {
  const setIngredientCount = new Map([
    ['0.3個', 0],
    ['0.5個', 1],
    ['1個', 2],
    ['1.5個', 3],
    ['2個', 4],
    ['2.5個', 5],
    ['3個', 6]
  ])
  const resultCheck = checkArrayCount(ingredients)
  if (resultCheck) return []
  return ingredients.map((ingredient) => {
    return {
      name: ingredient.name,
      count: setIngredientCount.get(ingredient.age!)!
    }
  })
}

function conversionReqseasoning(seasonings: food[]): reqFood[] {
  const setIngredientCount = new Map([
    ['小さじ1', 0],
    ['小さじ2', 1],
    ['小さじ3', 2],
    ['小さじ4', 3],
    ['小さじ5', 4],
    ['大さじ1', 5],
    ['大さじ2', 6],
    ['大さじ3', 7],
    ['大さじ4', 8],
    ['大さじ5', 9]
  ])
  const resultCheck = checkArrayCount(seasonings)
  if (resultCheck) return []
  return seasonings.map((seasoning) => {
    return {
      name: seasoning.name,
      count: setIngredientCount.get(seasoning.age!)!
    }
  })
}

function checkArrayCount(array: food[]) {
  console.log('データの確認', array)
  return array.length > 0 && array[0].name.length !== 1
}
