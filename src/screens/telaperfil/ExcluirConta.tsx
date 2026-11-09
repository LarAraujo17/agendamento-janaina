import React, { useState } from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, CheckItem, H2, Icon, P, Screen } from '../../components/ui'

// 51 - Perfil / Excluir conta
export default function ExcluirConta() {
  const { go, notify } = useNav()
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  return (
    <Screen title="Excluir conta">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.dangerSoft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="alert-circle-outline" size={34} color={colors.danger} />
        </View>
        <H2>Essa ação é permanente</H2>
        <P center>Seus dados e preferências serão excluídos. Agendamentos futuros precisam ser cancelados antes.</P>
      </View>
      <Card>
        <CheckItem title="Entendo que perderei meu histórico" checked={a} onToggle={() => setA(!a)} />
        <CheckItem title="Quero cancelar meus agendamentos" checked={b} onToggle={() => setB(!b)} />
      </Card>
      <Button variant="danger" disabled={!a || !b} onPress={() => notify('Solicitação de exclusão iniciada')}>Solicitar exclusão da conta</Button>
      <Button variant="ghost" onPress={() => go('privacy')}>Voltar</Button>
    </Screen>
  )
}
