import React from 'react'
import { useNav } from '../../navigation'
import { Button, Card, Screen, Toggle } from '../../components/ui'
import { H3 } from '../../components/extra'

// 46 - Perfil / Notificações
export default function NotificacoesConfig() {
  const { notify } = useNav()
  return (
    <Screen title="Notificações">
      <H3>Canais</H3>
      <Card>
        <Toggle label="Notificações push" />
        <Toggle label="SMS" />
        <Toggle label="E-mail" initial={false} />
      </Card>
      <H3>Lembretes de atendimento</H3>
      <Card>
        <Toggle label="24 horas antes" />
        <Toggle label="1 hora antes" />
        <Toggle label="Quando puder fazer check-in" />
      </Card>
      <Button onPress={() => notify('Preferências salvas')}>Salvar preferências</Button>
    </Screen>
  )
}
