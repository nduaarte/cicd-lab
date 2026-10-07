export function formatCurrency(valueInCents: number): string {
  const value = valueInCents / 100;
  const formatted = Math.abs(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${value < 0 ? '-' : ''}R$ ${formatted}`;
}
