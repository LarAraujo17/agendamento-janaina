import React from 'react'
import { TextInput, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, H2, Icon, P, Screen, TextLink } from '../../components/ui'

// 10 - Acesso / Duas etapas
export default function DuasEtapas() {
  const { go, notify } = useNav()
  return (
    <Screen title="Duas etapas" subtitle="Verificação em duas etapas">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="call-outline" size={30} />
        </View>
        <H2>Digite o código</H2>
        <P center>Enviamos um SMS para (61) 9••••-2048.</P>
      </View>
      <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'center' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <TextInput key={i} maxLength={1} keyboardType="numeric" defaultValue={i < 5 ? String(i) : ''}
            style={{ width: 46, height: 56, borderRadius: 10, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.white, textAlign: 'center', fontSize: 22, fontWeight: '700', color: colors.ink }} />
        ))}
      </View>
      <P center>O código expira em 01:42</P>
      <Button onPress={() => go('consent')}>Confirmar código</Button>
      <TextLink onPress={() => notify('Novo código enviado por SMS')}>Reenviar código</TextLink>
    </Screen>
  )
}
