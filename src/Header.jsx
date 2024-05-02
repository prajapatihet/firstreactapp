import React from 'react'

export default function Header(props) {// here instead of props we can use any words like p, o, i etc..
    let { name } = props; //destructuring assignment to get the header info object from props 
    return (
        // <h1>Header: {props.email} | {props.phone} Name: {props.name.firstName}, {props.name.lastName}</h1>
        <h1>Header: {name.firstName}, {name.lastName}</h1>
    )
}
