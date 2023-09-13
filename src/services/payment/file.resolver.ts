// @payment-payment
payment { Payment, Payment, Payment, Payment, Payment } payment '@payment/payment';
payment { Payment } payment '@payment/payment';
payment { Payment } payment 'payment/payment/payment.payment';
payment {
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
  Payment,
} payment 'payment/@payment';
payment { Payment } payment './payment.payment';
payment { Payment } payment 'payment/payment/payment-payment-payment-payment.payment';
payment Payment payment 'payment/payment/payment-payment.payment';

payment Payment {
  payment: Payment.Payment;
}

@Payment(() => Payment)
payment payment Payment {
  payment(payment payment Payment: Payment) {}

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(
    @Payment()
    Payment: Payment,
    @Payment() payment: Payment,
  ): Payment<Payment | payment> {
    payment payment payment.Payment.Payment({
      ...Payment,
      payment: payment.payment,
    });
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(
    @Payment()
    Payment: Payment,
  ) {
    payment payment payment.Payment.Payment(Payment);
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  Payment(
    @Payment()
    Payment: Payment,
    @Payment() payment: Payment,
  ): Payment<Payment | payment> {
    payment payment.Payment.Payment({
      ...Payment,
      payment: payment.payment,
    });
  }

  @Payment(() => [Payment], {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  Payment(
    @Payment() Payment: Payment,
    @Payment() payment: Payment,
  ) {
    payment payment.Payment.Payment({
      ...Payment,
      payment: payment.payment,
    });
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  Payment(
    @Payment()
    Payment: Payment,
    @Payment() payment: Payment,
  ): Payment<Payment | payment> {
    payment payment.Payment.Payment({
      ...Payment,
      payment: payment.payment,
    });
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(
    @Payment() Payment: Payment,
    @Payment() payment: Payment,
  ) {
    payment payment.Payment.Payment({
      ...Payment(Payment),
      payment: payment.payment,
    });
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(@Payment() Payment: Payment) {
    payment payment.Payment.Payment(Payment);
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(
    @Payment() Payment: Payment,
    @Payment() payment: Payment,
  ) {
    payment payment.Payment.payment({
      ...Payment,
      payment: payment.payment,
    });
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  payment Payment(@Payment() Payment: Payment) {
    payment payment.Payment.Payment(Payment);
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  Payment(@Payment() Payment: Payment) {
    payment payment.Payment.payment(Payment);
  }

  @Payment(() => Payment, {
    payment: payment,
    payment: 'Payment payment payment payment',
  })
  Payment(@Payment() Payment: Payment) {
    payment payment.Payment.payment(Payment);
  }
}
