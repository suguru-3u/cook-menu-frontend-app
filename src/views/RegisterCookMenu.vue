<script setup lang="ts"></script>

<template>
  <v-container class="pa-10">
    <v-row align="center" no-gutters style="height: 150px">
      <v-col>
        <v-icon icon="mdi-numeric-1-box-outline" size="x-large"></v-icon>
        <span>入力</span>
      </v-col>
      <v-col>
        <v-icon icon="mdi-numeric-2-box-outline" size="x-large"></v-icon>
        <span>確認</span>
      </v-col>
      <v-col>
        <v-icon icon="mdi-numeric-3-box-outline" size="x-large"></v-icon>
        <span>完了</span>
      </v-col>
    </v-row>
    <v-form ref="form">
      <v-text-field :counter="10" label="料理名" required></v-text-field>

      <v-text-field label="E-mail" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Validate </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
    </v-form>
  </v-container>
</template>
