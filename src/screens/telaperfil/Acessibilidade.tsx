import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, Screen, Toggle } from '../../components/ui'
import { H3 } from '../../components/extra'

// 48 - Perfil / Acessibilidade
export default function Acessibilidade() {
  const { notify } = useNav()
  const [size, setSize] = useState(1)
  return (
    <Screen title="Acessibilidade">
      <H3>Leitura e visual</H3>
      <Card>
        <View style={{ padding: 14, gap: 10 }}>
          <Text style={{ fontWeight: '600', color: colors.ink }}>Tamanho do texto</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {[14, 18, 24].map((f, i) => (
              <Pressable key={f} onPress={() => setSize(i)} style={{ width: 52, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: size === i ? colors.navy : colors.soft }}>
                <Text style={{ fontSize: f, fontWeight: '700', color: size === i ? colors.white : colors.navy }}>A</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <Toggle label="Alto contraste" initial={false} />
        <Toggle label="Compatível com leitor de tela" />
      </Card>
      <H3>Atendimento</H3>
      <Card>
        <Toggle label="Atendimento em Libras" text="Priorizar agências com intérprete" initial={false} />
        <Toggle label="Avisos por vibração" />
      </Card>
      <Button onPress={() => notify('Preferências de acessibilidade salvas')}>Salvar preferências</Button>
    </Screen>
  )
}
