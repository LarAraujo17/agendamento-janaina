import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useNav } from '../../navigation'
import { colors } from '../../theme'
import { Button, Card, CheckItem, Screen } from '../../components/ui'
import { AI, H3 } from '../../components/extra'

// 36 - Preparação / O que levar
export default function OQueLevar() {
  const { go } = useNav()
  const [done, setDone] = useState<Record<string, boolean>>({ foto: true })
  const toggle = (k: string) => setDone(d => ({ ...d, [k]: !d[k] }))
  const count = Object.values(done).filter(Boolean).length
  return (
    <Screen title="O que levar">
      <Card style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontWeight: '700', color: colors.ink, fontSize: 16 }}>{count} de 3 itens prontos</Text>
          <Text style={{ color: colors.muted }}>Atualização cadastral</Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: '800', color: colors.navy }}>{Math.round((count / 3) * 100)}%</Text>
      </Card>
      <H3>Obrigatórios</H3>
      <Card>
        <CheckItem title="Documento oficial com foto" text="RG, CNH ou passaporte válido" checked={!!done.foto} onToggle={() => toggle('foto')} />
        <CheckItem title="Comprovante de residência" text="Emitido nos últimos 90 dias" checked={!!done.res} onToggle={() => toggle('res')} />
      </Card>
      <Button variant="ghost" onPress={() => go('document-detail')}>Ver detalhes do documento com foto</Button>
      <H3>Opcional</H3>
      <Card><CheckItem title="Comprovante de renda" text="Pode agilizar outros serviços" checked={!!done.renda} onToggle={() => toggle('renda')} /></Card>
      <AI title="Uma foto no celular pode ajudar" text="Leve também o documento original. A agência precisa conferir." />
      <Button onPress={() => go('ready')}>Marcar tudo como pronto</Button>
    </Screen>
  )
}
