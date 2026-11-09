import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Field, Icon, Screen } from '../../components/ui'
import { AI, AgencyCard } from '../../components/extra'

// 20 - Agendamento / Agência
export default function Agencia() {
  const { go, notify } = useNav()
  return (
    <Screen title="Agência" subtitle="Escolha onde ser atendido" step={2}>
      <View style={{ flexDirection: 'row', backgroundColor: colors.soft, borderRadius: 12, padding: 4 }}>
        <View style={{ flex: 1, backgroundColor: colors.white, borderRadius: 9, padding: 10, alignItems: 'center' }}><Text style={{ fontWeight: '700', color: colors.navy }}>Lista</Text></View>
        <Pressable onPress={() => go('agencies')} style={{ flex: 1, padding: 10, alignItems: 'center' }}><Text style={{ color: colors.muted }}>Mapa</Text></Pressable>
      </View>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}><Field placeholder="CEP ou endereço" icon="search-outline" /></View>
        <Pressable onPress={() => notify('Localização atualizada')} style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="locate-outline" />
        </Pressable>
      </View>
      <AI title="Mais conveniente para você" text="A agência do Setor Bancário Sul fica a 1,2 km e tem baixa lotação." />
      <AgencyCard recommended onPress={() => go('schedule')} />
      <AgencyCard name="Agência Brasília Shopping" distance="2,8 km" status="Lotação média" onPress={() => go('schedule')} />
      <Button variant="ghost" onPress={() => go('location-denied')}>Problemas com localização?</Button>
    </Screen>
  )
}
