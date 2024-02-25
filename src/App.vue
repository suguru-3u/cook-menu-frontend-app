<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-card class="mb-15">
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar color="primary" prominent>
        <v-toolbar-title>Cook Menu Management App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn>
          <RouterLink to="/" class="text-white font-weight-black text-decoration-none"
            >料理一覧</RouterLink
          >
        </v-btn>
        <v-btn>
          <RouterLink
            to="/register/cook-menu"
            class="text-white font-weight-black text-decoration-none"
            >料理の登録</RouterLink
          >
        </v-btn>
      </v-app-bar>
    </v-layout>
  </v-card>
  <RouterView />
</template>

<style scoped></style>
