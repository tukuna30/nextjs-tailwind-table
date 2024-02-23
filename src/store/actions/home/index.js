import * as actionTypes from "../../../constants/actionTypes";
import * as api from "../api";

const setUsers = (data) => {
  return {
    type: actionTypes.SET_USERS,
    data: data,
  };
};

export const fetchUsers = (query) => async (dispatch) => {
  try {
    const data = await api.getUsers(query);

    console.log(data, 'users', query);

    if (query.keyword) {
      data.results = data.results.filter(item => item.name.first.includes(query.keyword) || item.login.username.includes(query.keyword) || item.email.includes(query.keyword) )
    }

    dispatch(setUsers(data));
  } catch (err) {
    console.error(err);
  }
};
