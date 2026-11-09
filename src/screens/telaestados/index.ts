import Carregamento from './Carregamento'
import SemConexao from './SemConexao'
import ErroGenerico from './ErroGenerico'
import Manutencao from './Manutencao'
import SessaoExpirada from './SessaoExpirada'

// Seção: Estados globais (telas 58 a 62)
export const telaestados = {
  loading: Carregamento, offline: SemConexao, error: ErroGenerico, maintenance: Manutencao, expired: SessaoExpirada,
}
