import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Icon, Screen, TextLink } from '../../components/ui'
import { AI, H3 } from '../../components/extra'

// Usado por Horario (23) e Reagendar (30)
export function HorarioView({ reschedule }: { reschedule?: boolean }) {
  const { go } = useNav()
  const [day, setDay] = useState(28)
  const [time, setTime] = useState('10:30')
  return (
    <Screen title={reschedule ? 'Alterar' : 'Horário'} subtitle={reschedule ? 'Escolha o novo horário' : 'Escolha o dia e o horário'} step={reschedule ? undefined : 3}>
      <Card style={{ padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Icon name="business-outline" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: colors.ink }}>Agência Setor Bancário Sul</Text>
          <Text style={{ color: colors.muted, fontSize: 13 }}>1,2 km · baixa lotação</Text>
        </View>
        {reschedule ? null : <Pressable onPress={() => go('agency')}><Text style={{ color: colors.navy, fontWeight: '600' }}>Alterar</Text></Pressable>}
      </Card>
      <Text style={{ fontSize: 20, fontWeight: '700', color: colors.ink, textAlign: 'center' }}>Maio de 2025</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((l, i) => <Text key={i} style={{ width: 40, textAlign: 'center', color: colors.muted }}>{l}</Text>)}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {[25, 26, 27, 28, 29, 30, 31].map(d => (
          <Pressable key={d} onPress={() => setDay(d)} style={{ width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: d === day ? colors.navy : 'transparent' }}>
            <Text style={{ color: d === day ? colors.white : colors.ink, fontWeight: '600' }}>{d}</Text>
          </Pressable>
        ))}
      </View>
      <H3>Horários disponíveis</H3>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {['09:00', '09:30', '10:00', '10:30', '14:00', '14:30'].map(t => (
          <Pressable key={t} onPress={() => setTime(t)} style={{ width: '30%', paddingVertical: 12, borderRadius: 10, alignItems: 'center', backgroundColor: t === time ? colors.navy : colors.white, borderWidth: 1, borderColor: t === time ? colors.navy : colors.border }}>
            <Text style={{ fontWeight: '600', color: t === time ? colors.white : colors.ink }}>{t}</Text>
          </Pressable>
        ))}
      </View>
      <AI title="Às 10:30 costuma ser mais tranquilo." text="Estimativa de espera: até 5 minutos." />
      <Button onPress={() => go(reschedule ? 'rescheduled' : 'review')}>Continuar</Button>
      <TextLink onPress={() => go('schedule-empty')}>Ver estado sem horários</TextLink>
    </Screen>
  )
}

// 23 - Agendamento / Horário
export default function Horario() { return <HorarioView /> }
