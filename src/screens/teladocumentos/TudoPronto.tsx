import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, P, Screen } from '../../components/ui'
import { Summary } from '../../components/extra'

// 38 - Preparação / Tudo pronto
export default function TudoPronto() {
  const { go } = useNav()
  return (
    <Screen title="Tudo pronto">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="checkmark" size={46} color={colors.white} />
        </View>
        <H2>Você está preparado!</H2>
        <P center>Seus documentos estão separados. Agora é só chegar 10 minutos antes.</P>
      </View>
      <Card>
        <Summary icon="calendar-outline" label="Seu atendimento" value="28 de maio · 10:30" />
        <Summary icon="location-outline" label="Local" value="Agência Setor Bancário Sul" />
      </Card>
      <Button onPress={() => go('appointment-detail')}>Ver agendamento</Button>
    </Screen>
  )
}
