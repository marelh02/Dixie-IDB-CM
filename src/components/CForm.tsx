import { ChangeEvent, FormEvent, useState } from "react";
import { addContact } from "../contactManager/contactManagerServices";


export default function CForm() {
const [name, setName] = useState("");
const [accountId, setAccountId] = useState("");
const [pubKey, setPubKey] = useState("");
const [cgid, setCgid] = useState(0);

const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
setName(e.target.value);
};

const handleAccountIdChange = (e: ChangeEvent<HTMLInputElement>) => {
setAccountId(e.target.value);
};

const handlePubKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
setPubKey(e.target.value);
};

const handleCgidChange = (e: ChangeEvent<HTMLInputElement>) => {
setCgid(Number(e.target.value));
};

const handleSubmit = async (e: FormEvent) => {
e.preventDefault();
await addContact({
    contactName: name,
    accountId: accountId, 
    pubKey: pubKey,
    cgid: cgid
  });
  
  // reset form values
};

return (
<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={handleNameChange} />
<input
    type="text" 
    value={accountId}
    onChange={handleAccountIdChange} 
  />

  <input
    type="text"
    value={pubKey} 
    onChange={handlePubKeyChange}
  />

  <input
    type="number"
    value={cgid}
    onChange={handleCgidChange}  
  />

  <button type="submit">Add Contact</button>
</form>
);
}