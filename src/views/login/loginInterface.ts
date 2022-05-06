import { ComputedRef } from 'vue'

export interface useUserProps {
  loginForm: loginModel
  user: any
  login: () => void
  loginedIn: ComputedRef<boolean>
  logout: () => void
}

export type loginModel = {
  username: string
  password: string
}
