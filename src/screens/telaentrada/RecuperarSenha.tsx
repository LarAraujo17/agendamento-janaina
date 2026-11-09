import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Field, Screen, Trust } from '../../components/ui'

const dot = (on: boolean) => ({ width: 24, height: 24, borderRadius: 12, backgroundColor: on ? colors.navy : colors.border, color: on ? colors.white : colors.muted, textAlign: 'center' as const, lineHeight: 24, fontWeight: '700' as const, overflow: 'hidden' as const })

// 08 - Acesso / Recuperar senha
export default function RecuperarSenha() {
  const { go } = useNav()
  return (
    <Screen title="Recuperar senha" subtitle="Recupere seu acesso em poucos passos">
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={dot(true)}>1</Text><Text style={{ color: colors.ink }}>Confirme seus dados</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
        <Text style={dot(false)}>2</Text><Text style={{ color: colors.muted }}>Crie uma senha</Text>
      </View>
      <Field label="Agência" value="3598" />
      <Field label="Conta" value="•••••-4" />
      <Field label="Celular cadastrado" value="(61) 9••••-2048" icon="call-outline" />
      <Button onPress={() => go('two-factor')}>Receber código</Button>
      <Trust />
    </Screen>
  )
}
