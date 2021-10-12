export function ArrayToCommaList(arr) {
  if (arr.length === 0) return "No genres";
  if (arr.length === 1) return arr.pop();
  if (arr.length === 2) return arr.join(" & ");
  return arr.join(", ");
}
