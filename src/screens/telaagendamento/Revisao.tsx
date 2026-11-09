import React from 'react'
import { useNav } from '../../navigation'
import { Button, Card, H2, Notice, Screen, Trust } from '../../components/ui'
import { Summary } from '../../components/extra'

// 25 - Agendamento / Revisão
export default function Revisao() {
  const { go } = useNav()
  return (
    <Screen title="Revisão" subtitle="Revise seu agendamento" step={4}>
      <H2>Está tudo certo?</H2>
      <Card>
        <Summary icon="calendar-outline" label="Data e horário" value="Quarta, 28 de maio · 10:30" onChange={() => go('schedule')} />
        <Summary icon="business-outline" label="Agência" value="Setor Bancário Sul · Agência 3598" onChange={() => go('agency')} />
        <Summary icon="chatbubble-ellipses-outline" label="Motivo" value="Atualização cadastral" onChange={() => go('request')} />
      </Card>
      <Notice icon="time-outline">Chegue com 10 minutos de antecedência. Você poderá fazer check-in pelo aplicativo.</Notice>
      <Trust />
      <Button onPress={() => go('confirmed')}>Confirmar agendamento</Button>
    </Screen>
  )
}
