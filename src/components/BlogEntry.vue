<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container>
    <ConfirmDialog />
    <v-row no-gutters>
      <v-col cols="7">
        <div class="d-flex justify-space-between align-center">
          <v-list-item>
            <template #prepend>
              <v-avatar class="border-highlighted" color="secondary" size="46">
                <v-img :src="post.contributer.src" />
              </v-avatar>
            </template>
            <v-list-item-title
              >By {{ post.contributer.name }}</v-list-item-title
            >
            <v-list-item-subtitle>Contributer</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <v-badge bordered color="primary">
                <template #badge>
                  <v-icon icon="mdi-medical-bag" size="x-large"></v-icon>
                </template>

                <v-avatar
                  class="border-highlighted"
                  color="secondary"
                  size="46"
                >
                  <v-img :src="post.doctor.src" />
                </v-avatar>
              </v-badge>
            </template>
            <v-list-item-title>
              {{ post.doctor.name }}
              <v-chip color="primary" variant="outlined" size="x-small">
                Medically Approved
              </v-chip>
            </v-list-item-title>
            <v-list-item-subtitle>{{ post.doctor.title }}</v-list-item-subtitle>
          </v-list-item>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        <v-card-subtitle
          >Published on: {{ post.publishedDate }}</v-card-subtitle
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7">
        <div v-html="post.content"></div>
      </v-col>
      <v-col cols="5">
        <v-card>
          <v-card-title>Learn More about CBD</v-card-title>
          <v-card-text class="pa-0">
            <v-list-item
              v-for="latest in latestPosts"
              :key="latest.title"
              density="compact"
            >
              <v-list-item-title>{{ latest.title }}</v-list-item-title>
              <template #append>
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="small"
                  append-icon="mdi-open-in-new"
                  :href="latest.readMoreUrl"
                  target="_blank"
                >
                  VIEW
                </v-btn>
              </template>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="secondary"
              append-icon="mdi-open-in-new"
              variant="flat"
              href="https://heikocbd.com/shop-heiko-cbd-products/"
              target="_blank"
            >
              VISIT HEIKO CBD TO FIND OUT MORE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useBlogPosts } from "../components/data/journalEntries.js";

const posts = useBlogPosts();
// Define props to explicitly declare the slug
const props = defineProps({
  slug: {
    type: String,
    default() {
      return "/";
    },
  },
});

const latestPosts = computed(() => {
  return posts.value.filter((post) => post.slug != props.slug).slice(0, 4);
});

const post = computed(() => {
  return posts.value.find((p) => p.slug === props.slug);
});
</script>
