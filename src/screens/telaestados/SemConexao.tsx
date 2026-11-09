import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 59 - Global / Sem conexão
export default function SemConexao() {
  const { go } = useNav()
  return (
    <Screen title="Sem conexão">
      <StateView icon="cloud-offline-outline" heading="Você está sem internet"
        body="Verifique sua conexão e tente novamente. Seus dados continuam protegidos."
        primary="Tentar novamente" onPrimary={() => go('home')} secondary="Voltar" onSecondary={() => go('catalog')} />
    </Screen>
  )
}
