import React from 'react'
import { useNav } from '../../navigation'
import { Button, H2, Screen } from '../../components/ui'

// 63 - Meus agendamentos / Comprovante
export default function Comprovante() {
  const { go } = useNav()
  return (
    <Screen title="Comprovante">
      <H2>Seu comprovante</H2>
      <Button onPress={() => go('home')}>Voltar ao início</Button>
    </Screen>
  )
}
