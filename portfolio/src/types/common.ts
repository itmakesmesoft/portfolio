// ProjectInfo 컴포넌트에서 사용
export type InfoType = {
  title: string;
  description: string;
  period: string;
  memberInfo: string;
  mainFunction: string[];
  simImageSrc?: string[][];
  tech: string[];
};
// ----------------------------

// ProjectsPage 컴포넌트에서 사용
export type contentType = {
  summary: {
    src: string;
    alt: string;
    path: string;
    desc: string;
  };
  detail: {
    title: string;
    description: string;
    period: string;
    memberInfo: string;
    mainFunction: string[];
    simImageSrc?: string[][];
    tech: string[];
    whatIDid: string[];
  };
};
// ----------------------------

// MyExperience 컴포넌트에서 사용
export type SkillType = {
  title: string;
  content: string;
  level: number;
};

export type ExperienceType = {
  date: string;
  name: string;
};
// ----------------------------
