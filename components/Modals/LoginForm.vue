<template>
  <form @submit.prevent="redirectRoute()" ref="loginForm" class="flex-column sing-in-form">
    <input type="email" name="email" class="input" v-model="email" required placeholder="E-mail" autofocus minlength="5">
    <input type="password"  name="password" class="input" v-model="password" required placeholder="Пароль" autofocus minlength="8">
    <span class="form-text" @click="openModal('passRecoveryModal')">Забыли пароль?</span>
    <button type="submit" class="flex-center btn-green">
      Войти
    </button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data(){
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    openModal(path){
      this.$store.commit('setGeneral', {path: 'signInModal', payload: false})
      this.$store.commit('setGeneral', {path: path, payload: true})
    },
    redirectRoute(){
      this.$router.push('/profile/user')
      this.$store.commit('setGeneral', {path: 'signInModal', payload: false})
    }
  }
}
</script>
