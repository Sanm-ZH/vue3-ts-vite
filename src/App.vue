<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/todoList">Todo</router-link> |
    <router-link to="/header-panel-fixed">HFixed</router-link> |
    <router-link to="/text-transition">TextTransition</router-link> |
    <router-link to="/tabs">Tabs</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <component
      v-if="!$route.meta.keepAlive"
      :is="Component"
    />
    <keep-alive>
      <component
        v-if="$route.meta.keepAlive"
        :is="Component"
      />
    </keep-alive>
  </router-view>
</template>
