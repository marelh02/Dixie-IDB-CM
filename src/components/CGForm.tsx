import { ChangeEvent, FormEvent, useState } from "react";
import { addContactGroup } from "../contactManager/contactManagerServices";



export default function CGForm() {
const [groupName, setGroupName] = useState<string>("");

const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
setGroupName(e.target.value);
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

await addContactGroup({
    contactGroupName:groupName, createdAt: Date.now().toString()
  });
  
  setGroupName("");
};

return (
<form onSubmit={handleSubmit}>
<input type="text" value={groupName} onChange={handleNameChange} />
<button type="submit">Add Group</button>
</form>
);
}