RegisterCookMenu.vue

<script setup lang="ts">
import { ref } from 'vue'

import RegisterStepperHeaderComponent from '@/components/RegisterStepperHeader.vue'
import InputCookMenu from '@/components/InputCookMenu.vue'
import ConfirmInputCookMenu from '@/components/ConfirmInputCookMenu.vue'
import CompleteRegisterCookMenu from '@/components/CompleteRegisterCookMenu.vue'
import { registerCookMenu } from '../api/foodMenu'
import { createRegisterReq } from '../util/cookMenuApiReq'
import { type inputCookMenu } from '@/model/cookMenu'

const inputCookMenu2 = ref<inputCookMenu>({
  name: '',
  genre: undefined,
  weight: undefined,
  ingredients: [{ name: '', age: null }],
  seasonings: [{ name: '', age: null }],
  url: '',
  memo: ''
})

const registerCookMenuStep = ref(1)
const a = ref(false)

const confirmInputPage = (inputCookMenu3: inputCookMenu) => {
  const confirmInputStepNum = 2
  Object.assign(inputCookMenu2, inputCookMenu3)
  registerCookMenuStep.value = confirmInputStepNum
}

const backPage = () => {
  const backStepNum = -1
  registerCookMenuStep.value = registerCookMenuStep.value + backStepNum
}

const completeRegisterPage = async () => {
  const completeRegisterStepNum = 3
  a.value = true
  await registerCookMenuAction()
  registerCookMenuStep.value = completeRegisterStepNum
}

const onAfterLeave = () => {
  a.value = false
}

const registerCookMenuAction = async () => {
  console.log('献立メニューの送信を実施')
  const reqInputCookMenu = createRegisterReq(inputCookMenu2.value)
  await registerCookMenu(reqInputCookMenu)
}

const changeInputfoodMenu = () => {
  console.log('イベント受信')
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

<template>
  <RegisterStepperHeaderComponent :register-step-number="registerCookMenuStep" />
  <v-container class="pa-10">
    <template v-if="registerCookMenuStep === 1">
      <InputCookMenu @nextPage="confirmInputPage" :input-Cook-Menu-Data="inputCookMenu2" />
    </template>
    <template v-if="registerCookMenuStep === 2 && !a">
      <ConfirmInputCookMenu
        @nextPage="completeRegisterPage"
        @backPage="backPage"
        :confirm-input-cook-menu="inputCookMenu2"
      />
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
