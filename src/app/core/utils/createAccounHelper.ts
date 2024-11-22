import { NavigateFunction } from 'react-router-dom';

export const createAccountHelper = async (
  formData: { number: string; amount: string },
  clientId: string | null,
  token: string | null,
  navigate: NavigateFunction,
  createAccount: (number: string, amount: string, clientId: string, token: string) => Promise<any> // Recibimos la función createAccount como argumento
) => {
  if (!token || !clientId) {
    console.log('No se pudo obtener el token o el clientId.');
    navigate('/login');
    return;
  }
  if (!formData.number || !formData.amount) {
    console.log('El número o el saldo no pueden ser vacíos');
    return;
  }
  const { success, data } = await createAccount(formData.number, formData.amount, clientId, token);
  if (success) {
    console.log('Cuenta creada exitosamente:', data);
    navigate('/account');
  }
};
