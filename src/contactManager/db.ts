import Dexie, { Table } from 'dexie';

export interface Contact {
  id?: number;
  contactName: string;
  accountId: string;
  pubKey: string;
  cgid:number;
}

export interface ContactGroup {
  id?: number;
  contactGroupName: string;
  createdAt: string;
}

export class MySubClassedDexie extends Dexie {
  contacts!: Table<Contact>;
  contactGroups!: Table<ContactGroup>;

  constructor() {
    super('MSDexieIDB');
    this.version(1).stores({
      contacts: '++id,contactName,accountId,pubKey,cgid',
      contactGroups: '++id,contactGroupName,createdAt'
    });
  }
}

export const db = new MySubClassedDexie();