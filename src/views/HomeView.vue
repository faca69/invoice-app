<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="bg-zinc-950 min-h-screen flex flex-col justify-center mx-auto">
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
              >
                Simplify Your Invoicing Process
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Create, manage, and track invoices with ease. Our CRUD app streamlines your billing
                workflow.
              </p>
            </div>
            <div className="space-x-4">
              <Button>
                <RouterLink to="/add-invoice">Get Started</RouterLink>
              </Button>
              <Button variant="outline">
                <RouterLink to="/invoices">View Demo</RouterLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <i class="pi pi-clipboard" style="font-size: 5rem"></i>

              <h3 className="text-xl font-bold">Create Invoices</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Easily create and customize invoices to suit your business needs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <i class="pi pi-search" style="font-size: 5rem"></i>

              <h3 className="text-xl font-bold">Track Payments</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Monitor payment statuses and keep your cash flow in check.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <i class="pi pi-file-edit" style="font-size: 5rem"></i>

              <h3 className="text-xl font-bold">Edit Anytime</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Update invoice details or correct mistakes with our user-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Streamline Your Invoicing?
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Join thousands of businesses that have simplified their invoicing process with our
                app.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <footer
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
    >
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 InvoiceApp. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#"> Privacy </Link>
      </nav>
    </footer>
  </div>
</template>
