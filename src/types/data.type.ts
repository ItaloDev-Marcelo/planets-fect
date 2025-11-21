import type { Tabs } from "../components/Layout/CommunLayout";

export type DataType = {
    name: string;
    overview: {
      content: string;
      source: string;
    },
    structure: {
      content: string;
      source: string;
    },
    geology: {
      content: string;
      source: string
    },
    rotation:string,
    revolution: string,
    radius: string,
    temperature: string,
    images: {
      planet: string,
      internal: string,
      geology: string
    }
}

export type CommunLayoutProps = {
    data: DataType
}

export type InforBlockProps = {
    selectTab: Tabs;
    data: DataType
}

