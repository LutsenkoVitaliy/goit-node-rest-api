import {listContacts, getContactById, removeContact, addContact} from "../services/contactsServices.js";
// const contacts = require('../services/contactsServices');

export const getAllContacts = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

export const getOneContact = (req, res) => {};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
