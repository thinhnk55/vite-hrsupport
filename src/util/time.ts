export function timestampToHHMM(total_time: number) {
  const hours = Math.floor(total_time / (1000 * 60 * 60));
  const minutes = Math.floor((total_time % (1000 * 60 * 60)) / (1000 * 60));
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${formattedHours}h${formattedMinutes}`;
}
