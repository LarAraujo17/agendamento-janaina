import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Icon, type IconName } from '../../components/ui'

const data: Record<1 | 2 | 3, { icon: IconName; title: string; text: string }> = {
  1: { icon: 'calendar-outline', title: 'Agende sem fila', text: 'Escolha a agência, o dia e o melhor horário para você.' },
  2: { icon: 'sparkles-outline', title: 'Conte do seu jeito', text: 'A Janaína entende o que você precisa e encontra o atendimento certo.' },
  3: { icon: 'document-text-outline', title: 'Chegue preparado', text: 'Saiba antes quais documentos levar e evite uma nova visita.' },
}

export default function OnboardingBase({ n }: { n: 1 | 2 | 3 }) {
  const { go } = useNav()
  const d = data[n]
  const next = n === 1 ? 'onboarding2' : n === 2 ? 'onboarding3' : 'login'
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={s.hero}>
        <Pressable onPress={() => go('login')} style={s.skip}><Text style={s.skipText}>Pular</Text></Pressable>
        <View style={s.icon}><Icon name={d.icon} size={54} color={colors.yellow} /></View>
      </View>
      <View style={s.copy}>
        <View style={{ flexDirection: 'row', gap: 6, justifyContent: 'center' }}>
          {[1, 2, 3].map(i => <View key={i} style={[s.dot, i === n && s.dotOn]} />)}
        </View>
        <Text style={s.title}>{d.title}</Text>
        <Text style={s.text}>{d.text}</Text>
        <Button icon="arrow-forward" onPress={() => go(next)}>{n === 3 ? 'Começar' : 'Continuar'}</Button>
      </View>
    </SafeAreaView>
  )
}
const s = StyleSheet.create({
  hero: { flex: 1.1, backgroundColor: colors.yellow, borderBottomLeftRadius: 48, borderBottomRightRadius: 48, alignItems: 'center', justifyContent: 'center' },
  skip: { position: 'absolute', top: 16, right: 20, padding: 8 },
  skipText: { color: colors.navy, fontWeight: '700' },
  icon: { width: 120, height: 120, borderRadius: 34, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '6deg' }] },
  copy: { flex: 1, padding: 24, gap: 14, justifyContent: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.border },
  dotOn: { width: 28, backgroundColor: colors.navy },
  title: { fontSize: 28, fontWeight: '700', color: colors.ink, textAlign: 'center' },
  text: { fontSize: 15, lineHeight: 22, color: colors.muted, textAlign: 'center', marginBottom: 6 },
})
