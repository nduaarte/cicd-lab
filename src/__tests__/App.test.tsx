import { render, screen } from '@testing-library/react-native';

import App from '../../App';

describe('App', () => {
  it('mostra o saldo formatado', async () => {
    await render(<App />);
    expect(screen.getByTestId('balance')).toHaveTextContent('R$ 1.234,56');
  });
});
