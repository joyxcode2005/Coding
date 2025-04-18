export const languageOptions = [
  { name: "C", id: 50, monaco: "c" },
  { name: "Java", id: 62, monaco: "java" },
  { name: "Python", id: 71, monaco: "python" },
];

export const passwords = {
  EASY: import.meta.env.VITE_EASYROUND_PASSWORD,
  MEDIUM: import.meta.env.VITE_MEDIUMROUND_PASSWORD,
  HARD: import.meta.env.VITE_HARDROUND_PASSWORD,
};

