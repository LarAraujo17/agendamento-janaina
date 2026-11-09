# Janaína (React Native + Expo): 63 telas

Protótipo navegável do assistente de agendamento da Janaína (Banco do Brasil).

## Como rodar
```
npm install
npx expo start
```
Depois escaneie o QR code com o Expo Go, ou use `npm run android`, `npm run ios` ou `npm run web`.

> Se o `npm install` reclamar do `package-lock.json`, rode `npx expo install @expo/vector-icons` para sincronizar a dependência dos ícones.

## Estrutura
```
.
├── App.tsx              entrada do app: NavProvider + Router + BottomNav + Toast
├── index.ts             registerRootComponent(App)
├── app.json / package.json / tsconfig.json
├── assets/              ícones e splash
└── src/
    ├── navigation.tsx   go, back, replace, notify (sem biblioteca de rotas)
    ├── theme.ts         cores e raios
    ├── components/
    │   ├── ui.tsx       Screen, Button, Card, Field, Row, Toggle, StateView, Toast...
    │   └── extra.tsx    AI, AgencyCard, Summary, Chips, BottomNav...
    └── screens/
        ├── index.tsx    Router + catálogo (junta todas as seções)
        ├── names.ts     lista das telas (id, nome, seção) e o tipo ScreenId
        └── tela*/       uma pasta por seção, um arquivo por tela
```

## Pastas de telas
```
src/screens/
  telaentrada/            01-12  Splash, Onboarding1-3, Login, LoginErro, ContaBloqueada, RecuperarSenha,
                                 Biometria, DuasEtapas, Termos, Permissoes
  telainicio/             13-15  Home, HomeVazio, Notificacoes
  telaagendamento/        16-27  Pedido, IAAnalisando, IANaoEntendeu, Servicos, Agencia, SemAgencias,
                                 LocalizacaoNegada, Horario, SemHorarios, Revisao, Confirmado, FilaEspera
  telameusagendamentos/   28-35, 63  Lista, Detalhe, Reagendar, Cancelar, Reagendado, CheckIn,
                                 EmAtendimento, Avaliar, Comprovante
  teladocumentos/         36-38  OQueLevar, DetalheDocumento, TudoPronto
  telaagencias/           39-40  Mapa, DetalheAgencia
  telaperfil/             41-51  VisaoGeral, DadosPessoais, EditarContato, AgenciaPreferida, Seguranca,
                                 NotificacoesConfig, Privacidade, Acessibilidade, Aparencia, Sair, ExcluirConta
  telaajuda/              52-57  Central, FalarComPessoa, Chat, ContatoHumano, SegurancaGolpes, Sobre
  telaestados/            58-62  Carregamento, SemConexao, ErroGenerico, Manutencao, SessaoExpirada
```
Cada pasta tem um `index.ts` que liga o id da tela ao componente; `src/screens/index.tsx` junta tudo.
Da Home, o link "Ver mapa completo do protótipo" abre o catálogo com todas as telas.

## Para adicionar uma tela
1. Inclua o id em `src/screens/names.ts`.
2. Crie o arquivo na pasta da seção.
3. Registre no `index.ts` da pasta (o TypeScript avisa se algum id ficar sem componente).

## Verificar tipos
```
npx tsc --noEmit
```
