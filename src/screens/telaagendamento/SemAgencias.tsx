import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 21 - Agendamento / Sem agências
export default function SemAgencias() {
  const { go } = useNav()
  return (
    <Screen title="Sem agências" subtitle="Agências próximas" step={2}>
      <StateView icon="business-outline" heading="Nenhuma agência encontrada"
        body="Não encontramos agências com esse serviço nesta região. Tente outro CEP."
        primary="Buscar outro endereço" onPrimary={() => go('agency')}
        secondary="Entrar na fila de espera" onSecondary={() => go('waitlist')} />
    </Screen>
  )
}
