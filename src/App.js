import React, { Component } from 'react';
import Item from 'components/transactions/Item.js';
import api from 'api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      isLoading: true
    }
  }

  componentDidMount() {
    // TODO: Implement auth flow
    api.getTransactions()
    .then(transactions => this.setState({
      transactions: transactions.transactions,
      isLoading: false
    }));
  }

  getItems() {
    const { isLoading, transactions } = this.state;
    if (!isLoading && transactions.length) {
      const items = transactions.map(transaction => <Item {...transaction} />);
      return <section>{items}</section>;
    }

    return null;
  }

  render() {
    const { isLoading, transactions } = this.state;
    return (
      <div>
        <h1>⚛️ Monzo</h1>
        {this.state.isLoading ? 'Loading transactions' : ''}
        {this.getItems()}
      </div>
    );
  }
}

export default App;
