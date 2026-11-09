import Pedido from './Pedido'
import IAAnalisando from './IAAnalisando'
import IANaoEntendeu from './IANaoEntendeu'
import Servicos from './Servicos'
import Agencia from './Agencia'
import SemAgencias from './SemAgencias'
import LocalizacaoNegada from './LocalizacaoNegada'
import Horario from './Horario'
import SemHorarios from './SemHorarios'
import Revisao from './Revisao'
import Confirmado from './Confirmado'
import FilaEspera from './FilaEspera'

// Seção: Agendamento (telas 16 a 27)
export const telaagendamento = {
  request: Pedido, 'ai-loading': IAAnalisando, 'ai-failed': IANaoEntendeu, services: Servicos,
  agency: Agencia, 'agency-empty': SemAgencias, 'location-denied': LocalizacaoNegada,
  schedule: Horario, 'schedule-empty': SemHorarios, review: Revisao, confirmed: Confirmado, waitlist: FilaEspera,
}
