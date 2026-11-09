import React from 'react'
import { useNav } from '../../navigation'
import { Button, Card, Notice, Row, Screen } from '../../components/ui'

// 47 - Perfil / Privacidade e dados
export default function Privacidade() {
  const { go, notify } = useNav()
  return (
    <Screen title="Privacidade e dados">
      <Card>
        <Row icon="eye-outline" title="Como a IA usa seus dados" text="Entenda as sugestões da Janaína" onPress={() => notify('A Janaína usa apenas o texto do pedido para sugerir serviços')} />
        <Row icon="document-text-outline" title="Ver meus dados" onPress={() => notify('Resumo de dados solicitado')} />
        <Row icon="share-outline" title="Exportar meus dados" text="Receba uma cópia por e-mail" onPress={() => notify('Solicitação recebida')} />
        <Row icon="shield-checkmark-outline" title="Consentimentos" text="Gerencie suas escolhas" onPress={() => go('consent')} />
      </Card>
      <Notice>Seus dados não são vendidos. Usamos somente o necessário para prestar o serviço.</Notice>
      <Button variant="danger" onPress={() => go('delete-account')}>Excluir meus dados e conta</Button>
    </Screen>
  )
}
