<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/todoList">Todo</router-link>
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
