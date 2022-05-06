import { computed, reactive, ref } from 'vue'
import { loginModel, useUserProps } from '@/views/login/loginInterface'

export const useUser = ():useUserProps => {
  const loginForm:loginModel = reactive({
    username: '',
    password: ''
  })

  const user = ref()

  const login = async() => {
    user.value = { id: 1, name: loginForm.username }
    console.log('登录成功')
  }

  const loginedIn = computed(():boolean => user.value?.id)

  const logout = async() => {
    user.value = null
    console.log('登出成功')
  }

  return {
    loginForm,
    user,
    login,
    loginedIn,
    logout
  }
}
