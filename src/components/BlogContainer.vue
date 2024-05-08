<template>
  <v-container>
    <ConfirmDialog />
    <!-- Your main content here -->
    <v-row class="text-center" no-gutters>
      <v-col cols="12">
        <v-card-title class="knowledge">KNOWLEDGE IS POWER</v-card-title>
      </v-col>
      <v-col cols="12">
        <v-card-title>Welcome to our journal</v-card-title>
      </v-col>
      <v-col cols="12">
        <v-card-subtitle>Learn about the power of CBD.</v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" sm="6" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img :src="post.imgSrc" class="align-end" height="200px" cover>
          </v-img>
          <v-card-title class="font-weight-bold">
            {{ post.title }}
          </v-card-title>
          <v-card-subtitle v-if="post.medicallyApproved">
            <v-chip class="mt-2" color="primary" variant="outlined">
              Medically Approved
              <v-icon icon="mdi-medical-bag" end></v-icon>
            </v-chip>
          </v-card-subtitle>
          <v-card-text>
            {{ post.snippet }}
          </v-card-text>
          <v-card-subtitle>
            Published on {{ post.publishedDate }}
          </v-card-subtitle>
          <v-card-actions class="justify-end">
            <v-btn
              class="ml-2"
              variant="outlined"
              :href="post.readMoreUrl"
              target="_blank"
              color="secondary"
            >
              <v-icon start icon="mdi-open-in-new" />
              READ MORE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useBlogPosts } from "../components/data/journalEntries.js";

const posts = useBlogPosts();
</script>
