import React, { useEffect ,useState} from "react";
import FormElement from "./FormElement";

const Main = () => {
    // const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem('tokenKey')
    const fetchContacts = async () => {
    const res = await fetch("http://localhost:3000/api/user/getContact",{
    headers:{ 'x-access-token': token }})
    var data = await res.json();
    console.log(data);
    return data;
    }

        fetchContacts().then((result)=>{
            console.log(result)
            {
                result.map((contact) => {
            return (
                <>
                <div className="address-book">
                    <FormElement 
                    name={contact.name}
                    email={contact.email}
                    phone_number={contact.phone_number}
                    location={contact.location}
                    user={contact.user}    
                    />
                </div>
                </>
                )
                })
            }
        })
    
    
}


export default Main;