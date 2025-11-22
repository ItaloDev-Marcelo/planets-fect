import type { Tabs } from "./tabs.type"

export type ButtonSelectProps = {
  name: string,
  handleTabClick: (tab:Tabs) => void,
  selectTab: Tabs
}