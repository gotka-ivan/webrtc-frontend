/* eslint-disable vue/max-attributes-per-line */
<template>
  <div
    class="tw-w-full tw-min-h-screen tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-p-14px tw-bg-gray-200"
  >
    <div class="tw-w-560px tw-bg-white tw-rounded-xl tw-relative tw-px-84px tw-py-54px">
      <form class="tw-w-full tw-flex tw-justify-between tw-flex-wrap">
        <span class="tw-text-30px tw-text-gray-800 tw-uppercase tw-text-left tw-w-full tw-block tw-pb-32px">
          Account Login
        </span>

        <span class="tw-text-13px tw-text-gray-800 tw-uppercase tw-leading-4"> Username </span>
        <TextInput
          id="text1"
          v-model="auth.password"
          :placeholder="'Введите новый пароль'"
          :invalid="error.state"
          class="tw-w-full"
        >
          <div>{{ error.message }}</div>
        </TextInput>

        <span class="tw-text-13px tw-text-gray-800 tw-uppercase tw-leading-4"> Password </span>
        <TextInput
          id="text1"
          v-model="auth.password"
          :placeholder="'Введите новый пароль'"
          :invalid="error.state"
          class="tw-w-full"
        >
          <div>{{ error.message }}</div>
        </TextInput>

        <div class="flex-sb-m w-full p-b-48">
          <div class="contact100-form-checkbox">
            <input id="ckb1" type="checkbox" class="input-checkbox100" name="remember-me" />
            <label class="label-checkbox100" for="ckb1"> Remember me </label>
          </div>

          <div>
            <a class="txt3" href="#"> Forgot Password? </a>
          </div>
        </div>

        <div class="container-login100-form-btn">
          <button class="login100-form-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TextInput from '@/components/ui/inputs/TextInput.vue'

@Options({
  components: {
    TextInput,
  },
})
export default class HelloWorld extends Vue {
  error = {
    state: false,
    message: null,
  }
  auth = {
    login: '',
    password: '',
  }
}
</script>
<style lang="less"></style>
