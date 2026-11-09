import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Field, H2, Icon, P, Screen } from '../../components/ui'

// 18 - Agendamento / IA não entendeu
export default function IANaoEntendeu() {
  const { go } = useNav()
  return (
    <Screen title="IA não entendeu" subtitle="Vamos tentar de outro jeito" step={1}>
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="chatbubble-ellipses-outline" size={32} />
        </View>
        <H2>Não consegui entender bem</H2>
        <P center>Conte um pouco mais. Por exemplo: “quero trocar meu telefone cadastrado”.</P>
      </View>
      <Field label="Dê mais detalhes" placeholder="Escreva aqui..." />
      <Button onPress={() => go('ai-loading')}>Tentar novamente</Button>
      <Button variant="secondary" onPress={() => go('services')}>Escolher na lista de serviços</Button>
    </Screen>
  )
}
