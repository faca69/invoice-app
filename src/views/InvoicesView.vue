<script setup lang="ts">
import InvoiceList from '@/components/InvoiceList.vue'
</script>

<template>
  <div class="bg-zinc-950 min-h-screen text-center flex flex-col mx-auto text-white dark">
    <h1 class="py-10 text-5xl font-bold">Invoices</h1>

    <InvoiceList />
  </div>
</template>
