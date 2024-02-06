import { ContactGroup, Contact, db } from "./db";

// ContactGroup functions

export async function addContactGroup(contactGroup: ContactGroup) {
  return await db.contactGroups.add(contactGroup);
}

export async function editContactGroup(contactGroup: ContactGroup) {
  return await db.contactGroups.put(contactGroup);
}

export async function getAllContactGroups() {
  return await db.contactGroups.toArray();
}

export async function deleteContactGroup(id: number) {
    await Promise.all([db.contacts.where("cgid").equals(id).delete(),db.contactGroups.delete(id)])
}

// Contact functions

export async function addContact(contact: Contact) {
  return await db.contacts.add(contact);
}

export async function editContact(contact: Contact) {
  return await db.contacts.put(contact);
}

export async function getAllContacts() {
  return await db.contacts.toArray();
}

export async function getAllContactsByGroupId(groupId: number) {
  return await db.contacts.where("cgid").equals(groupId).toArray();
}

export async function deleteContact(id: number) {
  return await db.contacts.delete(id);
}

export async function getContactById(id: number) {
  return await db.contacts.get(id);
}
