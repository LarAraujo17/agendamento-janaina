import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, H2, Icon, P, Screen } from '../../components/ui'

// 09 - Acesso / Biometria
export default function Biometria() {
  const { go } = useNav()
  return (
    <Screen title="Biometria">
      <View style={{ alignItems: 'center', gap: 12, paddingTop: 16 }}>
        <View style={{ width: 140, height: 140, borderRadius: 70, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="finger-print" size={72} />
        </View>
        <H2>Use sua digital</H2>
        <P center>Toque no sensor do aparelho para acessar sua conta.</P>
      </View>
      <Button onPress={() => go('consent')}>Simular reconhecimento</Button>
      <Button variant="ghost" onPress={() => go('login')}>Usar senha</Button>
    </Screen>
  )
}
