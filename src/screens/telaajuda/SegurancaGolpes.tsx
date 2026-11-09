import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, P, Row, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 56 - Ajuda / Segurança
export default function SegurancaGolpes() {
  const { go, notify } = useNav()
  return (
    <Screen title="Segurança" subtitle="Segurança contra golpes">
      <View style={{ alignItems: 'center', gap: 8, backgroundColor: colors.soft, borderRadius: 16, padding: 20 }}>
        <Icon name="shield-checkmark-outline" size={44} />
        <H2>O BB nunca pede sua senha</H2>
        <P center>Nem por telefone, mensagem, e-mail ou chat.</P>
      </View>
      <H3>Desconfie se alguém pedir</H3>
      <Card>
        <Row icon="alert-circle-outline" title="Senha ou código do token" trailing={false} />
        <Row icon="alert-circle-outline" title="Instalação de aplicativo" trailing={false} />
        <Row icon="alert-circle-outline" title="Transferência para “conta segura”" trailing={false} />
      </Card>
      <H3>Acho que caí em um golpe</H3>
      <Button variant="danger" icon="call-outline" onPress={() => notify('Ligando para a Central de Segurança')}>Ligar para a Central de Segurança</Button>
      <Button variant="secondary" onPress={() => go('human-contact')}>Falar com o BB</Button>
    </Screen>
  )
}
