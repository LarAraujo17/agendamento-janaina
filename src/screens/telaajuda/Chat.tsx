import React from 'react'
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Icon } from '../../components/ui'
import type { ScreenId } from '../names'

// 54 - Ajuda / Chat com Janaína
const Bubble = ({ me, children }: { me?: boolean; children: string }) => (
  <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '82%', padding: 12, borderRadius: 16, backgroundColor: me ? colors.navy : colors.white, borderWidth: me ? 0 : 1, borderColor: colors.border }}>
    <Text style={{ color: me ? colors.white : colors.ink, lineHeight: 20 }}>{children}</Text>
  </View>
)

export default function Chat() {
  const { go, back, notify } = useNav()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, padding: 12, backgroundColor: colors.white }}>
        <Pressable onPress={back}><Icon name="chevron-back" /></Pressable>
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: '800', color: colors.navy }}>J</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: colors.ink, fontSize: 16 }}>Janaína</Text>
          <Text style={{ color: colors.success, fontSize: 12 }}>● Online agora</Text>
        </View>
        <Pressable onPress={() => go('human-contact')}><Icon name="person-outline" /></Pressable>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Text style={{ textAlign: 'center', color: colors.muted, fontSize: 12 }}>Hoje, 10:18</Text>
        <Bubble>Olá, Mariana. Como posso ajudar com seu atendimento?</Bubble>
        <Bubble me>Quais documentos preciso levar?</Bubble>
        <Bubble>Para atualização cadastral, leve um documento com foto e um comprovante de residência recente.</Bubble>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          {([['Ver checklist completo', 'documents'], ['Falar com atendente', 'human-contact']] as [string, ScreenId][]).map(([l, to]) => (
            <Pressable key={l} onPress={() => go(to)} style={{ paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: colors.soft }}>
              <Text style={{ color: colors.navy, fontWeight: '600' }}>{l}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, padding: 12, backgroundColor: colors.white }}>
          <TextInput placeholder="Digite sua mensagem" style={{ flex: 1, height: 44, borderRadius: 22, backgroundColor: colors.bg, paddingHorizontal: 16 }} />
          <Pressable onPress={() => notify('Mensagem enviada')} style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="arrow-forward" color={colors.white} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
