import axios from "axios";

const url = "http://localhost:8080/user";

export const addUsers = async (user) => {
  return await axios.post(`${url}/addUser`, user);
};

export const getAllUsers = async () => {
  return await axios.get(`${url}`);
};

export const getOneUser = async (id) => {
  return await axios.get(`${url}/showUser/${id}`);
};
export const editUsers = async (id, user) => {
  return await axios.put(`${url}/editUser/${id}`, user);
};

export const deleteUsers = async (id) => {
  return await axios.delete(`${url}/deleteUser/${id}`);
};



