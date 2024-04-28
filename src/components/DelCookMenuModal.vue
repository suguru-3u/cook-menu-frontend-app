<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  delModalFlg: {
    type: Boolean,
    required: true
  },
  cookMenuNameId: {
    type: Number,
    required: true
  },
  cookMenuName: {
    type: String,
    required: true
  }
})

const delModalFlg = ref(props.delModalFlg)
watch(props, () => {
  delModalFlg.value = props.delModalFlg
})

const emit = defineEmits(['delCookMenu', 'closeDelModal'])
const delCookMenuFn = () => emit('delCookMenu', props.cookMenuNameId)
const closeDelModalFn = () => emit('closeDelModal')
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="delModalFlg" width="500">
      <v-card v-click-outside="closeDelModalFn">
        <v-card-title class="text-h5 grey lighten-2">本当に削除しますか？</v-card-title>
        <v-card-text>料理名：{{ props.cookMenuName }} </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="delCookMenuFn">削除</v-btn>
          <v-btn color="primary" @click="closeDelModalFn">キャンセル</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
