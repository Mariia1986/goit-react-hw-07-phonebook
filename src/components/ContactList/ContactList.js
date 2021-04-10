import React, { Component } from "react";
import s from "./ContactList.module.css";

class ContactList extends Component {
  componentDidMount() {
    // console.log(this.props.fetchCont())
    this.props.fetchCont();
  }
  onClickDelete = (id) => {
    this.props.deleteCont(id);
  };

  render() {
    const { filteredCont } = this.props;
    console.log(filteredCont);
   

    return (
      <ul className={s.contaktList}>
        {filteredCont.map((el) => (
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

export default ContactList;
