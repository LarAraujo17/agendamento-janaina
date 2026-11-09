import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Card, Row, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 15 - Início / Notificações
export default function Notificacoes() {
  const { go, notify } = useNav()
  return (
    <Screen title="Notificações" subtitle="Central de notificações">
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <H3>Hoje</H3>
        <Pressable onPress={() => notify('Todas marcadas como lidas')}>
          <Text style={{ color: colors.navy, fontWeight: '600' }}>Marcar como lidas</Text>
        </Pressable>
      </View>
      <Card>
        <Row icon="calendar-outline" title="Seu atendimento é amanhã" text="Quarta, 28 de maio, às 10:30" onPress={() => go('appointment-detail')} />
        <Row icon="document-text-outline" title="Separe seus documentos" text="Confira se está tudo pronto" onPress={() => go('documents')} />
      </Card>
      <H3>Esta semana</H3>
      <Card>
        <Row icon="shield-checkmark-outline" title="Dica de segurança" text="O BB nunca pede sua senha por mensagem" onPress={() => go('security-alerts')} />
      </Card>
    </Screen>
  )
}
