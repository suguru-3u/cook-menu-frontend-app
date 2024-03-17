<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="indigo">
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

    <v-main>
      <RouterView />
    </v-main>
    <!-- <v-footer app color="primary">
      <v-btn color="primary" icon="mdi-home"></v-btn>
      <v-btn color="primary" icon="mdi-file"></v-btn>
      <v-btn color="primary" icon="mdi-google"></v-btn>
    </v-footer> -->
  </v-app>
</template>

<style scoped></style>
