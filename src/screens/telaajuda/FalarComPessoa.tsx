import React from 'react'
import { useNav } from '../../navigation'
import { Card, H2, P, Row, Screen, Trust } from '../../components/ui'

// 53 - Ajuda / Falar com uma pessoa
export default function FalarComPessoa() {
  const { go } = useNav()
  return (
    <Screen title="Falar com uma pessoa" subtitle="Precisa de ajuda?">
      <H2>Como prefere falar?</H2>
      <P>Escolha o canal mais confortável para você.</P>
      <Card>
        <Row icon="chatbubble-ellipses-outline" title="Conversar com a Janaína" text="Resposta imediata, 24 horas" onPress={() => go('chat')} />
        <Row icon="person-outline" title="Falar com atendente" text="Chat humano, das 8h às 22h" onPress={() => go('human-contact')} />
        <Row icon="call-outline" title="Ligar para o BB" text="4004 0001 · capitais" onPress={() => go('human-contact')} />
      </Card>
      <Trust />
    </Screen>
  )
}
