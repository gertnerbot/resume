import type { Component } from "vue";
import type { Education, Project, WorkExperience } from "./resume";

export type AppState = {
    activePage: Page | null;
    darkMode: boolean;
    color: AppColor;
    availablePages: Page[]
    showJson: boolean;
}

export type Page = {
    key: 'experience' | 'projects' | 'education';
    label: string;
    data: WorkExperience[] | Project[] | Education[];
    component: Component;
}

export type AppColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';