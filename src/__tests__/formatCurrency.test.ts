import { formatCurrency } from '../utils/formatCurrency';

describe('formatCurrency', () => {
  it('formata centavos em reais', () => {
    expect(formatCurrency(1050)).toBe('R$ 10,50');
  });

  it('separa milhares com ponto', () => {
    expect(formatCurrency(123456789)).toBe('R$ 1.234.567,89');
  });

  it('lida com valores negativos', () => {
    expect(formatCurrency(-500)).toBe('-R$ 5,00');
  });
});
