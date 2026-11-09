import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, H2, Icon, Row, Screen } from '../../components/ui'
import { Summary } from '../../components/extra'

// 29 - Meus agendamentos / Detalhe
export default function Detalhe() {
  const { go } = useNav()
  return (
    <Screen title="Detalhe" subtitle="Detalhes do agendamento">
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: colors.success, fontWeight: '700', fontSize: 12 }}>CONFIRMADO</Text>
        <Text style={{ color: colors.muted }}>em 2 dias</Text>
      </View>
      <H2>Atualização cadastral</H2>
      <Card onPress={() => go('checkin')} style={{ padding: 16, flexDirection: 'row', gap: 14, alignItems: 'center' }}>
        <View style={{ width: 90, height: 90, borderRadius: 12, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="qr-code-outline" size={64} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: colors.ink }}>QR code para check-in</Text>
          <Text style={{ color: colors.muted, fontSize: 13 }}>Disponível ao chegar na agência</Text>
        </View>
      </Card>
      <Card>
        <Summary icon="calendar-outline" label="Data e horário" value="28 de maio · 10:30" />
        <Summary icon="location-outline" label="Agência" value="Setor Bancário Sul · 3598" />
        <Summary icon="document-text-outline" label="Protocolo" value="JAN-20250528-184726" />
      </Card>
      <Card><Row icon="document-text-outline" title="O que levar" text="1 de 2 itens prontos" onPress={() => go('documents')} /></Card>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ flex: 1 }}><Button variant="secondary" onPress={() => go('reschedule')}>Alterar</Button></View>
        <View style={{ flex: 1 }}><Button variant="danger" onPress={() => go('cancel')}>Cancelar</Button></View>
      </View>
    </Screen>
  )
}
