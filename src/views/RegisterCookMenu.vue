<script setup lang="ts">
import { ref } from 'vue'

import RegisterStepperHeaderComponent from '@/components/RegisterStepperHeader.vue'
import InputCookMenu from '@/components/InputCookMenu.vue'
import ConfirmInputCookMenu from '@/components/ConfirmInputCookMenu.vue'
import CompleteRegisterCookMenu from '@/components/CompleteRegisterCookMenu.vue'

const registerCookMenuStep = ref(1)

const updatePage = (count: number) => {
  console.log('イベントを検知')
  console.log(typeof count)
  registerCookMenuStep.value = registerCookMenuStep.value + count
}
</script>

<template>
  <RegisterStepperHeaderComponent :register-step-number="registerCookMenuStep" />
  <v-container class="pa-10">
    <template v-if="registerCookMenuStep === 1">
      <InputCookMenu @nextPage="updatePage" />
    </template>
    <template v-if="registerCookMenuStep === 2">
      <ConfirmInputCookMenu @nextPage="updatePage" @backPage="updatePage" />
    </template>
    <template v-if="registerCookMenuStep === 3">
      <CompleteRegisterCookMenu />
    </template>
  </v-container>
</template>
