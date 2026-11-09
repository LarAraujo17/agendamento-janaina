import React from 'react'
import { useNav } from '../../navigation'
import { Card, Row, Screen } from '../../components/ui'

// 45 - Perfil / Segurança
export default function Seguranca() {
  const { go, notify } = useNav()
  return (
    <Screen title="Segurança">
      <Card>
        <Row icon="lock-closed-outline" title="Alterar senha" text="Atualizada há 43 dias" onPress={() => go('recover')} />
        <Row icon="finger-print" title="Biometria" text="Ativada neste aparelho" onPress={() => go('biometric')} />
        <Row icon="call-outline" title="Dispositivos conectados" text="2 dispositivos" onPress={() => notify('Este aparelho e um navegador')} />
        <Row icon="settings-outline" title="Sessões ativas" text="1 sessão agora" onPress={() => go('expired')} />
      </Card>
      <Card><Row icon="shield-checkmark-outline" title="Dicas contra golpes" onPress={() => go('security-alerts')} /></Card>
    </Screen>
  )
}
