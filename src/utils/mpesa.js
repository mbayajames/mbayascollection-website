import { MPESA_SANDBOX_URL } from "../constants/config";

export async function initiateMpesaPayment(phone, amount) {
  console.log(`Initiating M-Pesa payment: ${phone}, ${amount}`);
  // Mocked: Integrate with M-Pesa STK Push API
  const response = await fetch(
    `${MPESA_SANDBOX_URL}/mpesa/stkpush/v1/processrequest`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, amount }),
    }
  );
  return response.json();
}
