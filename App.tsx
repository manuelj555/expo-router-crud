import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation colorScheme={colorScheme} />
      </QueryClientProvider>
      <StatusBar />
    </SafeAreaProvider>
  )
}
