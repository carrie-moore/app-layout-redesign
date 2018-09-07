import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class ExpenseItem extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    remove: PropTypes.func
  };

  render() {
    const { expense, onEdit, remove } = this.props;

    return (
      <Fragment>
        <section className="expense-item">
          <button name="edit" onClick={onEdit}>EDIT</button>
          <button name="delete" onClick={() => remove(expense)}>DELETE</button>
          <h3>{expense.name}</h3>
          <h3 className="price">Price: {expense.price}</h3>
        </section>
      </Fragment>
    );
  }
}

export default connect (
  null,
  { remove }
)(ExpenseItem);
