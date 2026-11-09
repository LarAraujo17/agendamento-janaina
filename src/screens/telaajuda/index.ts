import Central from './Central'
import FalarComPessoa from './FalarComPessoa'
import Chat from './Chat'
import ContatoHumano from './ContatoHumano'
import SegurancaGolpes from './SegurancaGolpes'
import Sobre from './Sobre'

// Seção: Ajuda e suporte (telas 52 a 57)
export const telaajuda = {
  help: Central, 'human-help': FalarComPessoa, chat: Chat, 'human-contact': ContatoHumano,
  'security-alerts': SegurancaGolpes, about: Sobre,
}
