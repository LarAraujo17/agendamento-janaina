import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 24 - Agendamento / Sem horários
export default function SemHorarios() {
  const { go } = useNav()
  return (
    <Screen title="Sem horários" subtitle="Escolha o dia e o horário" step={3}>
      <StateView icon="time-outline" heading="Sem horários neste dia"
        body="Os horários de 28 de maio já foram preenchidos. Veja outros dias ou entre na fila de espera."
        primary="Ver outros dias" onPrimary={() => go('schedule')}
        secondary="Entrar na fila de espera" onSecondary={() => go('waitlist')} />
    </Screen>
  )
}
