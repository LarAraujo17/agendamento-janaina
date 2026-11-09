import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 62 - Global / Sessão expirada
export default function SessaoExpirada() {
  const { go } = useNav()
  return (
    <Screen title="Sessão expirada">
      <StateView icon="lock-closed-outline" heading="Sua sessão terminou"
        body="Por segurança, encerramos o acesso após alguns minutos sem atividade."
        primary="Entrar novamente" onPrimary={() => go('login')} />
    </Screen>
  )
}
