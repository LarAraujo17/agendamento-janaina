import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Trust } from '../../components/ui'

// 01 - Entrada / Splash
export default function Splash() {
  const { replace } = useNav()
  useEffect(() => {
    const t = setTimeout(() => replace('onboarding1'), 1800)
    return () => clearTimeout(t)
  }, [replace])
  return (
    <View style={s.wrap}>
      <View style={s.mark}><Text style={s.letter}>J</Text></View>
      <Text style={s.title}>Janaína</Text>
      <Text style={s.sub}>Seu atendimento BB, do seu jeito.</Text>
      <View style={{ marginTop: 40 }}><Trust /></View>
    </View>
  )
}
const s = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center', padding: 24 },
  mark: { width: 96, height: 96, borderRadius: 28, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center' },
  letter: { fontSize: 52, fontWeight: '800', color: colors.navy },
  title: { fontSize: 34, fontWeight: '800', color: colors.white, marginTop: 20 },
  sub: { fontSize: 16, color: '#C9D3F5', marginTop: 6 },
})
