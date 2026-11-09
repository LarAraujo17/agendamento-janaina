import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Icon, P, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 28 - Meus agendamentos / Lista
export default function Lista() {
  const { go } = useNav()
  const tabs = ['Próximos', 'Concluídos', 'Cancelados']
  const [tab, setTab] = useState('Próximos')
  return (
    <Screen title="Lista" subtitle="Meus agendamentos">
      <View style={{ flexDirection: 'row', backgroundColor: colors.soft, borderRadius: 12, padding: 4 }}>
        {tabs.map(t => (
          <Pressable key={t} onPress={() => setTab(t)} style={{ flex: 1, padding: 10, alignItems: 'center', borderRadius: 9, backgroundColor: tab === t ? colors.white : 'transparent' }}>
            <Text style={{ fontWeight: tab === t ? '700' : '500', color: tab === t ? colors.navy : colors.muted }}>{t}</Text>
          </Pressable>
        ))}
      </View>
      {tab === 'Próximos' ? (
        <>
          <Card onPress={() => go('appointment-detail')} style={{ padding: 16, gap: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: colors.success, fontWeight: '700', fontSize: 12 }}>CONFIRMADO</Text>
              <Text style={{ color: colors.muted }}>em 2 dias</Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '700', color: colors.ink }}>Atualização cadastral</Text>
            <Text style={{ color: colors.muted }}>Quarta, 28 de maio · 10:30</Text>
            <Text style={{ color: colors.muted }}>Agência Setor Bancário Sul</Text>
            <Text style={{ color: colors.navy, fontWeight: '600', marginTop: 4 }}>Ver detalhes</Text>
          </Card>
          <Button icon="add" onPress={() => go('request')}>Novo agendamento</Button>
        </>
      ) : (
        <View style={{ alignItems: 'center', gap: 8, paddingTop: 30 }}>
          <Icon name={tab === 'Concluídos' ? 'checkmark-circle-outline' : 'calendar-outline'} size={36} color={colors.muted} />
          <H3>{`Nenhum agendamento ${tab.toLowerCase()}`}</H3>
          <P center>Seus atendimentos aparecerão aqui.</P>
        </View>
      )}
    </Screen>
  )
}
