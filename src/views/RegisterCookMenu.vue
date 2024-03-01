<script setup lang="ts"></script>

<template>
  <v-stepper alt-labels class="pt-1">
    <v-stepper-header>
      <v-stepper-item title="入力" value="1"></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item title="確認" value="2"></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item title="完了" value="3"></v-stepper-item>
    </v-stepper-header>
  </v-stepper>
  <v-container class="pa-10">
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
