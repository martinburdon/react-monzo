import settings from 'settings.js';

export default {
  fetchData(path = '') {
    const { accessToken, api } = settings;
    return fetch(`${api}/${path}`, {
      headers: new Headers({
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      })
    })
    .then(response => Promise.resolve(response.json()));
  },

  getAccounts() {
    return this.fetchData('accounts').then(data => data);
  },

  getTransactions() {
    return this.getActiveAccount()
    .then(({ id }) => this.fetchData(`transactions?account_id=${id}`));
  },

  getActiveAccount() {
    return this.getAccounts()
    .then(accounts => accounts.accounts.find(account => account.closed === false));
  }
}
