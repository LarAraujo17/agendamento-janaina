import React from 'react'
import { useNav } from '../../navigation'
import { Button, Card, Notice, P, Screen } from '../../components/ui'
import { DataRow } from '../../components/extra'

// 42 - Perfil / Dados pessoais
export default function DadosPessoais() {
  const { go } = useNav()
  return (
    <Screen title="Dados pessoais">
      <Notice>Seus dados estão protegidos e nunca mostramos informações completas.</Notice>
      <Card>
        <DataRow label="Nome completo" value="Mariana de Souza" />
        <DataRow label="CPF" value="•••.482.•••-19" />
        <DataRow label="Data de nascimento" value="12/08/1991" />
        <DataRow label="Conta" value="Ag. 3598 · Conta •••••-4" />
      </Card>
      <P>Para alterar nome ou documento, agende um atendimento.</P>
      <Button onPress={() => go('request')}>Agendar alteração cadastral</Button>
    </Screen>
  )
}
