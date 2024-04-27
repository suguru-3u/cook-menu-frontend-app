<template>
  <template v-if="foodLists.length > 0">
    <v-table :hover="true">
      <template v-slot:default>
        <thead>
          <tr>
            <th style="width: 93%">料理名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in foodLists" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-icon icon="mdi-dots-vertical" v-bind="props"></v-icon>
                </template>
                <v-list>
                  <v-list-item @click="editCookMenu(item)">
                    <v-list-item-title class="ma-2">編集</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="opeanDelModal(item)">
                    <v-list-item-title class="ma-2">削除</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </template>
    </v-table>
    <div class="text-center">
      <v-pagination></v-pagination>
    </div>
    <template
      ><DelCookMenuModal
        :del-modal-flg="delModalFlg"
        :cook-menu-name-id="delCookMenuNameId"
        :cook-menu-name="delCookMenuName"
        @delCookMenu="delCookMenu"
        @closeDelModal="closeDelModal"
    /></template>
  </template>
  <template v-else>
    <h1 class="mt-10">登録している料理メニューはございません</h1>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DelCookMenuModal from './DelCookMenuModal.vue'
import { foodMenuLists, deleteCookMenu } from '../api/foodMenu'
import { useRouter } from 'vue-router'

const delModalFlg = ref(false)
const delCookMenuNameId = ref('')
const delCookMenuName = ref('')
const router = useRouter()

const opeanDelModal = (foodMenu) => {
  delModalFlg.value = true
  delCookMenuNameId.value = foodMenu.id
  delCookMenuName.value = foodMenu.name
}

const editCookMenu = (cookMenu) => {
  router.push(`/cook-menu/${cookMenu.id}`)
}

const delCookMenu = async (id: number) => {
  const res = await deleteCookMenu(id)
  console.log('レスポンス結果', res)
  delModalFlg.value = false
}

const closeDelModal = () => {
  delModalFlg.value = false
}

async function getCookMenuLists() {
  return await foodMenuLists()
}

const foodLists = ref(await getCookMenuLists())
const dialog = ref(true)
</script>
