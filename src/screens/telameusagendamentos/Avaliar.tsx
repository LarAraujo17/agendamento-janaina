import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Field, H2, Icon, P, Screen, Toggle, Card } from '../../components/ui'

// 35 - Meus agendamentos / Avaliar
export default function Avaliar() {
  const { go, notify } = useNav()
  const [stars, setStars] = useState(0)
  return (
    <Screen title="Avaliar" subtitle="Avalie seu atendimento">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <H2>Como foi sua experiência?</H2>
        <P center>Sua avaliação ajuda a melhorar o atendimento do BB.</P>
        <View style={{ flexDirection: 'row', gap: 6 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <Pressable key={i} onPress={() => setStars(i)} accessibilityLabel={`${i} estrelas`}>
              <Icon name={i <= stars ? 'star' : 'star-outline'} size={38} color={i <= stars ? '#F2B600' : colors.muted} />
            </Pressable>
          ))}
        </View>
      </View>
      <Field label="Quer contar mais? (opcional)" placeholder="Escreva seu comentário" />
      <Card><Toggle label="Compartilhar de forma anônima" /></Card>
      <Button onPress={() => { notify('Obrigado pela sua avaliação'); go('home') }}>Enviar avaliação</Button>
    </Screen>
  )
}
