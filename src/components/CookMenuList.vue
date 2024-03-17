<template>
  <template v-if="foodLists.length > 0">
    <v-table :hover="true">
      <template v-slot:default>
        <thead>
          <tr>
            <th style="width: 93%">料理名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foodLists" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-icon icon="mdi-dots-vertical" v-bind="props"></v-icon>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="ma-2">編集</v-list-item-title>
                    <v-list-item-title class="ma-2">削除</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-table>
    <div class="text-center">
      <v-pagination circle></v-pagination>
    </div>
  </template>
  <template v-else>
    <h1 class="mt-10">登録している料理メニューはございません</h1>
  </template>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { foodMenuLists } from '../api/foodMenu'

const foodListsDatas = await foodMenuLists()

console.log('取得したデータの確認', foodListsDatas)

const foodLists = reactive(foodListsDatas)
</script>
