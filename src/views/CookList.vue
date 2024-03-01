<script setup lang="ts">
import { reactive } from 'vue'

const foodLists = reactive([
  {
    name: 'そば',
    calories: 100
  },
  {
    name: 'うどん',
    calories: 200
  },
  {
    name: 'そうめん',
    calories: 200
  }
])
</script>
<template>
  <v-container>
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
  </v-container>
</template>
