'use client'

import { HandleMobileMenuProvider } from '@/context/handleOpenMobileMenu'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const client = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={client} >
      <HandleMobileMenuProvider>
        {children}
      </HandleMobileMenuProvider>
    </QueryClientProvider>
  )
}
