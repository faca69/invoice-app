<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Toaster />
</template>
