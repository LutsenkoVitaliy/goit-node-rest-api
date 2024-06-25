import {listContacts, getContactById, removeContact, addContact, updateContactById} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);

  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  // console.log(req.params); // динамічні данні маршруту (id)
  try {
    const {id} = req.params; // {id} - что бы достать значения id с обьекта (string)
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await removeContact(id);
    if (!result) {
      throw HttpError(404);
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }  
};


export const createContact = async (req, res, next) => {
  try {
    // const {error} = createContactSchema.validate(req.body); 
    // if (error) {
    //   throw HttpError(400);
    // }
    // console.log(req.body); // тело запроса 
    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    // const {error} = updateContactSchema.validate(req.body); 
    // if (error) {
    //   throw HttpError(400);
    // }
    const {id} = req.params;
    const result = await updateContactById(id, req.body);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);

  } catch (error) {
    next(error);
  }
};
