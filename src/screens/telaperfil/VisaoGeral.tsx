import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Card, Row, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 41 - Perfil / Visão geral
export default function VisaoGeral() {
  const { go } = useNav()
  return (
    <Screen title="Visão geral" subtitle="Meu perfil">
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.yellow, fontWeight: '800', fontSize: 22 }}>MS</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '700', color: colors.ink }}>Mariana Souza</Text>
          <Text style={{ color: colors.muted }}>Ag. 3598 · Conta •••••-4</Text>
        </View>
      </View>
      <Card>
        <Row icon="person-outline" title="Dados pessoais" onPress={() => go('personal-data')} />
        <Row icon="call-outline" title="Telefone e e-mail" onPress={() => go('contact')} />
        <Row icon="business-outline" title="Agência preferida" onPress={() => go('preferred-agency')} />
      </Card>
      <H3>Preferências e segurança</H3>
      <Card>
        <Row icon="lock-closed-outline" title="Segurança" onPress={() => go('security')} />
        <Row icon="notifications-outline" title="Notificações" onPress={() => go('notification-settings')} />
        <Row icon="shield-checkmark-outline" title="Privacidade e dados" onPress={() => go('privacy')} />
        <Row icon="eye-outline" title="Acessibilidade" onPress={() => go('accessibility')} />
        <Row icon="settings-outline" title="Idioma e aparência" onPress={() => go('appearance')} />
      </Card>
      <H3>Suporte</H3>
      <Card>
        <Row icon="help-circle-outline" title="Ajuda e atendimento" onPress={() => go('help')} />
        <Row icon="settings-outline" title="Sobre o aplicativo" onPress={() => go('about')} />
      </Card>
      <Pressable onPress={() => go('logout')} style={{ alignItems: 'center', padding: 12 }}>
        <Text style={{ color: colors.danger, fontWeight: '700' }}>Sair da conta</Text>
      </Pressable>
    </Screen>
  )
}
