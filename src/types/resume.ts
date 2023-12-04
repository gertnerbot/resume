export type Profile = {
    network: string;
    username: string;
    url: string;
    icon: string;
};

export type Information = {
    location: string;
    yearsOfExperience: string;
    availability: string;
    relocation: string;
    remote: string;
};

export type Basics = {
    name: string;
    label: string;
    email: string;
    phone: string;
    status: string;
    resume_url: string;
    url: string;
    summary: string;
    information: Information;
    profiles: Profile[];
    image: string;
};

export type Position = {
    position: string;
    startDate: string;
    endDate: string;
    summary?: string;
};

export type WorkExperience = {
    company: string;
    summary: string;
    url: string;
    logo: string;
    bullets: string[];
    positions: Position[];
};

export type Project = {
    name: string;
    summary: string;
    url: string;
    image_url: string;
    bullets: string[];
    keywords: string[];
};

export type Education = {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    courses: string[];
};

export type Skills = {
    languages: string[];
    technologies: string[];
    services: string[];
    tools: string[];
};

export type SoftSkills = string[];

export type Resume = {
    basics: Basics;
    work: WorkExperience[];
    projects: Project[];
    education: Education[];
    skills: Skills;
    softSkills: SoftSkills;
};

export type ResumeState = {
  resume: Resume | null;
  initialized: boolean;
}