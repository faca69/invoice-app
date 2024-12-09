<script setup lang="ts">
import type { Invoice } from '@/common/types/invoice.interface'
import { TableCell, TableRow } from '@/components/ui/table'

const { invoice } = defineProps<{
  invoice: Invoice
}>()
</script>

<template>
  <TableRow>
    <TableCell class="font-medium"> {{ invoice.invoiceNumber }} </TableCell>
    <TableCell>{{ invoice.client }}</TableCell>
    <TableCell>{{ invoice.items?.itemName }}</TableCell>
    <TableCell class="text-right">{{ invoice.items?.quantity }} </TableCell>
    <TableCell class="text-right">{{ invoice.items?.amount }} </TableCell>
    <TableCell class="text-right">{{ invoice.totalAmount }} </TableCell>
    <TableCell class="text-right">{{ invoice.dueDate }} </TableCell>
  </TableRow>
</template>
