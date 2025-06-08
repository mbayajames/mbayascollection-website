export async function sendOrderConfirmationEmail(order) {
  console.log(`Sending order confirmation for order ${order.id}`);
  // Mocked: Integrate with email service (e.g., SendGrid)
}

export async function sendNewsletterSubscription(email) {
  console.log(`Subscribed ${email} to newsletter`);
  // Mocked: Integrate with email service
}
