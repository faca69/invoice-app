<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-zinc-100 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-zinc-300 mb-4">Page Not Found</h2>
      <p className="text-zinc-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Button asChild>
        <RouterLink to="/"> Return to Home </RouterLink>
      </Button>
    </div>
  </div>
</template>
