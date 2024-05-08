<template>
  <v-container>
    <router-view v-slot="{ Component }">
      <transition :name="'slide-right'" :mode="'out-in'">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </v-container>
</template>

<script setup>
//
</script>

<style>
.knowledge {
  color: #319be7;
  font-family: "Alata", Sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1em;
}
</style>
