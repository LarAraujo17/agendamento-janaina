import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, P, Row, Screen } from '../../components/ui'

// 34 - Meus agendamentos / Em atendimento
export default function EmAtendimento() {
  const { go } = useNav()
  return (
    <Screen title="Em atendimento" subtitle="Atendimento em andamento">
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Text style={{ color: colors.muted }}>Sua senha</Text>
        <Text style={{ fontSize: 56, fontWeight: '800', color: colors.navy }}>B 042</Text>
        <Text style={{ color: colors.success, fontWeight: '700' }}>● Senha chamada</Text>
        <H2>Dirija-se à mesa 08</H2>
        <P center>Um atendente está esperando por você.</P>
      </View>
      <Card><Row icon="time-outline" title="Check-in realizado às 10:22" text="Tempo de espera: 4 minutos" trailing={false} /></Card>
      <Button onPress={() => go('rating')}>Finalizar simulação</Button>
    </Screen>
  )
}
