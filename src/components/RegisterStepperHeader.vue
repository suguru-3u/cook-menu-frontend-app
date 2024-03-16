<script setup lang="ts">
const props = defineProps<{
  registerStepNumber: number
}>()
</script>

<template>
  <v-stepper alt-labels class="pt-1">
    <v-stepper-header>
      <v-stepper-item
        :complete="props.registerStepNumber > 1"
        title="入力"
        value="1"
      ></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        :complete="props.registerStepNumber > 2"
        title="確認"
        value="2"
      ></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item title="完了" value="3"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
</template>
