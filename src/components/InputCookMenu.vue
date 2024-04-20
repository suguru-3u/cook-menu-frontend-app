InputCookMenu.vue

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type inputCookMenu } from '@/model/cookMenu'

const props = defineProps({
  inputCookMenuData: {
    type: Object as PropType<inputCookMenu>,
    required: true
  }
})

const inputCookMenu2 = ref<inputCookMenu>({
  name: props.inputCookMenuData.name,
  genre: props.inputCookMenuData.genre,
  weight: props.inputCookMenuData.weight,
  ingredients: props.inputCookMenuData.ingredients,
  seasonings: props.inputCookMenuData.seasonings,
  url: props.inputCookMenuData.url,
  memo: props.inputCookMenuData.memo
})

// todo:propsの使い方がよくわからない
// todo:commitの使い方がよくわからない
const emit = defineEmits(['nextPage'])

/**
 * バリデーション処理
 */
const form = ref()
const valid = ref(null)
const nameRules = [(v) => !!v || '料理名は必須です']
const ingredientNameRules = (index: number) => {
  return (value: string) => {
    const checkInputAge =
      inputCookMenu2.value.ingredients[index].age === undefined ||
      inputCookMenu2.value.ingredients[index].age === null
    if (checkInputAge) return true
    return !!value || '数を入力している場合、名前は必須です'
  }
}
const ingredientAgeRules = (index: number) => {
  return (value: string) => {
    const checkInputAge = inputCookMenu2.value.ingredients[index].name !== ''
    if (checkInputAge) return !!value || '名前を入力している場合、数は必須です'
    return true
  }
}
const seasoningNameRules = (index: number) => {
  return (value: string) => {
    const checkInputAge = inputCookMenu2.value.seasonings[index].age !== null
    if (checkInputAge) return !!value || '数を入力している場合、名前は必須です'
    return true
  }
}
const seasoningAgeRules = (index: number) => {
  return (value: string) => {
    const checkInputAge = inputCookMenu2.value.seasonings[index].name !== ''
    if (checkInputAge) return !!value || '名前を入力している場合、数は必須です'
    return true
  }
}

// 食材と調味料で名前 or 数を変更した際に実行される個別のバリデーション
const checkValidateIngredient = async () => {
  const todoValidationIndex = [3, 4]
  todoValidationIndex.forEach(async (index) => await form.value.items[index].validate())
}
const checkValidateSeasoning = async () => {
  const todoValidationIndex = [5, 6]
  todoValidationIndex.forEach(async (index) => await form.value.items[index].validate())
}

// 食材と調味料の項目追加・削除のボタンクリックで実行される
const addIngredient = () => inputCookMenu2.value.ingredients!.push({ name: '', age: undefined })
const reduceIngredient = (index: number) => inputCookMenu2.value.ingredients!.splice(index, 1)
const addSeasoning = () => inputCookMenu2.value.seasonings!.push({ name: '', age: undefined })
const reduceSeasoning = (index: number) => inputCookMenu2.value.seasonings!.splice(index, 1)

// 食材と調味料の数の×ボタンをクリックした時に動作する
const delIngredientCount = (index: number) => {
  inputCookMenu2.value.ingredients[index].age = null
  checkValidateIngredient()
}
const delSeasoningCount = (index: number) => {
  inputCookMenu2.value.seasonings[index].age = null
  checkValidateSeasoning()
}

// 次のページで遷移する
async function next() {
  const validResult = await form.value.validate()
  if (validResult.valid) emit('nextPage', inputCookMenu2)
}
</script>

<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center">
      <v-col cols="1"> 料理名 </v-col>
      <v-col cols="7">
        <v-text-field
          variant="underlined"
          :counter="30"
          :rules="nameRules"
          v-model="inputCookMenu2.name"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1"> ジャンル </v-col>
      <v-col cols="7">
        <v-select
          chips
          variant="underlined"
          v-model="inputCookMenu2.genre"
          :items="['和食', '中華', '洋食', 'エスニック']"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1"> 料理の重さ </v-col>
      <v-col cols="7">
        <v-select
          chips
          variant="underlined"
          v-model="inputCookMenu2.weight"
          :items="['軽め', '普通', '重め']"
        ></v-select>
      </v-col>
    </v-row>
    <v-row v-for="(member, index) in inputCookMenu2.ingredients" :key="index" justify="center">
      <v-col cols="1"> 食材 </v-col>
      <v-col cols="3">
        <v-text-field
          variant="underlined"
          label="名前"
          v-model="member.name"
          :rules="[ingredientNameRules(index)]"
          @input="checkValidateIngredient"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          variant="underlined"
          label="数"
          v-model="member.age"
          :items="['0.3個', '0.5個', '1個', '1.5個', '2個', '2.5個', '3個']"
          :rules="[ingredientAgeRules(index)]"
          @update:modelValue="checkValidateIngredient"
        >
          <template #selection="{ item }">
            <v-chip closable @click:close="delIngredientCount(index)">
              <span>{{ item.title }}</span></v-chip
            >
          </template>
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-btn
          v-if="inputCookMenu2.ingredients!.length === index + 1"
          @click="addIngredient"
          icon="mdi-plus"
        ></v-btn>
        <v-btn
          v-if="inputCookMenu2.ingredients!.length > 1"
          @click="reduceIngredient(index)"
          icon="mdi-minus"
        ></v-btn>
      </v-col>
    </v-row>

    <v-row v-for="(member, index) in inputCookMenu2.seasonings" :key="index" justify="center">
      <v-col cols="1"> 調味料 </v-col>
      <v-col cols="3">
        <v-text-field
          variant="underlined"
          label="名前"
          v-model="member.name"
          :rules="[seasoningNameRules(index)]"
          @input="checkValidateSeasoning"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          variant="underlined"
          label="量"
          v-model="member.age"
          :items="[
            '小さじ1',
            '小さじ2',
            '小さじ3',
            '小さじ4',
            '小さじ5',
            '大さじ1',
            '大さじ2',
            '大さじ3',
            '大さじ4',
            '大さじ5'
          ]"
          :rules="[seasoningAgeRules(index)]"
          @update:modelValue="checkValidateSeasoning"
        >
          <template #selection="{ item }">
            <v-chip closable @click:close="delSeasoningCount(index)">
              <span>{{ item.title }}</span></v-chip
            >
          </template>
        </v-select>
      </v-col>

      <v-col cols="2">
        <v-btn
          v-if="inputCookMenu2.seasonings!.length === index + 1"
          @click="addSeasoning"
          icon="mdi-plus"
        ></v-btn>
        <v-btn
          v-if="inputCookMenu2.seasonings!.length > 1"
          @click="reduceSeasoning(index)"
          icon="mdi-minus"
        ></v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1"> URL </v-col>
      <v-col cols="7">
        <v-text-field
          variant="underlined"
          :counter="126"
          v-model="inputCookMenu2.url"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-textarea
          v-model="inputCookMenu2.memo"
          variant="outlined"
          counter="1000"
          clearable
          auto-grow
          clear-icon="mdi-close-circle"
          label="メモ"
          rows="8"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-form>
  <v-row justify="end">
    <v-col cols="2">
      <v-btn color="blue" rounded="xl" size="x-large" @click="next" :disabled="!valid"
        >内容の確認
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
