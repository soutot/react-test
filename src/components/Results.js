import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  renderResults() {
    const { filteredProductsList } = this.props;
    const content = [];
    console.log('results: ', filteredProductsList);

    filteredProductsList.forEach((product) => {
      const item = (
        <li
          key={product.id}
          style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            height: '150px',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            padding: '10px',
          }}
        >
          <div
            style={{
              flex: 2,
            }}
          >
            imagem
          </div>
          <div
            style={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ flex: 1 }}>{product.valor}</span>
            <span style={{ flex: 1 }}>{product.tipo}</span>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <span>alguma coisa</span>
          </div>
        </li>
        );

      content.push(item);
    });
    return (
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          width: '65vw',
        }}
      >
      {content}
      </ul>
    );
  }
  render() {
    return (
      <section
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
      {this.renderResults()}
      </section>
    );
  }
}

const mapStateToProps = ({ products }) => {
  const {
    filteredProductsList,
  } = products;

  return {
    filteredProductsList,
  };
};

export default connect(mapStateToProps, {})(Results);
