import React from 'react'
import { useNav } from '../../navigation'
import { Button, Field, Notice, Screen } from '../../components/ui'

// 43 - Perfil / Editar contato
export default function EditarContato() {
  const { go } = useNav()
  return (
    <Screen title="Editar contato" subtitle="Telefone e e-mail">
      <Field label="Celular" value="(61) 9••••-2048" icon="call-outline" />
      <Field label="E-mail" value="ma•••••@email.com.br" icon="mail-outline" />
      <Notice>Enviaremos um código para confirmar qualquer alteração.</Notice>
      <Button onPress={() => go('two-factor')}>Salvar e verificar</Button>
    </Screen>
  )
}
