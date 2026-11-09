import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Field, Icon, Row, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 52 - Ajuda / Central
export default function Central() {
  const { go } = useNav()
  return (
    <Screen title="Central" subtitle="Central de ajuda">
      <Field placeholder="Como podemos ajudar?" icon="search-outline" />
      <Card style={{ padding: 16, gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Icon name="chatbubble-ellipses-outline" size={34} />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700', color: colors.ink }}>Olá, sou a Janaína</Text>
            <Text style={{ color: colors.muted }}>Posso ajudar com dúvidas sobre seu atendimento.</Text>
          </View>
        </View>
        <Button onPress={() => go('chat')}>Iniciar conversa</Button>
      </Card>
      <H3>Perguntas frequentes</H3>
      <Card>
        <Row icon="calendar-outline" title="Como alterar um agendamento?" onPress={() => go('reschedule')} />
        <Row icon="document-text-outline" title="Quais documentos devo levar?" onPress={() => go('documents')} />
        <Row icon="qr-code-outline" title="Como funciona o check-in?" onPress={() => go('checkin')} />
        <Row icon="shield-checkmark-outline" title="Como evitar golpes?" onPress={() => go('security-alerts')} />
      </Card>
      <Button variant="secondary" onPress={() => go('human-contact')}>Preciso falar com uma pessoa</Button>
    </Screen>
  )
}
