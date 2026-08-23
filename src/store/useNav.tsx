import { create } from 'zustand'


type useNav = {
    nav: boolean,
    handleNavBar: () => void
}

export const useNav = create<useNav>((set) => ({
  nav: true,
  handleNavBar: () => set((state) => ({nav: !state.nav}))
})) 
