import { computed, reactive, ref } from 'vue'
import { LoginForm, UseUserProps, UserInfo, UserStatus } from '@/views/login/LoginModel'

const user = ref<UserInfo>()

export const useUser = (): UseUserProps => {
  const userInit = () => {
    if (user.value?.status === UserStatus.REGISTER) {
      user.value = { status: UserStatus.OFFLINE }
    }
  }

  const loginForm = reactive<LoginForm>({
    username: '',
    password: ''
  })
  const login = async() => {
    user.value = { id: 1, name: loginForm.username, status: UserStatus.ONLINE }
    console.log('登录成功')
  }
  const logout = async() => {
    user.value = { status: UserStatus.OFFLINE }
    console.log('登出成功')
  }

  const registerForm = reactive<LoginForm>({
    username: '',
    password: ''
  })
  const register = async() => {
    user.value = { status: UserStatus.REGISTER }
    console.log('注册成功')
  }

  const userStatus = computed(() => {
    if (user.value?.status) {
      return user.value.status
    }
    return UserStatus.OFFLINE
  })

  return {
    userInit,
    loginForm,
    user,
    login,
    userStatus,
    logout,

    registerForm,
    register
  }
}
