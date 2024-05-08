<template>
  <v-app-bar
    dense
    :color="isScrolled ? 'primary' : 'transparent'"
    class="pa-5 logoBar"
  >
    <!-- Logo in the center -->
    <div class="logo-center">
      <img :src="getLogo" alt="Logo" height="60" />
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}
const getLogo = computed(() => {
  return new URL("@/assets/Heiko-Logo.png", import.meta.url).href;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.logo-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
