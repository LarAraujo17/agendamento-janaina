import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Icon, Row, Screen } from '../../components/ui'

// 40 - Agências / Detalhe
export default function DetalheAgencia() {
  const { go, notify } = useNav()
  return (
    <Screen title="Detalhe" subtitle="Agência Setor Bancário Sul">
      <View style={{ height: 130, borderRadius: 16, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="business-outline" size={58} />
        <Pressable onPress={() => notify('Agência adicionada aos favoritos')} style={{ position: 'absolute', top: 10, right: 10, width: 38, height: 38, borderRadius: 19, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="star-outline" />
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, fontWeight: '700', color: colors.ink, flex: 1 }}>Agência Setor Bancário Sul</Text>
        <Text style={{ color: colors.success, fontWeight: '700', fontSize: 12 }}>ABERTA AGORA</Text>
      </View>
      <Text style={{ color: colors.muted }}>SBS Quadra 1, Bloco A, Asa Sul · Brasília-DF</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Card style={{ flex: 1, padding: 14 }}><Icon name="time-outline" /><Text style={{ fontWeight: '700', color: colors.ink }}>Até 10 min</Text><Text style={{ color: colors.muted, fontSize: 12 }}>Baixa lotação</Text></Card>
        <Card style={{ flex: 1, padding: 14 }}><Icon name="locate-outline" /><Text style={{ fontWeight: '700', color: colors.ink }}>1,2 km</Text><Text style={{ color: colors.muted, fontSize: 12 }}>da sua localização</Text></Card>
      </View>
      <Card>
        <Row icon="time-outline" title="Horário de atendimento" text="Seg a sex, das 10h às 16h" trailing={false} />
        <Row icon="settings-outline" title="Serviços disponíveis" text="Atendimento completo" trailing={false} />
        <Row icon="person-outline" title="Acessibilidade" text="Rampa, piso tátil e Libras" trailing={false} />
        <Row icon="call-outline" title="Telefone" text="4004-0001" trailing={false} />
      </Card>
      <Button icon="map-outline" onPress={() => notify('Abrindo seu aplicativo de mapas')}>Como chegar</Button>
      <Button variant="secondary" onPress={() => go('request')}>Agendar nesta agência</Button>
    </Screen>
  )
}
