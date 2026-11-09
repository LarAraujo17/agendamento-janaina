import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, H2, P, Screen, TextLink } from '../../components/ui'
import { AI } from '../../components/extra'

// 16 - Agendamento / Pedido
export default function Pedido() {
  const { go, notify } = useNav()
  return (
    <Screen title="Pedido" subtitle="Conte com suas palavras" step={1}>
      <H2>O que você precisa resolver?</H2>
      <P>Escreva como se estivesse falando com uma pessoa. A Janaína encontra o serviço certo.</P>
      <View style={{ backgroundColor: colors.white, borderRadius: 12, borderWidth: 1, borderColor: colors.border, padding: 12 }}>
        <TextInput multiline maxLength={400} defaultValue="Preciso atualizar meu endereço e telefone na conta."
          style={{ minHeight: 90, fontSize: 16, color: colors.ink, textAlignVertical: 'top' }} />
        <Text style={{ alignSelf: 'flex-end', fontSize: 12, color: colors.muted }}>56/400</Text>
      </View>
      <Button variant="secondary" icon="mic-outline" onPress={() => notify('Gravação de voz iniciada')}>Falar em vez de digitar</Button>
      <AI title="Eu entendi que você quer atualizar seus dados cadastrais." text="Esse atendimento leva cerca de 20 minutos." />
      <Button onPress={() => go('ai-loading')}>Continuar</Button>
      <TextLink onPress={() => go('services')}>Prefiro escolher em uma lista</TextLink>
    </Screen>
  )
}
