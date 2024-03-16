<template>
  <div class="text-center ma-16 pa-16">
    <h2>
      料理メニューの登録が完了しました
      <v-icon color="blue" icon="mdi-checkbox-marked-circle"></v-icon>
    </h2>
    <v-btn class="ma-16" color="blue" rounded="xl" size="x-large" @click="backListpage"
      >一覧画面に戻る
      <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const backListpage = () => {
  router.push('/')
}
</script>
