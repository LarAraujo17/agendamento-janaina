import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, P, Screen, Toggle } from '../../components/ui'

// 27 - Agendamento / Fila de espera
export default function FilaEspera() {
  const { go, notify } = useNav()
  return (
    <Screen title="Fila de espera" subtitle="Aviso de vaga">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="notifications-outline" size={34} />
        </View>
        <H2>Avise quando surgir um horário</H2>
        <P center>Se alguém desistir em 28 de maio, enviaremos uma notificação. A vaga só é sua depois que você confirmar.</P>
      </View>
      <Card>
        <Toggle label="Notificação no aplicativo" />
        <Toggle label="Aviso por SMS" />
      </Card>
      <Button onPress={() => { notify('Você entrou na fila de espera'); go('home') }}>Entrar na fila de espera</Button>
      <Button variant="ghost" onPress={() => go('schedule')}>Escolher outro dia</Button>
    </Screen>
  )
}
