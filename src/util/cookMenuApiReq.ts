import {
  type inputCookMenu,
  type food,
  type cookMenuRequest,
  type reqFood,
  type editCookMenu,
  type editFood
} from '@/model/cookMenu'

const genreObj = {
  0: '和食',
  1: '中華',
  2: '洋食',
  3: 'エスニック'
}

const weightObj = {
  0: '軽め',
  1: '普通',
  2: '重め'
}

const ingredientCountObj = {
  0: '0.3個',
  1: '0.5個',
  2: '1個',
  3: '1.5個',
  4: '2個',
  5: '2.5個',
  6: '3個'
}

const seasoningCountObj = {
  0: '小さじ1',
  1: '小さじ2',
  2: '小さじ3',
  3: '小さじ4',
  4: '小さじ5',
  5: '大さじ1',
  6: '大さじ2',
  7: '大さじ3',
  8: '大さじ4',
  9: '大さじ5'
}

function getObjKey(obj: Record<number, string>, value: string | undefined) {
  return Object.keys(obj).find((key) => obj[Number(key)] === value)
}

function getObjValue(obj: Record<number, string>, key: number | undefined) {
  return key === undefined ? undefined : obj[key]
}

export function createRegisterReq(inputCookMenu: inputCookMenu) {
  const reqGenre = Number(getObjKey(genreObj, inputCookMenu.genre))
  const reqWeight = Number(getObjKey(weightObj, inputCookMenu.weight))
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

export function changeEditCookMenu(editCookMenu: editCookMenu) {
  const cookMenu = { ...editCookMenu }
  return {
    name: cookMenu.name,
    genre: getObjValue(genreObj, cookMenu.genre),
    weight: getObjValue(weightObj, cookMenu.weight),
    ingredients: conversionEditIngredients(cookMenu.ingredients),
    seasonings: conversionEditseasoning(cookMenu.seasonings),
    url: cookMenu.url,
    memo: cookMenu.memo
  }
}

function conversionReqIngredients(ingredients: food[]): reqFood[] {
  const resultCheck = checkArrayCount(ingredients)
  if (resultCheck) return []
  return ingredients.map((ingredient) => {
    return {
      name: ingredient.name,
      count: Number(getObjKey(ingredientCountObj, ingredient.age))
    }
  })
}

function conversionReqseasoning(seasonings: food[]): reqFood[] {
  const resultCheck = checkArrayCount(seasonings)
  if (resultCheck) return []
  return seasonings.map((seasoning) => {
    return {
      name: seasoning.name,
      count: Number(getObjKey(seasoningCountObj, seasoning.age))
    }
  })
}

function conversionEditIngredients(ingredients: editFood[] | undefined) {
  const resultCheck = checkArrayCount(ingredients)
  if (!resultCheck) return [{ name: '', age: undefined }]
  return ingredients!.map((ingredient) => {
    return {
      name: ingredient.name,
      age: getObjValue(ingredientCountObj, ingredient.age)
    }
  })
}

function conversionEditseasoning(seasonings: editFood[] | undefined) {
  const resultCheck = checkArrayCount(seasonings)
  if (!resultCheck) return [{ name: '', age: undefined }]
  return seasonings!.map((seasoning) => {
    return {
      name: seasoning.name,
      age: getObjValue(seasoningCountObj, seasoning.age)
    }
  })
}

function checkArrayCount(array: food[] | editFood[] | undefined) {
  return array !== undefined && array.length > 0 && array[0].name.length !== 1
}
