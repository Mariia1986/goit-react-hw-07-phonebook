import axios from "axios";
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from "../actions/userActions";

axios.defaults.baseUrl = "http://localhost:4040/";

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess( data)))
    .error((error) => (dispatch) => fetchContactsError(error));
};

const addContacts = (name, phone) => (dispatch) => {
  const contact = {
    name,
    phone,
  };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .error((error) => dispatch(addContactsError(error)));
};

const deleteContacts = (id) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .error((error) => dispatch(deleteContactsError(error)));
};


export default {
    fetchContacts,
    addContacts,
    deleteContacts  
}