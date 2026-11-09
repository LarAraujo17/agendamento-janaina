import React from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Field, H2, Icon, P, Screen } from '../../components/ui'

// 31 - Meus agendamentos / Cancelar
export default function Cancelar() {
  const { go, back, notify } = useNav()
  return (
    <Screen title="Cancelar" subtitle="Cancelar agendamento">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.dangerSoft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="calendar-outline" size={34} color={colors.danger} />
        </View>
        <H2>Tem certeza que deseja cancelar?</H2>
        <P center>O horário de quarta, 28 de maio, às 10:30, será liberado para outra pessoa.</P>
      </View>
      <Field label="Motivo do cancelamento (opcional)" placeholder="Selecione um motivo" />
      <Button variant="danger" onPress={() => { notify('Agendamento cancelado'); go('appointments') }}>Sim, cancelar agendamento</Button>
      <Button variant="ghost" onPress={back}>Manter agendamento</Button>
    </Screen>
  )
}
