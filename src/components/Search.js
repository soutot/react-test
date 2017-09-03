import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../App.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [
        {
          id: '1',
          tipo: 'banana',
          valor: '100',
        },
        {
          id: '2',
          tipo: 'abacaxi',
          valor: '200',
        },
        {
          id: '3',
          tipo: 'bolacha',
          valor: '300',
        },
      ],
    };
  }

  onSearchChange(event) {
    this.setState({ searchText: event.target.value });
  }

  renderSearchComplete() {
    const { products, searchText } = this.state;
    const content = [];
    const productsFiltered = products.filter((item) => {
      return searchText ? item.tipo.includes(searchText) : false;
    });

    productsFiltered.forEach((product) => {
      content.push(<li key={product.id}>{product.tipo}</li>);
    });

    return (
      productsFiltered.length > 0 &&
        <ul
          className="search-complete"
        >
          {content}
        </ul>
    );
  }
  
  render() {
    return (
      <header
        className="header"
      >
        <div
          className="logo"
        >
          <div>
            Logo
          </div>
        </div>
        <div
          className="search"
        >
          <input
            type="text"
            placeholder="Buscar"
            className="search-box"
            onChange={(e) => { this.onSearchChange(e); }}
            value={this.state.searchText}
          />
          <a
            href="/"
            className="search-button"
          >
            <FontAwesome
              name="search"
              className="search-icon"
            />
          </a>
          {this.renderSearchComplete()}
        </div>
      </header>
    );
  }
}

export default Search;
