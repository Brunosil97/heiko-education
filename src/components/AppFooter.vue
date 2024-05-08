<template>
  <v-bottom-navigation
    bg-color="primary"
    active
    location="bottom"
    class="menu-buttons"
  >
    <!-- Hidden item to fake the home button with -->
    <v-btn v-show="false" value="1"></v-btn>

    <v-btn :to="{ name: 'journals' }" value="2">
      <span>Journals</span>
      <v-icon icon="mdi-notebook" />
    </v-btn>

    <v-btn value="3" href="https://heikocbd.com/" target="_blank">
      <span>Heiko</span>
      <v-icon icon="mdi-home" />
    </v-btn>

    <v-menu location="top center">
      <template #activator="{ props }">
        <v-btn value="3" v-bind="props">
          <span>Socials</span>
          <v-icon icon="mdi-at" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="({ to, name, icon }, i) in getItems"
          :key="i"
          class="py-5"
          :href="to.includes('@') ? `mailto:${to}` : to"
          target="_blank"
          :title="name"
        >
          <template #prepend>
            <v-icon :icon="icon" size="large" color="primary" />
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-bottom-navigation>
</template>

<script setup>
import { computed } from "vue";

const getItems = computed(() => {
  return [
    {
      name: "Instagram",
      icon: "mdi-instagram",
      to: "https://www.instagram.com/heiko_cbd/",
    },
    {
      name: "Facebook",
      icon: "mdi-facebook",
      to: "https://www.facebook.com/HeikoCBD/",
    },
    { name: "Email Us", icon: "mdi-email", to: "info@heikocbd.com" },
  ];
});
</script>
