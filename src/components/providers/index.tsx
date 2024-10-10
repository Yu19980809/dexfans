import { Toaster } from 'react-hot-toast'

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
        <Toaster />
        {children}
    </ThemeProvider>
  )
}

export default Providers
