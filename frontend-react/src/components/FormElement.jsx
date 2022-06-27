import React from "react";

const FormElement = ({name, email, phone_number, location, user}) => {
    console.log('hello')
    if (user === localStorage.getItem('userId')) {
        console.log('hello')
        return(
            <>
                <div className="contact-div">
                    <h3>{name}</h3>
                    <p>{email}</p>
                    <p>{phone_number}</p>
                    <p>{location}</p>
                </div>
            </>
        )
      }
      return
}
export default FormElement;
