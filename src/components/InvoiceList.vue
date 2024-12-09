<script setup lang="ts">
import axios from 'axios'
import { onMounted, reactive } from 'vue'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import type { Invoice } from '@/common/types/invoice.interface'
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import InvoiceTable from './InvoiceTable.vue'

const state = reactive({
  invoices: [] as Invoice[],
  isLoading: true,
})

const handleDelete = async (id: string) => {
  try {
    await axios.delete(`/api/invoices/${id}`)
    state.invoices = state.invoices.filter((inv) => inv.id !== id)
  } catch (error) {
    console.error('Error Deleting Invoice', error)
  }
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/invoices')
    state.invoices = response.data.map((invoice: any) => ({
      id: invoice.id,
      invoiceNumber: invoice.newInvoice.invoiceNumber,
      client: invoice.newInvoice.client,
      items: invoice.newInvoice.items,
      totalAmount: invoice.newInvoice.totalAmount,
      dueDate: invoice.newInvoice.dueDate,
    }))
  } catch (error) {
    console.error('Error Fetching Invoices', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div v-if="state.isLoading">
    <PulseLoader />
  </div>

  <div v-else>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="text-left"> Invoice Number</TableHead>
          <TableHead class="text-left">Client</TableHead>
          <TableHead class="text-left">Item Name</TableHead>
          <TableHead class="text-left">Quantity </TableHead>
          <TableHead class="text-left">Amount </TableHead>
          <TableHead class="text-left">Total Amount </TableHead>
          <TableHead class="text-left">Due Date </TableHead>
          <TableHead class="text-left">Delete </TableHead>
        </TableRow>
      </TableHeader>

      <InvoiceTable
        v-for="invoice in state.invoices"
        :key="invoice.id"
        :invoice="invoice"
        @delete="handleDelete"
      />
    </Table>
  </div>
</template>
