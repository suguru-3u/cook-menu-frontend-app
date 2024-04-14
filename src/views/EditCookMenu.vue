<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import RegisterStepperHeaderComponent from '@/components/RegisterStepperHeader.vue'
import InputCookMenu from '@/components/InputCookMenu.vue'
import ConfirmInputCookMenu from '@/components/ConfirmInputCookMenu.vue'
import CompleteRegisterCookMenu from '@/components/CompleteRegisterCookMenu.vue'
import { registerCookMenu, getCookMenu } from '../api/foodMenu'
import { createRegisterReq } from '../util/cookMenuApiReq'
import { type inputCookMenu } from '@/model/cookMenu'

const getEditCookMenu = async () => {
  const route = useRoute()
  const { id } = route.params
  if (typeof id === 'string') {
    const cookMenu = await getCookMenu(id)
    console.log('取得データの確認', cookMenu)
  }
}
getEditCookMenu()

const inputCookMenu2 = ref<inputCookMenu>({
  name: '',
  genre: undefined,
  weight: undefined,
  ingredients: [{ name: '', age: undefined }],
  seasonings: [{ name: '', age: undefined }],
  url: '',
  memo: ''
})

// const registerCookMenuStep = ref(1)
// const a = ref(false)

// const updatePage = (count: number, inputCookMenu3: inputCookMenu) => {
//   console.log('登録確認内容ページへ遷移')
//   Object.assign(inputCookMenu2, inputCookMenu3)
//   registerCookMenuStep.value = registerCookMenuStep.value + count
// }

// const updatePage2 = async (count: number) => {
//   console.log('イベントを検知')
//   console.log(typeof count)
//   a.value = true
//   await registerCookMenuAction()
//   registerCookMenuStep.value = registerCookMenuStep.value + count
// }

// const onAfterLeave = () => {
//   a.value = false
// }

// const registerCookMenuAction = async () => {
//   console.log('献立メニューの送信を実施')
//   const reqInputCookMenu = createRegisterReq(inputCookMenu2.value)
//   await registerCookMenu(reqInputCookMenu)
// }

// const changeInputfoodMenu = () => {
//   console.log('イベント受信')
// }
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
  <!-- <RegisterStepperHeaderComponent :register-step-number="registerCookMenuStep" />
  <v-container class="pa-10">
    <template v-if="registerCookMenuStep === 1">
      <InputCookMenu @nextPage="updatePage" @inputFoodMenu="changeInputfoodMenu" />
    </template>
    <template v-if="registerCookMenuStep === 2 && !a">
      <ConfirmInputCookMenu
        @nextPage="updatePage2"
        @backPage="updatePage"
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
  </v-container> -->
  <h1>Hello</h1>
</template>
