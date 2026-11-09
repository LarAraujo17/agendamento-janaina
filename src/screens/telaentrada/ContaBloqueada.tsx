import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 07 - Acesso / Conta bloqueada
export default function ContaBloqueada() {
  const { go } = useNav()
  return (
    <Screen title="Conta bloqueada">
      <StateView icon="lock-closed-outline" heading="Seu acesso foi bloqueado"
        body="Para sua segurança, bloqueamos o acesso após tentativas incorretas. Você pode recuperar agora."
        primary="Recuperar acesso" onPrimary={() => go('recover')} secondary="Voltar ao login" onSecondary={() => go('login')} />
    </Screen>
  )
}
