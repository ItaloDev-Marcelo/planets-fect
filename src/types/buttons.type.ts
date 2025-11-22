import type { Tabs } from "./tabs.type";

 export type buttonProps = {
    handleTabClick: (tab:Tabs) => void;
    name?: string;
    color?:string;
    valor: Tabs;
    title?: string;
    selectTab: Tabs
}
