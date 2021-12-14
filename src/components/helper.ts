function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function getDateString(date: Date) {
  return date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export { classNames, getDateString };
