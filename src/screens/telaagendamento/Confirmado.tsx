import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Icon, Screen } from '../../components/ui'
import { AI } from '../../components/extra'

// Usado por Confirmado (26) e Reagendado (32)
export function ConfirmadoView({ rescheduled }: { rescheduled?: boolean }) {
  const { go, notify } = useNav()
  return (
    <Screen bare>
      <View style={{ alignItems: 'center', gap: 8, paddingTop: 20 }}>
        <View style={{ width: 76, height: 76, borderRadius: 38, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="checkmark" size={38} color={colors.white} />
        </View>
        <Text style={{ fontSize: 12, color: colors.success, fontWeight: '700' }}>{rescheduled ? 'Novo horário confirmado' : 'Agendamento confirmado'}</Text>
        <Text style={{ fontSize: 26, fontWeight: '800', color: colors.ink }}>{rescheduled ? 'Tudo certo de novo!' : 'Atendimento confirmado!'}</Text>
        <Text style={{ color: colors.muted }}>Seu horário está reservado.</Text>
      </View>
      <Card style={{ padding: 16, gap: 12 }}>
        <View style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}>
          <View style={{ width: 56, height: 64, borderRadius: 14, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: colors.yellow, fontSize: 22, fontWeight: '800' }}>28</Text>
            <Text style={{ color: colors.white, fontSize: 11 }}>MAI</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700', color: colors.ink, fontSize: 16 }}>Quarta-feira, 10:30</Text>
            <Text style={{ color: colors.muted }}>Agência Setor Bancário Sul</Text>
            <Text style={{ color: colors.muted, fontSize: 12 }}>SBS Quadra 1, Bloco A · Brasília-DF</Text>
          </View>
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 10 }}>
          <Text style={{ fontSize: 12, color: colors.muted }}>Protocolo</Text>
          <Text style={{ fontWeight: '700', color: colors.ink }}>JAN-20250528-184726</Text>
        </View>
      </Card>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ flex: 1 }}><Button variant="secondary" icon="share-outline" onPress={() => notify('Comprovante pronto para compartilhar')}>Compartilhar</Button></View>
        <View style={{ flex: 1 }}><Button variant="secondary" icon="calendar-outline" onPress={() => notify('Adicionado à agenda do celular')}>Adicionar</Button></View>
      </View>
      <AI title="Quer chegar com tudo pronto?" text="Confira os 2 documentos necessários para este atendimento." action="Ver o que levar" onAction={() => go('documents')} />
      <Button onPress={() => go('home')}>Ir para o início</Button>
    </Screen>
  )
}

// 26 - Agendamento / Confirmado
export default function Confirmado() { return <ConfirmadoView /> }
