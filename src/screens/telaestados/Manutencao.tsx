import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 61 - Global / Manutenção
export default function Manutencao() {
  const { go } = useNav()
  return (
    <Screen title="Manutenção" subtitle="Manutenção programada">
      <StateView icon="construct-outline" heading="Voltamos em breve"
        body="Estamos fazendo melhorias. O app estará disponível hoje a partir das 04:00."
        primary="Ver canais de atendimento" onPrimary={() => go('human-contact')} />
    </Screen>
  )
}
