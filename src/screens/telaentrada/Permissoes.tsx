import React from 'react'
import { useNav } from '../../navigation'
import { Button, Card, H2, Notice, P, Screen, Toggle } from '../../components/ui'

// 12 - Acesso / Permissões
export default function Permissoes() {
  const { go } = useNav()
  return (
    <Screen title="Permissões" subtitle="Permissões do aplicativo">
      <H2>Uma experiência mais simples</H2>
      <P>Você controla o que deseja compartilhar.</P>
      <Card>
        <Toggle label="Localização" text="Encontre agências próximas" />
        <Toggle label="Notificações" text="Receba lembretes do agendamento" />
      </Card>
      <Notice>Você pode alterar essas escolhas no seu aparelho.</Notice>
      <Button onPress={() => go('home')}>Continuar</Button>
    </Screen>
  )
}
