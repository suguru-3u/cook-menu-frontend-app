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
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in foodLists" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
