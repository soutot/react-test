import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import {
  actionTeste,
} from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  onSearchChange(event) {
    this.setState({ searchText: event.target.value });
  }

  renderSearchComplete() {
    const { searchText } = this.state;
    const { productsList } = this.props;
    const content = [];
    const productsFiltered = productsList.filter((item) => {
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

const mapStateToProps = ({ products }) => {
  const {
    productsList,
  } = products;

  return {
    productsList,
  };
};

export default connect(mapStateToProps,
  {
    actionTeste,
  }
)(Search);
