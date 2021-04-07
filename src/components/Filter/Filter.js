import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import userActions from "../../redux/actions/userActions";

class Filter extends Component {
  handleFilter = (e) => {
    this.props.filterAct(e.currentTarget.value);
  };

  render() {
    return (
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          name="filter"
          value={this.props.filter}
          onChange={this.handleFilter}
          type="text"
        />
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});
const mapDispatchToProps = {
  filterAct: userActions.filterContacts,
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
