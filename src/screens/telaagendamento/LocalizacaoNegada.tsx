import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 22 - Agendamento / Localização negada
export default function LocalizacaoNegada() {
  const { go } = useNav()
  return (
    <Screen title="Localização negada" subtitle="Usar sua localização" step={2}>
      <StateView icon="locate-outline" heading="Localização desativada"
        body="Ative a localização nas configurações do aparelho ou informe um CEP para continuar."
        primary="Informar CEP" onPrimary={() => go('agency')}
        secondary="Tentar novamente" onSecondary={() => go('agency')} />
    </Screen>
  )
}
