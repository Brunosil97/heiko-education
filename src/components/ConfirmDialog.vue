<template>
  <!-- Add Dialog for confirmation on leaving the page -->
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <v-card-title color="secondary">
        <v-alert
          type="info"
          color="primary"
          border="start"
          variant="tonal"
          size="x-small"
        >
          Leaving so soon
        </v-alert>
      </v-card-title>
      <v-card-text>
        Would you like to find out more about Heiko? Please feel free to give us
        a visit
      </v-card-text>
      <v-card-actions class="justify-space-between">
        <v-btn
          color="primary"
          append-icon="mdi-open-in-new"
          variant="flat"
          href="https://heikocbd.com/shop-heiko-cbd-products/"
          target="_blank"
        >
          VISIT HEIKO CBD
        </v-btn>
        <v-btn color="red-darken-1" variant="text" @click="confirmLeave"
          >Continue</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const dialog = ref(false);
let nextNavigation = null;

// Navigation Guard
onBeforeRouteLeave((_to, _from, next) => {
  if (!dialog.value) {
    dialog.value = true;
    nextNavigation = next;
  } else {
    next();
  }
});

const confirmLeave = () => {
  dialog.value = false;
  nextNavigation();
};
</script>
