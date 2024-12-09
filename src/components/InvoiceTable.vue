<script setup lang="ts">
import type { Invoice } from '@/common/types/invoice.interface'
import { TableCell, TableRow } from '@/components/ui/table'

const { invoice, onDelete } = defineProps<{
  invoice: Invoice
  onDelete: (id: string) => void
}>()
</script>

<template>
  <TableRow class="dark">
    <TableCell class="font-medium text-left"> {{ invoice.invoiceNumber }} </TableCell>
    <TableCell class="text-left">{{ invoice.client }}</TableCell>
    <TableCell class="text-left">{{ invoice.items?.itemName }}</TableCell>
    <TableCell class="text-left">{{ invoice.items?.quantity }} </TableCell>
    <TableCell class="text-left">{{ invoice.items?.amount }} </TableCell>
    <TableCell class="text-left">{{ invoice.totalAmount }} </TableCell>
    <TableCell class="text-left">{{ invoice.dueDate }} </TableCell>

    <TableCell class="text-left"
      ><button @click="onDelete(invoice.id)">
        <i class="pi pi-trash text-red-300"></i></button
    ></TableCell>
  </TableRow>
</template>

pi-pen-to-square
