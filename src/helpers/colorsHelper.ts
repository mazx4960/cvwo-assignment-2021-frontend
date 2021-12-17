export const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "violet",
  "indigo",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const getTagColor = (color: string) => {
  const colorIndex = colors.indexOf(color);
  if (colorIndex === -1) {
    return "bg-gray-400";
  }
  return `bg-${colors[colorIndex]}-400`;
};

export const getTaskColor = (color: string) => {
  const colorIndex = colors.indexOf(color);
  if (colorIndex === -1) {
    return "bg-gray-600";
  }
  return `bg-${colors[colorIndex]}-600`;
};
