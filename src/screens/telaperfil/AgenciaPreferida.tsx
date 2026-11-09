import React from 'react'
import { useNav } from '../../navigation'
import { Button, Field, P, Screen } from '../../components/ui'
import { AgencyCard } from '../../components/extra'

// 44 - Perfil / Agência preferida
export default function AgenciaPreferida() {
  const { go, notify } = useNav()
  return (
    <Screen title="Agência preferida">
      <P>Usamos sua agência preferida nas sugestões de agendamento.</P>
      <AgencyCard recommended onPress={() => notify('Agência preferida mantida')} />
      <Field placeholder="Buscar outra agência" icon="search-outline" />
      <Button onPress={() => go('agencies')}>Ver agências no mapa</Button>
    </Screen>
  )
}
