import { Toaster } from 'react-hot-toast'

import { AuthProvider } from './auth'
import { ThemeProvider } from './theme'

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <Toaster />
        {children}
      </AuthProvider>
    </ThemeProvider>
  )
}

export default Providers
