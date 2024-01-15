import * as dayjs from 'dayjs';

export function format(date: string, format: 'YYYY/MM/DD HH:mm:ss') {
  return dayjs(date).format(format);
}
