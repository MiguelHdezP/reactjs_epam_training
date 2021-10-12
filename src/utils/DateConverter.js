export function DateYear(fullDateString) {
  if (typeof fullDateString !== "string" || !fullDateString)
    alert("Invalide date format");
  return new Date(fullDateString).getFullYear();
}
