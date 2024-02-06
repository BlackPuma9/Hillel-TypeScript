export function calculation(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * value;
  }
}
