export function isTodayCode(day: string, now = new Date()): boolean {
  const map = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  return map[now.getDay()] === day;
}

export function hhmmToMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}