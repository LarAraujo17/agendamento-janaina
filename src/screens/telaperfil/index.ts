import VisaoGeral from './VisaoGeral'
import DadosPessoais from './DadosPessoais'
import EditarContato from './EditarContato'
import AgenciaPreferida from './AgenciaPreferida'
import Seguranca from './Seguranca'
import NotificacoesConfig from './NotificacoesConfig'
import Privacidade from './Privacidade'
import Acessibilidade from './Acessibilidade'
import Aparencia from './Aparencia'
import Sair from './Sair'
import ExcluirConta from './ExcluirConta'

// Seção: Perfil (telas 41 a 51)
export const telaperfil = {
  profile: VisaoGeral, 'personal-data': DadosPessoais, contact: EditarContato, 'preferred-agency': AgenciaPreferida,
  security: Seguranca, 'notification-settings': NotificacoesConfig, privacy: Privacidade, accessibility: Acessibilidade,
  appearance: Aparencia, logout: Sair, 'delete-account': ExcluirConta,
}
