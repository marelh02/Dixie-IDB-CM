import { useEffect, useState } from 'react'
import './App.css'
import CGForm from './components/CGForm'
import CForm from './components/CForm'


import { Contact, ContactGroup } from './contactManager/db'
import { getAllContactGroups, getAllContacts } from './contactManager/contactManagerServices'
import { Item, ItemDescription, ItemGroup, ItemHeader } from 'semantic-ui-react'

function App() {
  const [cgs, setCgs] = useState<ContactGroup[]>([]);
  const [cs, setCs] = useState<Contact[]>([]);

  useEffect(()=>{
    const f = async ()=>{
      setCgs(await getAllContactGroups())
      setCs(await getAllContacts())
        }
        f()
  },[])
  return (
    <>
      <CGForm/>
      <CForm/>
      <div>
        <h2>ContactGroups</h2>
        <ItemGroup>
          {cgs?.map(x=><Item>
            <ItemHeader as='h3'>{x.contactGroupName}</ItemHeader>
            <ItemDescription>id: {x.id}</ItemDescription>
          </Item>)}
        </ItemGroup>
      </div>
      <div>
        <h2>Contacts</h2>
        <ItemGroup>
          {cs?.map(x=><Item>
            <ItemHeader as='h3'>{x.contactName}</ItemHeader>
            <ItemDescription>id: {x.id}</ItemDescription>
            <ItemDescription>gid: {x.cgid}</ItemDescription>
          </Item>)}
        </ItemGroup>
      </div>
    </>
  )
}

export default App
