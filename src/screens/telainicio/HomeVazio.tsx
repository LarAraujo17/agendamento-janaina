import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Screen, StateView } from '../../components/ui'

// 14 - Início / Estado vazio
export default function HomeVazio() {
  const { go } = useNav()
  return (
    <Screen title="Início">
      <View>
        <Text style={{ color: colors.muted }}>Boa tarde,</Text>
        <Text style={{ fontSize: 28, fontWeight: '800', color: colors.ink }}>Mariana</Text>
      </View>
      <StateView icon="calendar-outline" heading="Sua agenda está livre"
        body="Quando precisar ir a uma agência, agende por aqui e evite filas."
        primary="Agendar atendimento" onPrimary={() => go('request')} />
    </Screen>
  )
}
