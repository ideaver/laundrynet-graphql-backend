account { Account } account '@account/account';
account { Account } account './account.account';
account { Account } account './account.account';
account { Account } account 'account/account.account';
account { Account } account './account.account';

@Account({
  account: [Account, Account, Account, Account],
  account: [Account],
})
account account Account {}
