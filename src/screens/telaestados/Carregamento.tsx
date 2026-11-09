import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Screen } from '../../components/ui'

// 58 - Global / Carregamento
export default function Carregamento() {
  const { go } = useNav()
  return (
    <Screen title="Carregamento" subtitle="Carregando">
      {[1, 2, 3, 4, 5].map(i => <View key={i} style={{ height: 60, borderRadius: 14, backgroundColor: colors.border, opacity: 1 - i * 0.14 }} />)}
      <Button onPress={() => go('catalog')}>Voltar ao catálogo</Button>
    </Screen>
  )
}
