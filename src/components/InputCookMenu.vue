<template>
  <v-form ref="form">
    <v-row justify="center">
      <v-col cols="1"> 料理名 </v-col>
      <v-col cols="7">
        <v-text-field
          variant="underlined"
          :counter="30"
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
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
          variant="underlined"
          label="数"
          v-model="member.age"
          :items="['0.3個', '0.5個', '1個', '1.5個', '2個', '2.5個', '3個']"
        ></v-select>
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
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
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
        ></v-select>
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
      <v-btn color="blue" rounded="xl" size="x-large" @click="next"
        >内容の確認
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type inputCookMenu } from '@/model/cookMenu'

const inputCookMenu2 = ref<inputCookMenu>({
  name: '',
  genre: undefined,
  weight: undefined,
  ingredients: [{ name: '', age: undefined }],
  seasonings: [{ name: '', age: undefined }],
  url: '',
  memo: ''
})

// todo:propsの使い方がよくわからない
// todo:commitの使い方がよくわからない
const emit = defineEmits(['nextPage'])

function next() {
  console.log('イベントの発火')
  emit('nextPage', 1, inputCookMenu2)
}

const addIngredient = () => inputCookMenu2.value.ingredients!.push({ name: '', age: undefined })
const reduceIngredient = (index: number) => inputCookMenu2.value.ingredients!.splice(index, 1)

const addSeasoning = () => inputCookMenu2.value.seasonings!.push({ name: '', age: undefined })
const reduceSeasoning = (index: number) => inputCookMenu2.value.seasonings!.splice(index, 1)
</script>
