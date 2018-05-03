import React from "react"
import Icon from "../reusable/icon/icon"
const ConactDetails = ({product})=> <ul>
      
        {product.contacts.map((contact, key) => 
        <li key={key}>
            <Icon className="fas fa-phone" name="fas fa-phone" />    
            {contact.number}
        </li>)}
        <li>
        <Icon className="fas fa-location-arrow" name="fas fa-location-arrow" />  
        {product.location.name}
        </li>
        <li>
        <Icon name="calendar" />  
        {
            new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(product.created_at)
        }</li>
    </ul>

export default ConactDetails