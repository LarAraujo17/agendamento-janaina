import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, Notice, P, Row, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 37 - Preparação / Detalhe do documento
export default function DetalheDocumento() {
  const { go } = useNav()
  return (
    <Screen title="Detalhe do documento" subtitle="Documento com foto">
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: 110, height: 76, borderRadius: 12, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="person-outline" size={42} />
        </View>
      </View>
      <H2>Documento oficial com foto</H2>
      <P>Leve um documento original, válido e em bom estado.</P>
      <H3>Você pode levar</H3>
      <Card>
        <Row icon="checkmark" title="Carteira de identidade (RG)" trailing={false} />
        <Row icon="checkmark" title="Carteira de motorista (CNH)" trailing={false} />
        <Row icon="checkmark" title="Passaporte brasileiro" trailing={false} />
      </Card>
      <Notice icon="alert-circle-outline" tone="error">Foto, cópia simples ou documento vencido podem não ser aceitos.</Notice>
      <Button onPress={() => go('documents')}>Entendi</Button>
    </Screen>
  )
}
