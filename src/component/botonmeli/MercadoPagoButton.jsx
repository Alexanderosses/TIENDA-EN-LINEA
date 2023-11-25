// MERCADO PAGO
import { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

export const MercadoPagoButton = () => {
  useEffect(() => {
    initMercadoPago('TEST-0368f66e-61ac-458a-93cd-3a3673f08641', { locale: 'es-CL' });
  }, []);

  return (
    <div>
      <Wallet initialization={{preferenceId: '<PREFERENCE_ID>'}} />
    </div>
  );
};