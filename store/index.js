export const state = () => {
  return {
    ageVerificationModal: false,
    cookiesModal: false,
    signInModal: false,
    passRecoveryModal: false,
  }
}


export const mutations = {
  setGeneral(state, {path, payload}){
    state[path] = payload
  }
}


export const getters = {

}

