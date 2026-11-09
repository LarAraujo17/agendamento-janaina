import React from 'react'
import { useNav } from '../../navigation'
import { Screen, StateView } from '../../components/ui'

// 60 - Global / Erro genérico
export default function ErroGenerico() {
  const { go } = useNav()
  return (
    <Screen title="Erro genérico" subtitle="Algo deu errado">
      <StateView icon="alert-circle-outline" heading="Não foi possível continuar"
        body="Tivemos um problema inesperado. Tente novamente em instantes."
        primary="Tentar novamente" onPrimary={() => go('home')} secondary="Ir para o início" onSecondary={() => go('home')} />
    </Screen>
  )
}
