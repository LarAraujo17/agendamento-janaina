import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Card, H2, P, Row, Screen, Trust } from '../../components/ui'

// 57 - Ajuda / Sobre
export default function Sobre() {
  const { go, notify } = useNav()
  return (
    <Screen title="Sobre" subtitle="Sobre o aplicativo">
      <View style={{ alignItems: 'center', gap: 6 }}>
        <View style={{ width: 72, height: 72, borderRadius: 22, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 38, fontWeight: '800', color: colors.navy }}>J</Text>
        </View>
        <H2>Janaína</H2>
        <P center>Assistente de agendamento do Banco do Brasil</P>
        <Text style={{ color: colors.muted, fontSize: 12 }}>Versão 1.0.0</Text>
      </View>
      <Card>
        <Row icon="document-text-outline" title="Termos de uso" onPress={() => go('consent')} />
        <Row icon="shield-checkmark-outline" title="Política de privacidade" onPress={() => go('privacy')} />
        <Row icon="eye-outline" title="Declaração de acessibilidade" onPress={() => go('accessibility')} />
        <Row icon="settings-outline" title="Licenças de código aberto" onPress={() => notify('Licenças disponíveis')} />
      </Card>
      <Trust />
    </Screen>
  )
}
