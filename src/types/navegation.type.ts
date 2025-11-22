import type { Tabs } from "./tabs.type"

export type NavegationTabProps = {
    handleTabClick: (tab: Tabs) => void,
    selectTab: Tabs,
    color: string
}
