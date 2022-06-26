import React, { useEffect } from "react";

const Main = () => {

    const token = localStorage.getItem('tokenKey')
    const fetchContacts = async () => {
    console.log('hello')
    const res = await fetch("http://localhost:3000/api/user/getContact",{
    headers:{ 'x-access-token': token }})
    const data = await res.json();
    console.log(data)
    }
    
    fetchContacts()
    
    return (
        <>
        <div className="address-book">
        </div>
        </>
    )
}

export default Main;