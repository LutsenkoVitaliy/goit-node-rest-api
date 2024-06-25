import {listContacts, getContactById, removeContact, addContact} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);

  } catch (error) {
    next(error);
    // res.status(500).json({
    //   message: "Server error"
    // })
  }
};

export const getOneContact = async (req, res, next) => {
  // console.log(req.params); // динамічні данні маршруту (id)
  try {
    const {id} = req.params; // {id} - что бы достать значения id с обьекта (string)
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404);
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
      // return res.status(404).json({
      //   message: "Not found"
      // })
    }
    res.json(result);
  } catch (error) {
    next(error);
    // const {status = 500, message = "Server error"} = error
    // res.status(500).json({
    //   message,
    // })
  }
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
