import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Card, Notice, Row, Screen } from '../../components/ui'

// 55 - Ajuda / Contato humano
export default function ContatoHumano() {
  const { notify } = useNav()
  return (
    <Screen title="Contato humano" subtitle="Falar com uma pessoa">
      <View style={{ backgroundColor: '#E6F6EC', borderRadius: 14, padding: 14, gap: 4 }}>
        <Text style={{ color: colors.success, fontWeight: '700', fontSize: 12 }}>● ATENDIMENTO DISPONÍVEL</Text>
        <Text style={{ fontWeight: '700', color: colors.ink }}>Espera estimada: 3 minutos</Text>
      </View>
      <Card>
        <Row icon="chatbubble-ellipses-outline" title="Chat com atendente" text="Das 8h às 22h, todos os dias" onPress={() => notify('Você entrou na fila do chat')} />
        <Row icon="call-outline" title="Capitais e regiões metropolitanas" text="4004 0001" onPress={() => notify('Abrindo telefone')} />
        <Row icon="call-outline" title="Demais localidades" text="0800 729 0001" onPress={() => notify('Abrindo telefone')} />
      </Card>
      <Notice icon="alert-circle-outline" tone="error">Nunca informe senha, código de acesso ou token a ninguém, nem mesmo a um atendente.</Notice>
    </Screen>
  )
}
