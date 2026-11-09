import React from 'react'
import { useNav } from '../../navigation'
import { Card, Field, Row, Screen } from '../../components/ui'
import { Chips } from '../../components/extra'

// 19 - Agendamento / Lista de serviços
export default function Servicos() {
  const { go } = useNav()
  const next = () => go('agency')
  return (
    <Screen title="Lista de serviços" subtitle="Todos os serviços" step={1}>
      <Field placeholder="Buscar serviço" icon="search-outline" />
      <Chips items={['Mais buscados', 'Conta', 'Cartões', 'Crédito']} active="Mais buscados" />
      <Card>
        <Row icon="person-outline" title="Atualização cadastral" text="Telefone, endereço e dados pessoais" onPress={next} />
        <Row icon="lock-closed-outline" title="Senhas e acessos" text="Desbloqueio e nova senha" onPress={next} />
        <Row icon="calendar-outline" title="Abertura de conta" text="Conta corrente ou poupança" onPress={next} />
        <Row icon="document-text-outline" title="Empréstimos e financiamento" onPress={next} />
      </Card>
    </Screen>
  )
}
