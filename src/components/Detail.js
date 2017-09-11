import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    const { filteredProductsList } = this.props;

    return (
      <section
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
            width: '65vw',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              imagem
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <li>
                  texto1
                </li>
                <li>
                  texto2
                </li>
                <li
                  style={{
                    margin: '30px 0',
                  }}
                >
                  valor
                </li>
                <li>
                  <div
                    style={{
                      backgroundColor: 'blue',
                      color: '#FFFFFF',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '170px',
                      height: '30px',
                      marginTop: '10px',
                    }}
                  >
                      COMPRAR
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Descrição</h2>
            <span>Texto</span>
          </div>
        </div>
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

export default connect(mapStateToProps, {})(Details);
