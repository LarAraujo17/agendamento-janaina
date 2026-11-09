import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Field, Icon, Notice, Screen, TextLink, Trust } from '../../components/ui'

// Formulário usado por Login (05) e LoginErro (06)
export function LoginForm({ error }: { error?: boolean }) {
  const { go } = useNav()
  return (
    <Screen bare>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 6 }}>
        <View style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: '800', color: colors.navy }}>J</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 12, color: colors.muted }}>Banco do Brasil</Text>
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.ink }}>Olá, eu sou a Janaína</Text>
          <Text style={{ fontSize: 14, color: colors.muted }}>Vamos acessar sua conta com segurança.</Text>
        </View>
      </View>
      <Field label="Agência" placeholder="0000" value="3598" keyboardType="numeric" />
      <Field label="Conta" placeholder="00000000" value="•••••-4" />
      <Field label="Senha de 8 dígitos" placeholder="••••••••" icon="lock-closed-outline" secure />
      {error ? <Notice icon="alert-circle-outline" tone="error">Senha incorreta. Você tem mais 2 tentativas.</Notice> : null}
      <Button onPress={() => go(error ? 'blocked' : 'two-factor')}>Entrar</Button>
      <Button variant="secondary" icon="finger-print" onPress={() => go('biometric')}>Entrar com biometria</Button>
      <TextLink onPress={() => go('recover')}>Esqueci minha senha ou acesso</TextLink>
      <Trust />
      <Card>
        <Pressable onPress={() => go('human-help')} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14 }}>
          <Icon name="help-circle-outline" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '600', color: colors.ink }}>Preciso de ajuda</Text>
            <Text style={{ fontSize: 13, color: colors.muted }}>Fale com a Janaína ou com uma pessoa</Text>
          </View>
          <Icon name="chevron-forward" size={20} color={colors.muted} />
        </Pressable>
      </Card>
    </Screen>
  )
}

// 05 - Acesso / Login
export default function Login() { return <LoginForm /> }
