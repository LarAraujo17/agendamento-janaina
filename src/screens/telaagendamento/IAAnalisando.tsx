import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, H2, Icon, P, Screen } from '../../components/ui'

// 17 - Agendamento / IA analisando
export default function IAAnalisando() {
  const { go } = useNav()
  return (
    <Screen title="IA analisando" subtitle="Entendendo seu pedido" step={1}>
      <View style={{ alignItems: 'center', gap: 12, paddingTop: 16 }}>
        <View style={{ width: 84, height: 84, borderRadius: 42, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="sparkles-outline" size={34} />
        </View>
        <H2>Só um instante...</H2>
        <P center>A Janaína está encontrando o atendimento mais adequado para você.</P>
      </View>
      {[1, 2, 3].map(i => <View key={i} style={{ height: 52, borderRadius: 12, backgroundColor: colors.border, opacity: 1 - i * 0.2 }} />)}
      <Button onPress={() => go('agency')}>Continuar simulação</Button>
      <Button variant="ghost" onPress={() => go('ai-failed')}>Simular falha de entendimento</Button>
    </Screen>
  )
}
