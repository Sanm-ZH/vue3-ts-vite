import { computed, reactive, ref } from 'vue'

export const useUser = ():any => {
  const loginModel = reactive({
    username: '',
    password: ''
  })

  const user = ref()

  const login = async() => {
    user.value = { id: 1, name: loginModel.username }
    console.log('登录成功')
  }

  const loginedIn = computed(() => user.value?.id)

  const logout = async() => {
    user.value = null
    console.log('登出成功')
  }

  return {
    loginModel,
    user,
    login,
    loginedIn,
    logout
  }
}
