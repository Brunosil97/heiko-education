<template>
  <v-app>
    <!-- Header Component -->
    <app-header />

    <!-- Background Image Section -->
    <v-img
      :src="currentPost ? currentPost.imgSrc : defaultImgSrc"
      height="45vh"
      class="transition-frame d-flex"
      cover
    >
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="text-white text-center" style="font-size: 36px">
            {{
              currentPost
                ? currentPost.title
                : "Read more about the power of CBD"
            }}
          </h1>
        </v-col>
      </v-row>
    </v-img>

    <v-main :class="isMobile ? 'pa-0' : 'pa-10'">
      <appBody />
    </v-main>

    <appFooter />
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import { useBlogPosts } from "./components/data/journalEntries.js";

const { mobile: isMobile } = useDisplay();
const route = useRoute();
const posts = useBlogPosts();

const defaultImgSrc =
  "https://heikocbd.com/wp-content/uploads/2021/07/fleur-kaan-w4Dj3MshHQ0-unsplash-copy-scaled.jpg";

const currentPost = computed(() => {
  return posts.value.find((post) => post.slug === route.params.slug);
});
</script>

<style>
.transition-frame {
  transition: all 0.3s linear;
}

.v-responsive__content {
  display: flex;
}
</style>
