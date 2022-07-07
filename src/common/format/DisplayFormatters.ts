export function formatDuration(timeInMinutes?: number): string {
  if (timeInMinutes === undefined) return '--'
  const minutes = timeInMinutes % 60
  const hours = Math.floor(timeInMinutes / 60)
  return `${hours}:${twoDigitMin(minutes)}`
}

function twoDigitMin(value: number): string {
  return value.toLocaleString('en-US', {minimumIntegerDigits: 2})
}