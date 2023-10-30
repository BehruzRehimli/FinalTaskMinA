import React from 'react'
import settings from "../../jsons/settings.json"
import footer from "../../jsons/footer-menu.json"
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
    <footer>
      <div className="my-container">
        <div className='d-flex justify-content-between'>
            <p className='mail'>Mail: {settings.mail}</p>
            <ul className='align-items-center'>
              {
                footer.map((elem)=>{
                  return <Link to={elem.path} key={elem.id}><li>{elem.label.slice(0,elem.label.length-1)+" "+elem.label.slice(elem.label.length-1)}</li></Link>
                })
              }
            </ul>
            <p className='copy'>{settings.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer