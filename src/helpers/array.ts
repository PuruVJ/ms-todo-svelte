export function pullFromArray<T>(arr: T[], ...removeList: T[]) {
  const removeSet = new Set(removeList);
  return arr.filter((el) => !removeSet.has(el));
}
