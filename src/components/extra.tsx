import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Card, Icon, type IconName } from './ui'
import { colors, radius } from '../theme'
import { useNav } from '../navigation'
import type { ScreenId } from '../screens/names'

export function H3({ children }: { children: React.ReactNode }) {
  return <Text style={{ fontSize: 17, fontWeight: '700', color: colors.ink }}>{children}</Text>
}

export function AI({ title, text, action, onAction }: { title: string; text?: string; action?: string; onAction?: () => void }) {
  return (
    <View style={x.ai}>
      <View style={{ flexDirection: 'row', gap: 6, alignItems: 'center' }}>
        <Icon name="sparkles-outline" size={15} />
        <Text style={x.aiLabel}>Sugestão da Janaína · opcional</Text>
      </View>
      <Text style={x.aiTitle}>{title}</Text>
      {text ? <Text style={x.aiText}>{text}</Text> : null}
      {action ? <Pressable onPress={onAction}><Text style={x.aiAction}>{action}</Text></Pressable> : null}
    </View>
  )
}

export function AgencyCard({ name = 'Agência Setor Bancário Sul', distance = '1,2 km', status = 'Baixa lotação', recommended, onPress }: {
  name?: string; distance?: string; status?: string; recommended?: boolean; onPress?: () => void
}) {
  const low = status.includes('Baixa')
  return (
    <Card onPress={onPress} style={{ padding: 14, gap: 10 }}>
      {recommended ? <Text style={x.badge}>Recomendada</Text> : null}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={x.symbol}><Icon name="business-outline" /></View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: colors.ink }}>{name}</Text>
          <Text style={{ fontSize: 13, color: colors.muted }}>SBS Quadra 1, Bloco A</Text>
        </View>
        <Icon name="chevron-forward" size={20} color={colors.muted} />
      </View>
      <View style={{ flexDirection: 'row', gap: 14, flexWrap: 'wrap' }}>
        <Text style={x.meta}>{distance}</Text>
        <Text style={[x.meta, low && { color: colors.success }]}>{status}</Text>
        <Text style={x.meta}>Aberta até 16h</Text>
      </View>
    </Card>
  )
}

export function Summary({ icon, label, value, onChange }: { icon: IconName; label: string; value: string; onChange?: () => void }) {
  return (
    <View style={x.summary}>
      <View style={x.symbol}><Icon name={icon} size={20} /></View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, color: colors.muted }}>{label}</Text>
        <Text style={{ fontSize: 15, fontWeight: '600', color: colors.ink }}>{value}</Text>
      </View>
      {onChange ? <Pressable onPress={onChange}><Text style={{ color: colors.navy, fontWeight: '600' }}>Alterar</Text></Pressable> : null}
    </View>
  )
}

export function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={x.summary}>
      <Text style={{ flex: 1, color: colors.muted }}>{label}</Text>
      <Text style={{ fontWeight: '600', color: colors.ink }}>{value}</Text>
    </View>
  )
}

export function Chips({ items, active }: { items: string[]; active: string }) {
  const [sel, setSel] = React.useState(active)
  return (
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
      {items.map(i => (
        <Pressable key={i} onPress={() => setSel(i)} style={[x.chip, sel === i && { backgroundColor: colors.navy }]}>
          <Text style={{ color: sel === i ? colors.white : colors.navy, fontWeight: '600' }}>{i}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const hidden: ScreenId[] = ['splash', 'onboarding1', 'onboarding2', 'onboarding3', 'login', 'login-error', 'blocked', 'recover',
  'biometric', 'two-factor', 'consent', 'permissions', 'chat', 'catalog', 'logout', 'expired', 'maintenance']

export function BottomNav() {
  const { screen, go } = useNav()
  if (hidden.includes(screen)) return null
  const items: { label: string; icon: IconName; to: ScreenId; on: ScreenId[] }[] = [
    { label: 'Início', icon: 'home-outline', to: 'home', on: ['home', 'home-empty', 'notifications'] },
    { label: 'Agendar', icon: 'add-circle-outline', to: 'request',
      on: ['request', 'ai-loading', 'ai-failed', 'services', 'agency', 'agency-empty', 'location-denied', 'schedule', 'schedule-empty', 'review', 'confirmed', 'waitlist'] },
    { label: 'Agendamentos', icon: 'calendar-outline', to: 'appointments',
      on: ['appointments', 'appointment-detail', 'reschedule', 'cancel', 'rescheduled', 'checkin', 'in-service', 'rating', 'receipt'] },
    { label: 'Perfil', icon: 'person-outline', to: 'profile',
      on: ['profile', 'personal-data', 'contact', 'preferred-agency', 'security', 'notification-settings', 'privacy', 'accessibility', 'appearance', 'delete-account'] },
  ]
  return (
    <View style={x.nav}>
      {items.map(i => {
        const active = i.on.includes(screen)
        return (
          <Pressable key={i.label} onPress={() => go(i.to)} style={{ alignItems: 'center', flex: 1, gap: 2 }}>
            <Icon name={i.icon} color={active ? colors.navy : colors.muted} />
            <Text style={{ fontSize: 11, fontWeight: active ? '700' : '500', color: active ? colors.navy : colors.muted }}>{i.label}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const x = StyleSheet.create({
  ai: { backgroundColor: '#FFFDD0', borderRadius: radius.md, padding: 14, gap: 6, borderWidth: 1, borderColor: '#F0EC7A' },
  aiLabel: { fontSize: 12, color: colors.navy, fontWeight: '600' },
  aiTitle: { fontSize: 15, fontWeight: '700', color: colors.ink },
  aiText: { fontSize: 14, lineHeight: 20, color: colors.muted },
  aiAction: { color: colors.navy, fontWeight: '700', marginTop: 4 },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.yellow, color: colors.navy, fontWeight: '700', fontSize: 12, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, overflow: 'hidden' },
  symbol: { width: 40, height: 40, borderRadius: 12, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' },
  meta: { fontSize: 13, color: colors.muted },
  summary: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: colors.soft },
  nav: { flexDirection: 'row', backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 8, paddingBottom: 20 },
})
