import React, { createContext, useCallback, useContext, useRef, useState } from 'react'
import type { ScreenId } from './screens/names'

type Nav = {
  screen: ScreenId
  go: (next: ScreenId) => void
  replace: (next: ScreenId) => void
  back: () => void
  notify: (message: string) => void
  toast: string
}

const NavContext = createContext<Nav | null>(null)

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState<ScreenId>('splash')
  const [history, setHistory] = useState<ScreenId[]>([])
  const [toast, setToast] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const go = useCallback((next: ScreenId) => {
    setHistory(h => [...h, screen])
    setScreen(next)
  }, [screen])

  const replace = useCallback((next: ScreenId) => setScreen(next), [])

  const back = useCallback(() => {
    setScreen(history[history.length - 1] ?? 'catalog')
    setHistory(h => h.slice(0, -1))
  }, [history])

  const notify = useCallback((message: string) => {
    setToast(message)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(''), 2600)
  }, [])

  return <NavContext.Provider value={{ screen, go, replace, back, notify, toast }}>{children}</NavContext.Provider>
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav precisa estar dentro de NavProvider')
  return ctx
}
