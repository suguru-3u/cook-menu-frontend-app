<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const registerCookMenuStep = ref<number>(2)
const memberList = reactive([{ id: 0, name: '', age: null }])

const router = useRouter()

const backListpage = () => {
  router.push('/')
}
</script>

<template>
  <v-stepper alt-labels class="pt-1">
    <v-stepper-header>
      <v-stepper-item :complete="registerCookMenuStep > 1" title="入力" value="1"></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item :complete="registerCookMenuStep > 2" title="確認" value="2"></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item title="完了" value="3"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
  <v-container class="pa-10">
    <template v-if="registerCookMenuStep === 1">
      <v-form ref="form">
        <v-row justify="center">
          <v-col cols="1">
            <v-subheader>料理名</v-subheader>
          </v-col>
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
        <!-- <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox> -->

        <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Validate </v-btn>
    
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    
          <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
      </v-form>
      <v-row justify="end">
        <v-col cols="2">
          <v-btn color="blue" rounded="xl" size="x-large" @click="registerCookMenuStep += 1"
            >内容の確認
            <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-if="registerCookMenuStep === 2">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">登録項目</th>
            <th class="text-left">登録値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>料理名</td>
            <td>カツ丼</td>
          </tr>
          <tr>
            <td>ジャンル</td>
            <td>和食</td>
          </tr>
          <tr>
            <td>重さ</td>
            <td>重め</td>
          </tr>
          <tr>
            <td>食材</td>
            <td>カツ</td>
          </tr>
          <tr>
            <td>調味料</td>
            <td>和風だし</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>https://google.com</td>
          </tr>
          <tr>
            <td>メモ</td>
            <td>カツ丼はたまに無性に食べたくなる</td>
          </tr>
        </tbody>
      </v-table>
      <v-row justify="end">
        <v-col cols="1">
          <v-btn color="blue" rounded="xl" size="x-large" @click="registerCookMenuStep -= 1"
            >戻る
            <v-icon icon="mdi-keyboard-return" end></v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn color="blue" rounded="xl" size="x-large" @click="registerCookMenuStep += 1"
            >登録
            <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-if="registerCookMenuStep === 3">
      <div class="text-center ma-16 pa-16">
        <h2>
          料理メニューの登録が完了しました
          <v-icon color="blue" icon="mdi-checkbox-marked-circle"></v-icon>
        </h2>
        <v-btn class="ma-16" color="blue" rounded="xl" size="x-large" @click="backListpage"
          >一覧画面に戻る
          <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
        </v-btn>
      </div>
    </template>
  </v-container>
</template>
