import lessonsData from "../data/lessonsData";

export function getLessonsData() {
  const saved = localStorage.getItem("lessonsData");
  if (saved) {
    return JSON.parse(saved);
  } else {
    localStorage.setItem("lessonsData", JSON.stringify(lessonsData));
    return lessonsData;
  }
}

export function updateLessonsData(newData) {
  localStorage.setItem("lessonsData", JSON.stringify(newData));
}
