export const calculateProgress = (lesson) => {
  const totalUnits = lesson.units.length;
  const passedUnits = lesson.units.filter(u => u.passed).length;
  return Math.round((passedUnits / totalUnits) * 100);
};

export const calculateOverallProgress = (lessons) => {
  const allUnits = Object.values(lessons).flatMap(l => l.units);
  const passedUnits = allUnits.filter(u => u.passed).length;
  return Math.round((passedUnits / allUnits.length) * 100);
};
