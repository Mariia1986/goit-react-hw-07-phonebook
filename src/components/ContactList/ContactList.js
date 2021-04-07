import React, { Component } from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";

class ContactList extends Component {
  onClickDelete = (id) => {
    this.props.deleteCont(id);
  };

  render() {
    const { contacts, filter } = this.props;
    const normalaizedFilter = filter.toLowerCase();
    const filteredNames = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalaizedFilter)
    );

    return (
      <ul className={s.contaktList}>
        {filteredNames.map((el) => (
          <li className={s.contaktListItem} key={el.id}>
            <p className={s.contaktListName}>
              {el.name} : {el.number}
            </p>
            <button
              className={s.contaktListButton}
              type="button"
              onClick={() => this.onClickDelete(el.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  deleteCont: userActions.deleteContact,
  filterAct: userActions.filterContacts,
};

ContactList.propTypes = {
  filteredNames: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
