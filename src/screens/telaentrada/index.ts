import Splash from './Splash'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'
import Login from './Login'
import LoginErro from './LoginErro'
import ContaBloqueada from './ContaBloqueada'
import RecuperarSenha from './RecuperarSenha'
import Biometria from './Biometria'
import DuasEtapas from './DuasEtapas'
import Termos from './Termos'
import Permissoes from './Permissoes'

// Seção: Entrada e acesso (telas 01 a 12)
export const telaentrada = {
  splash: Splash, onboarding1: Onboarding1, onboarding2: Onboarding2, onboarding3: Onboarding3,
  login: Login, 'login-error': LoginErro, blocked: ContaBloqueada, recover: RecuperarSenha,
  biometric: Biometria, 'two-factor': DuasEtapas, consent: Termos, permissions: Permissoes,
}
