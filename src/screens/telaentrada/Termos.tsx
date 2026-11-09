import React, { useState } from 'react'
import { View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, CheckItem, H2, Icon, P, Screen, TextLink } from '../../components/ui'

// 11 - Acesso / Termos e LGPD
export default function Termos() {
  const { go } = useNav()
  const [terms, setTerms] = useState(false)
  const [policy, setPolicy] = useState(false)
  const [personal, setPersonal] = useState(false)
  return (
    <Screen title="Termos e LGPD" subtitle="Termos e privacidade">
      <View style={{ alignItems: 'center', gap: 10 }}>
        <View style={{ width: 68, height: 68, borderRadius: 34, backgroundColor: colors.soft, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="shield-checkmark-outline" size={34} />
        </View>
        <H2>Seus dados, suas escolhas</H2>
        <P center>Usamos seus dados apenas para organizar seu atendimento e tornar as sugestões mais úteis.</P>
      </View>
      <Card>
        <CheckItem title="Li e aceito os Termos de Uso" checked={terms} onToggle={() => setTerms(!terms)} />
        <CheckItem title="Li a Política de Privacidade" checked={policy} onToggle={() => setPolicy(!policy)} />
        <CheckItem title="Autorizo sugestões personalizadas" text="Opcional. Você pode mudar isso depois." checked={personal} onToggle={() => setPersonal(!personal)} />
      </Card>
      <TextLink onPress={() => go('privacy')}>Como a Janaína usa meus dados</TextLink>
      <Button disabled={!terms || !policy} onPress={() => go('permissions')}>Aceitar e continuar</Button>
    </Screen>
  )
}
