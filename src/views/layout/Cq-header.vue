<template>
  <q-header elevated class="glossy bg-yellow">
    <q-toolbar>
      <q-btn flat dense round @click="callback" aria-label="Menu" icon="menu" />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { ref, defineEmits } from "vue";

const leftDrawerOpen = ref(false);

const emit = defineEmits(["switchMenu"]);

const callback = () => {
  console.log("++++");
  emit("switchMenu");
};
</script>
