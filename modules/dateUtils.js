export default function getCurrentDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const currentDate = new Date().toLocaleDateString(undefined, options);
  return currentDate;
}
