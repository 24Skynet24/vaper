<template>
  <form @submit.prevent="redirectRoute()" ref="regForm" class="flex-column sing-in-form">
    <input type="text" name="first_name" class="input" v-model="first_name" required placeholder="Имя" autofocus minlength="2">
    <input type="text"  name="last_name" class="input" v-model="last_name" required placeholder="Фамилия" minlength="4">
    <input type="tel"  name="tel" class="input" v-model="tel" required placeholder="Телефон" minlength="5">
    <input type="email"  name="email" class="input" v-model="email" required placeholder="E-mail" minlength="4">
    <input type="password"  name="password" class="input" v-model="password" required placeholder="Пароль" minlength="8">
    <input type="password"  name="repeated_password" class="input" v-model="repeated_password" required placeholder="Повторите пароль" minlength="8">
    <div class="custom-checkbox" @click="checkbox = !checkbox">
      <div class="checkbox" :class="{'active-checkbox' : checkbox}">
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 7.5L6 12L16 1" stroke="white" stroke-width="2"/>
        </svg>
      </div>
      <span>Согласен с условиями обработки персональных данных</span>
    </div>
    <button type="submit" class="flex-center btn-green">
      Войти
    </button>
  </form>
</template>

<script>
export default {
  name: "RegistrationForm",
  data(){
    return {
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
      password: '',
      repeated_password: '',
      checkbox: false,
    }
  },
  methods: {
    redirectRoute(){
      this.$router.push('/profile/user')
      this.$store.commit('setGeneral', {path: 'signInModal', payload: false})
    }
  }
}
</script>

<style lang="scss" scoped>

.custom-checkbox {
  margin: rem(40) 0;

  @media screen and (max-width: 768px){
    margin: rem(30) auto;
  }
}

</style>
