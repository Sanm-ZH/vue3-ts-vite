import { ComputedRef } from 'vue'

export const enum UserStatus {
  OFFLINE = 'offline',
  ONLINE = 'online',
  REGISTER = 'register'
}

export interface UseUserProps {
  loginForm: LoginForm
  user: any
  login: () => void
  userStatus: ComputedRef<UserStatus>
  logout: () => void
  [key: string]: any
}

export type LoginForm = {
  username: string
  password: string
}

export type UserInfo = {
  id?: number
  name?: string
  status: UserStatus
}

export type RegisterModle = {
  username: string
  password: string
  rpassword: string
}
