<script setup lang="ts">
import type { Invoice } from '@/common/types/invoice.interface.ts'
import axios from 'axios'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/toast'

const toast = useToast()
const router = useRouter()
const form = reactive<Omit<Invoice, 'id'>>({
  invoiceNumber: null,
  client: '',
  items: {
    itemName: '',
    quantity: null,
    amount: null,
  },
  totalAmount: 0,
  dueDate: '',
})

const handleSubmit = async () => {
  const newInvoice = {
    ...form,
  }

  try {
    const response = await axios.post('/api/invoices/', { newInvoice })
    toast.toast({
      class: 'dark',
      title: 'Invoice Created Successfully',
    })
    router.push(`/invoices/${response.data.id}`)
  } catch (error) {
    toast.toast({
      variant: 'destructive',
      class: 'dark',
      title: 'Invoice Creation Failed',
    })
    console.log('Creation failed', error)
  }
}

const calculateTotalAmount = () => {
  return form.items.quantity! * form.items.amount!
}

watch(
  () => form.items,
  () => {
    form.totalAmount = calculateTotalAmount()
  },
  { deep: true },
)
</script>

<template>
  <div class="bg-zinc-950 min-h-screen text-center flex flex-col mx-auto text-white dark">
    <h1 class="py-10 text-5xl font-bold">Create Invoice</h1>

    <form @submit.prevent="handleSubmit" class="w-[500px] mx-auto py-4">
      <div>
        <Label class="flex justify-start py-3">Invoice Number</Label>
        <Input type="number" v-model="form.invoiceNumber!" placeholder="Invoice Number" required />
      </div>

      <div>
        <Label class="flex justify-start py-3">Client</Label>
        <Input type="text" v-model="form.client" placeholder="Client" required />
      </div>
      <div>
        <Label class="flex justify-start py-3">Item Name</Label>
        <Input
          type="text"
          v-model="form.items.itemName"
          placeholder="The name of the item"
          required
        />
      </div>

      <div>
        <Label class="flex justify-start py-3">Quantity</Label>
        <Input
          type="number"
          v-model="form.items.quantity!"
          placeholder="The quantity of the item"
          required
        />
      </div>
      <div>
        <Label class="flex justify-start py-3">Amount</Label>
        <Input
          type="number"
          v-model="form.items.amount!"
          placeholder="The amount of the item"
          required
        />
      </div>
      <div>
        <Label class="flex justify-start py-3">Total Amount</Label>
        <Input type="number" :value="form.totalAmount" required />
      </div>
      <div>
        <Label class="flex justify-start py-3">Due Date</Label>
        <Input type="text" v-model="form.dueDate" placeholder="The date the item is due" required />
      </div>

      <Button type="submit" class="my-3 w-full">Submit</Button>
    </form>
  </div>
</template>
