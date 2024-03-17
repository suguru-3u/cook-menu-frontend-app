<script setup lang="ts">
import CookMenuList from '@/components/CookMenuList.vue'
</script>

<template>
  <v-container>
    <Transition mode="out-in">
      <Suspense>
        <template #default>
          <CookMenuList />
        </template>
        <template #fallback>
          <v-layout justify-center align-center height="1000vh">
            <v-progress-circular
              color="primary"
              indeterminate
              :size="280"
              :width="12"
              class="mx-auto mt-16"
            >
              料理レシピを取得しています
            </v-progress-circular>
          </v-layout>
        </template>
      </Suspense>
    </Transition>
  </v-container>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease-in-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
