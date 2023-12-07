const data = [
  {
    category: "Reaction",
    score: 80,
    styles: "text-primary-red bg-primary-red/10",
    icon: new URL("./img/icon-reaction.svg", import.meta.url).href,
  },
  {
    category: "Memory",
    score: 92,
    styles: "text-primary-yellow bg-primary-yellow/10",
    icon: new URL("./img/icon-memory.svg", import.meta.url).href,
  },
  {
    category: "Verbal",
    score: 61,
    styles: "text-primary-teal bg-primary-teal/10",
    icon: new URL("./img/icon-verbal.svg", import.meta.url).href,
  },
  {
    category: "Visual",
    score: 72,
    styles: "text-primary-blue bg-primary-blue/10",
    icon: new URL("./img/icon-visual.svg", import.meta.url).href,
  },
];

export default data;
