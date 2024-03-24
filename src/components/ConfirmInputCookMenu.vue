<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">登録項目</th>
        <th class="text-left">登録値</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>料理名</td>
        <td>{{ props.confirmInputCookMenu.name }}</td>
      </tr>
      <tr>
        <td>ジャンル</td>
        <td>{{ props.confirmInputCookMenu.genre }}</td>
      </tr>
      <tr>
        <td>重さ</td>
        <td>{{ props.confirmInputCookMenu.weight }}</td>
      </tr>
      <tr>
        <td>食材</td>
        <td style="white-space: pre-wrap" v-text="cookIngredients"></td>
      </tr>
      <tr>
        <td>調味料</td>
        <td>和風だし</td>
      </tr>
      <tr>
        <td>URL</td>
        <td>{{ props.confirmInputCookMenu.url }}</td>
      </tr>
      <tr>
        <td>メモ</td>
        <td>{{ props.confirmInputCookMenu.memo }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-row justify="end">
    <v-col cols="1">
      <v-btn color="blue" rounded="xl" size="x-large" @click="back"
        >戻る
        <v-icon icon="mdi-keyboard-return" end></v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn color="blue" rounded="xl" size="x-large" @click="next"
        >登録
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { type inputCookMenu } from '@/model/cookMenu'
import { ref, computed, type PropType } from 'vue'

const props = defineProps({
  confirmInputCookMenu: {
    type: Object as PropType<inputCookMenu>,
    required: true
  }
})
const inputCookMenu2 = ref(props.confirmInputCookMenu)

console.log('propsの確認', inputCookMenu2)
console.log('propsの確認', inputCookMenu2.value)
console.log('propsの確認', props.confirmInputCookMenu)

const emit = defineEmits(['nextPage', 'backPage'])

const cookIngredients = computed(() => {
  let confirmInputIngredients: string = ''
  props.confirmInputCookMenu?.ingredients.forEach((ingredient) => {
    confirmInputIngredients += ingredient.name + ' : ' + ingredient.age + '\n'
  })
  return confirmInputIngredients
})

function next() {
  console.log('イベントの発火')
  emit('nextPage', 1)
}

function back() {
  console.log('イベントの発火')
  emit('backPage', -1)
}
</script>
