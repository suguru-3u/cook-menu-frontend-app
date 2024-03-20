<template>
  <RegisterStepperHeaderComponent :register-step-number="registerCookMenuStep" />
  <v-container class="pa-10">
    <template v-if="registerCookMenuStep === 1">
      <InputCookMenu @nextPage="updatePage" />
    </template>
    <template v-if="registerCookMenuStep === 2 && !a">
      <ConfirmInputCookMenu @nextPage="updatePage2" @backPage="updatePage" />
    </template>
    <Transition @after-leave="onAfterLeave">
      <template v-if="registerCookMenuStep === 2 && a">
        <v-layout justify-center align-center height="1000vh">
          <v-progress-circular
            color="primary"
            indeterminate
            :size="280"
            :width="12"
            class="mx-auto mt-16"
          >
            料理レシピを登録しています
          </v-progress-circular>
        </v-layout>
      </template>
    </Transition>
    <template v-if="registerCookMenuStep === 3 && !a">
      <CompleteRegisterCookMenu />
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import RegisterStepperHeaderComponent from '@/components/RegisterStepperHeader.vue'
import InputCookMenu from '@/components/InputCookMenu.vue'
import ConfirmInputCookMenu from '@/components/ConfirmInputCookMenu.vue'
import CompleteRegisterCookMenu from '@/components/CompleteRegisterCookMenu.vue'
import { registerCookMenu } from '../api/foodMenu'
import { type cookMenuRequest } from '../model/cookMenu'

const registerCookMenuStep = ref(1)
const a = ref(false)

const updatePage = (count: number) => {
  console.log('イベントを検知')
  console.log(typeof count)
  registerCookMenuStep.value = registerCookMenuStep.value + count
}

const updatePage2 = async (count: number) => {
  console.log('イベントを検知')
  console.log(typeof count)
  a.value = true
  await registerCookMenuAction()
  registerCookMenuStep.value = registerCookMenuStep.value + count
}

const onAfterLeave = () => {
  a.value = false
}

const registerCookMenuAction = async () => {
  console.log('献立メニューの送信を実施')
  const requestData: cookMenuRequest = {
    name: 'ところてん',
    genre: 1,
    weight: 1,
    ingredients: [
      {
        name: 'テスト',
        count: 2
      }
    ],
    seasoning: [
      {
        name: 'テスト',
        count: 2
      }
    ],
    url: '********.com',
    memo: 'テスト'
  }
  await registerCookMenu(requestData)
}
</script>

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
