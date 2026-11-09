import React from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../navigation'
import { Button, Card, Row, Screen } from '../components/ui'
import { screenList, sections, type ScreenId } from './names'
import { telaentrada } from './telaentrada'
import { telainicio } from './telainicio'
import { telaagendamento } from './telaagendamento'
import { telameusagendamentos } from './telameusagendamentos'
import { teladocumentos } from './teladocumentos'
import { telaagencias } from './telaagencias'
import { telaperfil } from './telaperfil'
import { telaajuda } from './telaajuda'
import { telaestados } from './telaestados'

// Mapa do protótipo: lista as 63 telas por seção e abre qualquer uma com um toque.
function Catalog() {
  const { go } = useNav()
  return (
    <Screen title="Mapa do protótipo" subtitle="Toque em uma tela para abrir">
      {sections.map(section => (
        <View key={section} style={{ gap: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#0B1B4D' }}>{section}</Text>
          <Card>
            {screenList.filter(x => x.section === section).map(x => (
              <Row key={x.id} icon="arrow-forward" title={x.name} onPress={() => go(x.id)} />
            ))}
          </Card>
        </View>
      ))}
    </Screen>
  )
}

const registry: Record<ScreenId, React.ComponentType> = {
  ...telaentrada,
  ...telainicio,
  ...telaagendamento,
  ...telameusagendamentos,
  ...teladocumentos,
  ...telaagencias,
  ...telaperfil,
  ...telaajuda,
  ...telaestados,
  catalog: Catalog,
}

function NotFound() {
  const { go } = useNav()
  return (
    <Screen title="Tela não encontrada">
      <Button onPress={() => go('catalog')}>Ir ao mapa do protótipo</Button>
    </Screen>
  )
}

export function Router({ screen }: { screen: ScreenId }) {
  const Component = registry[screen] ?? NotFound
  return <Component />
}
