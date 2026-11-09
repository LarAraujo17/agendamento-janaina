import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Icon, Screen, TextLink, type IconName } from '../../components/ui'
import { AI, H3 } from '../../components/extra'
import type { ScreenId } from '../names'

// 13 - Início / Com agendamento
export default function Home() {
  const { go } = useNav()
  const quick: { icon: IconName; label: string; to: ScreenId }[] = [
    { icon: 'calendar-outline', label: 'Meus agendamentos', to: 'appointments' },
    { icon: 'document-text-outline', label: 'O que levar', to: 'documents' },
    { icon: 'location-outline', label: 'Agências', to: 'agencies' },
    { icon: 'help-circle-outline', label: 'Ajuda', to: 'help' },
  ]
  return (
    <Screen title="Início" footer={null}>
      <View>
        <Text style={{ color: colors.muted }}>Bom dia,</Text>
        <Text style={{ fontSize: 28, fontWeight: '800', color: colors.ink }}>Mariana</Text>
      </View>
      <Card onPress={() => go('appointment-detail')} style={{ padding: 16, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <View style={{ width: 56, height: 64, borderRadius: 14, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.yellow, fontSize: 22, fontWeight: '800' }}>28</Text>
          <Text style={{ color: colors.white, fontSize: 11 }}>MAI</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, color: colors.muted }}>Seu próximo atendimento</Text>
          <Text style={{ fontSize: 17, fontWeight: '700', color: colors.ink }}>Atualização cadastral</Text>
          <Text style={{ color: colors.muted }}>Quarta, às 10:30</Text>
          <Text style={{ color: colors.muted, fontSize: 13 }}>Agência Setor Bancário Sul</Text>
        </View>
        <Icon name="chevron-forward" size={20} color={colors.muted} />
      </Card>
      <Button icon="calendar-outline" onPress={() => go('request')}>Agendar atendimento</Button>
      <H3>Acesso rápido</H3>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {quick.map(q => (
          <Pressable key={q.label} onPress={() => go(q.to)}
            style={{ width: '48%', backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 14, gap: 8 }}>
            <Icon name={q.icon} />
            <Text style={{ fontWeight: '600', color: colors.ink }}>{q.label}</Text>
          </Pressable>
        ))}
      </View>
      <AI title="Vai atualizar seu cadastro?" text="Separe um documento com foto e um comprovante de residência recente."
        action="Ver checklist" onAction={() => go('documents')} />
      <TextLink onPress={() => go('catalog')}>Ver mapa completo do protótipo</TextLink>
    </Screen>
  )
}
