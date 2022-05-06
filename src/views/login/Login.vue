<template>
  <div class="form-cont login-cont" v-if="!loginedIn">
    <div class="form-item">
      <label>用户名</label>
      <input type="text" v-model="loginForm.username" placeholder="请输入用户名" />
    </div>
    <div class="form-item">
      <label>密码</label>
      <input type="password" v-model="loginForm.password" placeholder="请输入密码" />
    </div>
    <div class="form-item">
      <a class="login-btn margin-left-18" @click.prevent="login">登录</a>
    </div>
  </div>
  <div class="logout-cont" v-else>
    Wecome {{ user?.name }},
    <a class="logout-btn" @click.prevent="logout">Logout</a>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '@/compositions/useUser'

// 抽离了useUser的代码
const { loginForm, user, logout, login, loginedIn } = useUser()
</script>

<style scoped lang="scss">
.form-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-item {
  display: flex;
  justify-content: center;
  width: 480px;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    width: 100px;
    display: inline-block;
    text-align: right;
    margin-right: 20px;
    line-height: 40px;
  }

  input {
    width: 200px;
    height: 40px;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;

    &:focus {
      border: 1px solid #42b983;
    }
  }

  .login-btn {
    display: flex;
    width: 120px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #42b983;
    border: #42b983;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}

.logout-btn {
  color: #42b983;
  cursor: pointer;
}

.margin-left-18 {
  margin-left: 18px;
}
</style>
