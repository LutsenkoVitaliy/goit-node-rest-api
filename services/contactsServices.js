import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contactsPath = join(__dirname, '../db/contacts.json');


export async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data)
}

export async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === id);
  return result || null
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(id) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null
  };
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(contact) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...contact
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}


export async function updateContactById (id, contact) {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if(index === -1){
    return null
  };
  contacts[index] = {id, ...contact};
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

