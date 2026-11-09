import React, { useState } from 'react'
import {
  Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View,
  type ViewStyle,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors, radius } from '../theme'
import { useNav } from '../navigation'

export type IconName = React.ComponentProps<typeof Ionicons>['name']

export function Icon({ name, size = 22, color = colors.navy }: { name: IconName; size?: number; color?: string }) {
  return <Ionicons name={name} size={size} color={color} />
}

/** Container padrão de tela: cabeçalho com voltar, rolagem e rodapé opcional. */
export function Screen({ title, subtitle, step, footer, bare, children }: {
  title?: string; subtitle?: string; step?: number; footer?: React.ReactNode; bare?: boolean; children: React.ReactNode
}) {
  const { back } = useNav()
  return (
    <SafeAreaView style={s.safe}>
      {!bare && (
        <View style={s.top}>
          <Pressable onPress={back} style={s.iconBtn} accessibilityLabel="Voltar"><Icon name="chevron-back" /></Pressable>
          <View style={{ flex: 1 }}>
            <Text style={s.brand}>Janaína</Text>
            <Text style={s.h1}>{title}</Text>
            {subtitle ? <Text style={s.sub}>{subtitle}</Text> : null}
          </View>
        </View>
      )}
      {step ? <Progress step={step} /> : null}
      <ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">{children}</ScrollView>
      {footer}
    </SafeAreaView>
  )
}

const TOTAL_STEPS = 4

export function Progress({ step }: { step: number }) {
  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 8 }}>
      <Text style={s.progressLabel}>Passo {step} de {TOTAL_STEPS}</Text>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        {Array.from({ length: TOTAL_STEPS }, (_, k) => k + 1).map(i => <View key={i} style={[s.progressBar, i <= step && { backgroundColor: colors.navy }]} />)}
      </View>
    </View>
  )
}

export function H2({ children }: { children: React.ReactNode }) { return <Text style={s.h2}>{children}</Text> }
export function P({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return <Text style={[s.p, center && { textAlign: 'center' }]}>{children}</Text>
}

export function Button({ children, onPress, variant = 'primary', icon, disabled }: {
  children: string; onPress?: () => void; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; icon?: IconName; disabled?: boolean
}) {
  const fg = variant === 'primary' || variant === 'danger' ? colors.white : variant === 'secondary' ? colors.navy : colors.navy
  return (
    <Pressable onPress={onPress} disabled={disabled} accessibilityRole="button"
      style={({ pressed }) => [s.btn, s[`btn_${variant}` as const], disabled && { opacity: 0.45 }, pressed && { opacity: 0.8 }]}>
      {icon ? <Icon name={icon} size={19} color={fg} /> : null}
      <Text style={[s.btnText, { color: fg }]}>{children}</Text>
    </Pressable>
  )
}

export function TextLink({ children, onPress }: { children: string; onPress: () => void }) {
  return <Pressable onPress={onPress} style={{ paddingVertical: 10, alignItems: 'center' }}><Text style={s.link}>{children}</Text></Pressable>
}

export function Card({ children, style, onPress }: { children: React.ReactNode; style?: ViewStyle; onPress?: () => void }) {
  const Wrapper: any = onPress ? Pressable : View
  return <Wrapper onPress={onPress} style={[s.card, style]}>{children}</Wrapper>
}

export function Field({ label, placeholder, value, icon, secure, keyboardType }: {
  label?: string; placeholder?: string; value?: string; icon?: IconName; secure?: boolean; keyboardType?: 'default' | 'numeric'
}) {
  return (
    <View style={{ marginBottom: 14 }}>
      {label ? <Text style={s.fieldLabel}>{label}</Text> : null}
      <View style={s.input}>
        {icon ? <Icon name={icon} size={18} color={colors.muted} /> : null}
        <TextInput style={s.inputText} placeholder={placeholder} defaultValue={value}
          secureTextEntry={secure} keyboardType={keyboardType} placeholderTextColor="#9AA3BD" />
      </View>
    </View>
  )
}

export function Row({ icon, title, text, onPress, trailing = true }: {
  icon: IconName; title: string; text?: string; onPress?: () => void; trailing?: boolean
}) {
  return (
    <Pressable onPress={onPress} disabled={!onPress} style={s.row}>
      <View style={s.rowIcon}><Icon name={icon} size={20} /></View>
      <View style={{ flex: 1 }}>
        <Text style={s.rowTitle}>{title}</Text>
        {text ? <Text style={s.rowText}>{text}</Text> : null}
      </View>
      {trailing ? <Icon name="chevron-forward" size={20} color={colors.muted} /> : null}
    </Pressable>
  )
}

export function Toggle({ label, text, initial = true }: { label: string; text?: string; initial?: boolean }) {
  const [on, setOn] = useState(initial)
  return (
    <View style={s.row}>
      <View style={{ flex: 1 }}>
        <Text style={s.rowTitle}>{label}</Text>
        {text ? <Text style={s.rowText}>{text}</Text> : null}
      </View>
      <Pressable onPress={() => setOn(!on)} accessibilityRole="switch" accessibilityState={{ checked: on }}
        style={[s.toggle, on && { backgroundColor: colors.navy, alignItems: 'flex-end' }]}>
        <View style={s.knob} />
      </Pressable>
    </View>
  )
}

export function CheckItem({ title, text, checked, onToggle }: { title: string; text?: string; checked: boolean; onToggle: () => void }) {
  return (
    <Pressable onPress={onToggle} style={s.row} accessibilityRole="checkbox" accessibilityState={{ checked }}>
      <View style={[s.checkbox, checked && { backgroundColor: colors.navy, borderColor: colors.navy }]}>
        {checked ? <Icon name="checkmark" size={16} color={colors.white} /> : null}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={s.rowTitle}>{title}</Text>
        {text ? <Text style={s.rowText}>{text}</Text> : null}
      </View>
    </Pressable>
  )
}

export function Trust() {
  return (
    <View style={s.trust}>
      <Icon name="shield-checkmark-outline" size={17} />
      <Text style={s.trustText}>Informação oficial do Banco do Brasil</Text>
    </View>
  )
}

export function Notice({ icon = 'shield-checkmark-outline', children, tone = 'info' }: {
  icon?: IconName; children: React.ReactNode; tone?: 'info' | 'error'
}) {
  const error = tone === 'error'
  return (
    <View style={[s.notice, error && { backgroundColor: colors.dangerSoft }]}>
      <Icon name={icon} size={19} color={error ? colors.danger : colors.navy} />
      <Text style={[s.noticeText, error && { color: colors.danger }]}>{children}</Text>
    </View>
  )
}

/** Tela de estado centralizado: ícone, título, texto e até duas ações. */
export function StateView({ icon, heading, body, primary, onPrimary, secondary, onSecondary }: {
  icon: IconName; heading: string; body: string; primary: string; onPrimary: () => void; secondary?: string; onSecondary?: () => void
}) {
  return (
    <View style={{ alignItems: 'center', paddingTop: 24, gap: 12 }}>
      <View style={s.stateIcon}><Icon name={icon} size={34} /></View>
      <H2>{heading}</H2>
      <P center>{body}</P>
      <View style={{ alignSelf: 'stretch', gap: 10, marginTop: 8 }}>
        <Button onPress={onPrimary}>{primary}</Button>
        {secondary && onSecondary ? <Button variant="secondary" onPress={onSecondary}>{secondary}</Button> : null}
      </View>
    </View>
  )
}

export function Toast() {
  const { toast } = useNav()
  if (!toast) return null
  return (
    <View style={s.toast} pointerEvents="none">
      <Icon name="checkmark-circle" size={18} color={colors.yellow} />
      <Text style={s.toastText}>{toast}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, paddingVertical: 12 },
  iconBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' },
  brand: { fontSize: 12, color: colors.muted },
  h1: { fontSize: 20, fontWeight: '700', color: colors.ink },
  sub: { fontSize: 13, color: colors.muted, marginTop: 2 },
  content: { padding: 20, paddingBottom: 40, gap: 14 },
  h2: { fontSize: 22, fontWeight: '700', color: colors.ink },
  p: { fontSize: 15, lineHeight: 22, color: colors.muted },
  progressLabel: { fontSize: 12, color: colors.muted, marginBottom: 6 },
  progressBar: { flex: 1, height: 4, borderRadius: 2, backgroundColor: colors.border },
  btn: { minHeight: 52, borderRadius: radius.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, paddingHorizontal: 18 },
  btn_primary: { backgroundColor: colors.navy },
  btn_secondary: { backgroundColor: colors.soft },
  btn_ghost: { backgroundColor: 'transparent' },
  btn_danger: { backgroundColor: colors.danger },
  btnText: { fontSize: 16, fontWeight: '600' },
  link: { color: colors.navy, fontWeight: '600', fontSize: 15 },
  card: { backgroundColor: colors.white, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  fieldLabel: { fontSize: 13, fontWeight: '600', color: colors.ink, marginBottom: 6 },
  input: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, paddingHorizontal: 14, minHeight: 50 },
  inputText: { flex: 1, fontSize: 16, color: colors.ink },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  rowIcon: { width: 38, height: 38, borderRadius: 12, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' },
  rowTitle: { fontSize: 15, fontWeight: '600', color: colors.ink },
  rowText: { fontSize: 13, color: colors.muted, marginTop: 2 },
  toggle: { width: 48, height: 28, borderRadius: 14, backgroundColor: '#C9CFE0', padding: 3, justifyContent: 'center' },
  knob: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.white },
  checkbox: { width: 24, height: 24, borderRadius: 7, borderWidth: 2, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  trust: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, paddingVertical: 4 },
  trustText: { fontSize: 13, color: colors.muted },
  notice: { flexDirection: 'row', gap: 10, backgroundColor: colors.soft, padding: 14, borderRadius: radius.sm, alignItems: 'flex-start' },
  noticeText: { flex: 1, fontSize: 14, lineHeight: 20, color: colors.ink },
  stateIcon: { width: 76, height: 76, borderRadius: 38, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' },
  toast: { position: 'absolute', bottom: 40, left: 20, right: 20, backgroundColor: colors.ink, borderRadius: radius.sm, padding: 14, flexDirection: 'row', gap: 8, alignItems: 'center' },
  toastText: { color: colors.white, fontSize: 14, flex: 1 },
})
