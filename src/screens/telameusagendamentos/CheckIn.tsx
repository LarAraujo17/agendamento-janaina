import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, P, Screen } from '../../components/ui'

// 33 - Meus agendamentos / Check-in
export default function CheckIn() {
  const { go } = useNav()
  return (
    <Screen title="Check-in" subtitle="Check-in na agência">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 96, height: 96, borderRadius: 48, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="business-outline" size={52} />
        </View>
        <H2>Você chegou?</H2>
        <P center>Identificamos que você está perto da Agência Setor Bancário Sul.</P>
      </View>
      <Card style={{ padding: 20, alignItems: 'center', gap: 10 }}>
        <Icon name="qr-code-outline" size={118} />
        <Text style={{ fontWeight: '700', color: colors.ink }}>JAN-20250528-184726</Text>
      </Card>
      <Button onPress={() => go('in-service')}>Cheguei · fazer check-in</Button>
      <P center>Faça check-in até 10 minutos após o horário.</P>
    </Screen>
  )
}
