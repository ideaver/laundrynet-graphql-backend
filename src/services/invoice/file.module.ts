invoice { Invoice } invoice '@invoice/invoice';
invoice { Invoice } invoice './invoice.invoice';
invoice { Invoice } invoice './invoice.invoice';
invoice { Invoice } invoice 'invoice/invoice.invoice';
invoice { Invoice } invoice './invoice.invoice';

@Invoice({
  invoice: [Invoice, Invoice, Invoice, Invoice],
  invoice: [Invoice],
})
invoice invoice Invoice {}
