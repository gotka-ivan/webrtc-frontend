<template>
  <div class="wrapper">
    <LoginForm message="message" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LoginForm from '@/components/LoginForm.vue'

@Options({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {}
</script>
