<script setup lang="ts">
import { reactive } from 'vue'
// todo:propsの使い方がよくわからない
// todo:commitの使い方がよくわからない
const emit = defineEmits(['nextPage'])

function next() {
  console.log('イベントの発火')
  emit('nextPage', 1)
}
const memberList = reactive([{ id: 0, name: '', age: null }])
</script>

<template>
  <v-form ref="form">
    <v-row justify="center">
      <v-col cols="1"> 料理名 </v-col>
      <v-col cols="7">
        <v-text-field variant="underlined" :counter="30" required></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-subheader>ジャンル</v-subheader>
      </v-col>
      <v-col cols="7">
        <v-select
          chips
          variant="underlined"
          :items="['和食', '中華', '洋食', 'エスニック']"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-subheader>料理の重さ</v-subheader>
      </v-col>
      <v-col cols="7">
        <v-select chips variant="underlined" :items="['軽め', '普通', '重め']"></v-select>
      </v-col>
    </v-row>
    <v-row v-for="member in memberList" :key="member.id" justify="center">
      <v-col cols="1">
        <v-subheader>食材</v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
          variant="underlined"
          label="数"
          :items="['0.3個', '0.5個', '1個', '1.5個', '2個', '2.5個', '3個']"
        ></v-select>
      </v-col>

      <v-col cols="2">
        <v-btn icon="mdi-plus"></v-btn>
        <v-btn icon="mdi-minus"></v-btn>
        <!-- <v-btn dark small color="grey" class="ma-2" @click="addInput(member.id)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <v-btn dark small color="grey" class="ma-2" @click="removeInput(member.id)">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn> -->
      </v-col>
    </v-row>
    <v-row v-for="member in memberList" :key="member.id" justify="center">
      <v-col cols="1">
        <v-subheader>調味料</v-subheader>
      </v-col>
      <v-col cols="3">
        <v-text-field variant="underlined" label="名前" v-model="member.name"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-select
          clearable
          chips
          variant="underlined"
          label="量"
          :items="[
            '小さじ1',
            '小さじ2',
            '小さじ3',
            '小さじ4',
            '小さじ5',
            '大さじ1',
            '大さじ2',
            '大さじ3',
            '大さじ4',
            '大さじ5'
          ]"
        ></v-select>
      </v-col>

      <v-col cols="2">
        <v-btn icon="mdi-plus"></v-btn>
        <v-btn icon="mdi-minus"></v-btn>
        <!-- <v-btn dark small color="grey" class="ma-2" @click="addInput(member.id)">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
              <v-btn dark small color="grey" class="ma-2" @click="removeInput(member.id)">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn> -->
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="1">
        <v-subheader>URL</v-subheader>
      </v-col>
      <v-col cols="7">
        <v-text-field variant="underlined" :counter="126" required></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-textarea
          variant="outlined"
          counter="1000"
          clearable
          auto-grow
          clear-icon="mdi-close-circle"
          label="メモ"
          rows="8"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-form>
  <v-row justify="end">
    <v-col cols="2">
      <v-btn color="blue" rounded="xl" size="x-large" @click="next"
        >内容の確認
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
