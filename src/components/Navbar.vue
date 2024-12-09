<script setup lang="ts">
import { useRouter } from 'vue-router'

const isActivePath = (routePath: string) => {
  const route = useRouter()
  return route.currentRoute.value.path === routePath
}
</script>

<template>
  <div class="flex justify-between items-center py-4 bg-zinc-700 text-white px-2">
    <div>
      <RouterLink to="/">
        <h1 class="text-2xl font-bold">Vue Invoices</h1>
      </RouterLink>
    </div>

    <div class="space-x-4">
      <RouterLink
        to="/"
        :class="[
          isActivePath('/') ? 'bg-zinc-900 p-2 rounded-md' : 'hover:bg-zinc-800 p-2 rounded-md',
        ]"
        >Home</RouterLink
      >
      <RouterLink
        to="/invoices"
        :class="[
          isActivePath('/invoices')
            ? 'bg-zinc-900 p-2 rounded-md'
            : 'hover:bg-zinc-800 p-2 rounded-md',
        ]"
        >Invoices</RouterLink
      >
      <RouterLink
        to="/add-invoice"
        :class="[
          isActivePath('/add-invoice')
            ? 'bg-zinc-900 p-2 rounded-md'
            : 'hover:bg-zinc-800 p-2 rounded-md',
        ]"
        >Add Invoice</RouterLink
      >
    </div>
  </div>
</template>
