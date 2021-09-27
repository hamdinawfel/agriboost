export default function getLocalStorage(item) {
  const saved = localStorage.getItem(item);
  const initial = JSON.parse(saved);
  return initial || null;
}
