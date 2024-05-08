<template>
  <BlogEntry v-if="!isMobile" :slug="slug" />
  <BlogMobile v-else :slug="slug" />
</template>

<script setup>
import { useDisplay } from "vuetify";
import BlogMobile from "@/components/BlogMobile.vue";

const { mobile: isMobile } = useDisplay();

// Define props to explicitly declare the slug
const props = defineProps({
  slug: {
    type: String,
    default() {
      return "/";
    },
  },
});
</script>
