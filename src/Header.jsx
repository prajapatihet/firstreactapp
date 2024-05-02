import React from 'react'

export default function Header({ email, phone, name, children }) {// here instead of props we can use any words like p, o, i etc..
    // let { name } = props; //destructuring assignment to get the header info object from props 
    return (
        <div>
            <h1>Header: {email} | {phone} Name: {name.firstName}, {name.lastName}</h1>
            <h1>Header: {name.firstName}, {name.lastName}</h1>
            {children}
        </div>
    )
}
