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
        <td>カツ丼</td>
      </tr>
      <tr>
        <td>ジャンル</td>
        <td>和食</td>
      </tr>
      <tr>
        <td>重さ</td>
        <td>重め</td>
      </tr>
      <tr>
        <td>食材</td>
        <td>カツ</td>
      </tr>
      <tr>
        <td>調味料</td>
        <td>和風だし</td>
      </tr>
      <tr>
        <td>URL</td>
        <td>https://google.com</td>
      </tr>
      <tr>
        <td>メモ</td>
        <td>カツ丼はたまに無性に食べたくなる</td>
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
const emit = defineEmits(['nextPage', 'backPage'])

function next() {
  console.log('イベントの発火')
  emit('nextPage', 1)
}

function back() {
  console.log('イベントの発火')
  emit('backPage', -1)
}
</script>
