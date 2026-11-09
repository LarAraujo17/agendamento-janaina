import Lista from './Lista'
import Detalhe from './Detalhe'
import Reagendar from './Reagendar'
import Cancelar from './Cancelar'
import Reagendado from './Reagendado'
import CheckIn from './CheckIn'
import EmAtendimento from './EmAtendimento'
import Avaliar from './Avaliar'
import Comprovante from './Comprovante'

// Seção: Meus agendamentos (telas 28 a 35 e 63)
export const telameusagendamentos = {
  appointments: Lista, 'appointment-detail': Detalhe, reschedule: Reagendar, cancel: Cancelar,
  rescheduled: Reagendado, checkin: CheckIn, 'in-service': EmAtendimento, rating: Avaliar,
  receipt: Comprovante,
}
