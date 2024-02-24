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
    <v-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th style="width: 93%">Name</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foodLists" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <v-icon icon="mdi-dots-vertical"></v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-table>
  </v-container>
</template>
