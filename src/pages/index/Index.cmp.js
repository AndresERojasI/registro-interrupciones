import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Container, Input, Card } from 'react-materialize';

class Index extends Component {
  render() {
    return (
      <Container className="index">
        <form action="">
          <Card>
            <h5>
              Registro de Interrupciones del Suministro de Energía Eléctrica
            </h5>
            <Row>
              <Input name="on" type="date" onChange={function(e, value) {}} />
            </Row>
          </Card>
        </form>
      </Container>
    );
  }
}

export default Index;
