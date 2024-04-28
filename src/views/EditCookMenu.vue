<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import RegisterStepperHeaderComponent from '@/components/RegisterStepperHeader.vue'
import InputCookMenu from '@/components/InputCookMenu.vue'
import ConfirmInputCookMenu from '@/components/ConfirmInputCookMenu.vue'
import CompleteRegisterCookMenu from '@/components/CompleteRegisterCookMenu.vue'
import { updateCookMenu, getCookMenu } from '../api/foodMenu'
import { createRegisterReq } from '../util/cookMenuApiReq'
import { type inputCookMenu } from '@/model/cookMenu'

const route = useRoute()
const registerCookMenuStep = ref(1)
const a = ref(false)
const inputCookMenu2 = ref<inputCookMenu>({
  id: undefined,
  name: '',
  genre: undefined,
  weight: undefined,
  ingredients: [{ name: '', age: null }],
  seasonings: [{ name: '', age: null }],
  url: '',
  memo: ''
})

onMounted(() => {
  load()
})

const load = async () => {
  try {
    const { id } = route.params
    if (typeof id === 'string') {
      inputCookMenu2.value = await getCookMenu(id)
    }
  } catch (err) {
    console.log('エラー内容:', err)
  }
}

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
  console.log('データの確認:inputCookMenu2.value.id', inputCookMenu2.value.id)
  const res = await updateCookMenu(inputCookMenu2.value.id, reqInputCookMenu)
  console.log('更新処理結果:res', res)
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
