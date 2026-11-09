import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Field, Icon, Screen } from '../../components/ui'
import { AgencyCard } from '../../components/extra'

// 39 - Agências / Mapa
// Mapa desenhado com Views (protótipo). Para mapa real, troque o bloco por <MapView> do react-native-maps.
export default function Mapa() {
  const { go } = useNav()
  return (
    <Screen title="Mapa" subtitle="Agências próximas">
      <View style={{ height: 220, borderRadius: 16, backgroundColor: '#DDE6F7', overflow: 'hidden' }}>
        <View style={{ position: 'absolute', top: 70, left: -20, right: -20, height: 14, backgroundColor: colors.white, transform: [{ rotate: '-8deg' }] }} />
        <View style={{ position: 'absolute', top: -20, bottom: -20, left: 150, width: 14, backgroundColor: colors.white, transform: [{ rotate: '12deg' }] }} />
        <View style={{ position: 'absolute', top: 40, left: 90, width: 40, height: 40, borderRadius: 20, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="business-outline" size={20} color={colors.yellow} />
        </View>
        <View style={{ position: 'absolute', top: 120, left: 230, width: 40, height: 40, borderRadius: 20, backgroundColor: colors.navy, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="business-outline" size={20} color={colors.yellow} />
        </View>
        <View style={{ position: 'absolute', top: 150, left: 120, width: 18, height: 18, borderRadius: 9, backgroundColor: '#2F7BFF', borderWidth: 3, borderColor: colors.white }} />
      </View>
      <Field placeholder="Buscar endereço ou CEP" icon="search-outline" />
      <AgencyCard recommended onPress={() => go('agency-detail')} />
      <AgencyCard name="Agência Brasília Shopping" distance="2,8 km" status="Lotação média" onPress={() => go('agency-detail')} />
    </Screen>
  )
}
