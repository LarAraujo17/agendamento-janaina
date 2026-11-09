import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors } from '../../theme'
import { Card, Icon, Screen } from '../../components/ui'
import { H3 } from '../../components/extra'

// 49 - Perfil / Idioma e aparência
export default function Aparencia() {
  const options = [
    ['Automática', 'Segue o ajuste do aparelho'],
    ['Claro', 'Fundo claro e alto contraste'],
    ['Escuro', 'Mais confortável à noite'],
  ]
  const [sel, setSel] = useState(1)
  return (
    <Screen title="Idioma e aparência">
      <H3>Idioma</H3>
      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 14 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '600', color: colors.ink }}>Português (Brasil)</Text>
            <Text style={{ color: colors.muted, fontSize: 13 }}>Idioma atual</Text>
          </View>
          <Icon name="checkmark" />
        </View>
      </Card>
      <H3>Aparência</H3>
      <Card>
        {options.map(([t, d], i) => (
          <Pressable key={t} onPress={() => setSel(i)} style={{ flexDirection: 'row', alignItems: 'center', padding: 14 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '600', color: colors.ink }}>{t}</Text>
              <Text style={{ color: colors.muted, fontSize: 13 }}>{d}</Text>
            </View>
            {sel === i ? <Icon name="checkmark" /> : null}
          </Pressable>
        ))}
      </Card>
    </Screen>
  )
}
