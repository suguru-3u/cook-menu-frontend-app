<script setup lang="ts">
import { reactive, ref } from 'vue'
// import { cookMenuRequest } from '@/model/cookMenu'
type inputCookMenu = {
  name: string
  genre?: string
  weight?: string
  ingredients: []
  seasoning: []
  url: string
  memo: string
}

const inputCookMenu2 = ref<inputCookMenu>({
  name: '',
  genre: undefined,
  weight: undefined,
  ingredients: [],
  seasoning: [],
  url: '',
  memo: ''
})

// todo:propsの使い方がよくわからない
// todo:commitの使い方がよくわからない
const emit = defineEmits(['nextPage'])

function next() {
  console.log('イベントの発火')
  emit('nextPage', 1)
}

const ingredients = ref([{ name: '', age: undefined }])
const seasonings = ref([{ name: '', age: undefined }])

const addIngredient = () => ingredients.value.push({ name: '', age: undefined })
const reduceIngredient = (index: number) => ingredients.value.splice(index, 1)

const addSeasoning = () => seasonings.value.push({ name: '', age: undefined })
const reduceSeasoning = (index: number) => seasonings.value.splice(index, 1)
</script>

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
      <v-col cols="1">
        <v-subheader>ジャンル</v-subheader>
      </v-col>
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
      <v-col cols="1">
        <v-subheader>料理の重さ</v-subheader>
      </v-col>
      <v-col cols="7">
        <v-select chips variant="underlined" :items="['軽め', '普通', '重め']"></v-select>
      </v-col>
    </v-row>
    <v-row v-for="(member, index) in ingredients" :key="index" justify="center">
      <v-col cols="1">
        <v-subheader>食材</v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
          variant="underlined"
          label="数"
          :items="['0.3個', '0.5個', '1個', '1.5個', '2個', '2.5個', '3個']"
        ></v-select>
      </v-col>

      <v-col cols="2">
        <v-btn @click="addIngredient" icon="mdi-plus"></v-btn>
        <v-btn
          v-if="ingredients.length > 1"
          @click="reduceIngredient(index)"
          icon="mdi-minus"
        ></v-btn>
        <!-- <v-btn dark small color="grey" class="ma-2" @click="addInput(member.id)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <v-btn dark small color="grey" class="ma-2" @click="removeInput(member.id)">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn> -->
      </v-col>
    </v-row>
    <v-row v-for="(member, index) in seasonings" :key="index" justify="center">
      <v-col cols="1">
        <v-subheader>調味料</v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
          variant="underlined"
          label="量"
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
        <v-btn @click="addSeasoning" icon="mdi-plus"></v-btn>
        <v-btn
          v-if="seasonings.length > 1"
          @click="reduceSeasoning(index)"
          icon="mdi-minus"
        ></v-btn>
        <!-- <v-btn dark small color="grey" class="ma-2" @click="addInput(member.id)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <v-btn dark small color="grey" class="ma-2" @click="removeInput(member.id)">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-subheader>URL</v-subheader>
      </v-col>
      <v-col cols="7">
        <v-text-field variant="underlined" :counter="126" required></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-textarea
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
