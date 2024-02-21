import { HandleMobileMenuProvider } from '@/context/handleOpenMobileMenu'

export function Providers({ children }: { children: React.ReactNode }) {
  return <HandleMobileMenuProvider>{children}</HandleMobileMenuProvider>
}
