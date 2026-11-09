import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavProvider, useNav } from './src/navigation'
import { Router } from './src/screens'
import { BottomNav } from './src/components/extra'
import { Toast } from './src/components/ui'

function Shell() {
  const { screen } = useNav()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Router screen={screen} />
      </View>
      <BottomNav />
      <Toast />
    </View>
  )
}

export default function App() {
  return (
    <NavProvider>
      <StatusBar style="auto" />
      <Shell />
    </NavProvider>
  )
}
