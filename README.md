# Janaína – Agendamento de Atendimento Bancário

Protótipo de aplicativo mobile para **agendamento de atendimento em agências do Banco do Brasil**, com apoio de IA. Projeto desenvolvido pelo **Squad 32** na **Residência em Software & IA** (Porto Digital, em parceria com a Universidade Católica de Brasília).

## Problema

Clientes enfrentam filas, longos tempos de espera, deslocamentos desnecessários e falta de informações sobre documentos exigidos para atendimentos bancários presenciais.

## Solução

A Janaína permite agendar atendimento bancário com horário e agência escolhidos, orienta sobre documentos necessários e, após o agendamento, sugere alternativas de autoatendimento quando disponíveis.

## Funcionalidades

- Agendamento de atendimento com escolha do serviço, da agência, do dia e do horário
- Busca de agências em **lista** ou **mapa**, por CEP, endereço ou localização atual
- Sugestão da Janaína (opcional) com a agência mais conveniente, considerando distância e lotação
- Indicação de lotação e horário de funcionamento de cada agência
- Orientação sobre os documentos necessários para o atendimento
- Sugestão de alternativas de autoatendimento após o agendamento, quando disponíveis

## Fluxo de agendamento

1. Login
2. Escolha do que resolver
3. Escolha da agência
4. Escolha do dia e do horário
5. Confirmação

## Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Figma]([https://www.figma.com/](https://www.figma.com/make/vKfsnTohak2csIwE4zaq7M/App-Jana%C3%ADna-de-Agendamentos?t=PMnQGhm7MH1jl56s-1)) (design do protótipo)

## Como rodar o projeto

**Pré-requisito:** [Node.js](https://nodejs.org/) (versão LTS).

```bash
# 1. Clone o repositório
git clone https://github.com/LarAraujo17/agendamento-janaina.git

# 2. Entre na pasta do projeto
cd agendamento-janaina

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Estrutura do projeto

```
├── public/        # Arquivos estáticos
├── src/
│   ├── App.tsx    # Componente principal e telas do app
│   ├── index.css  # Estilos globais
│   └── main.tsx   # Ponto de entrada
├── index.html
├── package.json
└── vite.config.ts
```

## Autoria

Desenvolvido por **Lara de Araujo** ([@LarAraujo17](https://github.com/LarAraujo17))
