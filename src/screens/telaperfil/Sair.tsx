import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 50 - Perfil / Sair
export default function Sair() {
  const { go } = useNav()
  return (
    <Screen title="Sair da conta">
      <StateView icon="lock-closed-outline" heading="Deseja sair agora?"
        body="Você precisará entrar novamente para ver seus agendamentos e dados."
        primary="Sim, sair" onPrimary={() => go('login')}
        secondary="Continuar conectado" onSecondary={() => go('profile')} />
    </Screen>
  )
}
