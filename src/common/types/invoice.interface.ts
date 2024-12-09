export interface Invoice {
  id: string
  invoiceNumber: number | null
  client: string
  items: {
    itemName: string
    quantity: number | null
    amount: number | null
  }
  totalAmount: number
  dueDate: string
}
