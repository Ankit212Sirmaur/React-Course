import React from 'react'
import { Link } from 'react-router-dom'
function NavigationBar() {
  return (
    <div>
        {/* using semantic tags inside react-elements */}
        <nav>
            <ul>
                <li><Link to= "/home">Home</Link></li>
                <li><Link to= "/about" state={{mykey: 'nothing', yourkey: 'also-nothing'}}>About</Link></li> 
                {/* when the data have to send to their component */}
                <li><Link to= "/login"><button>Login</button></Link></li>
                {/* if register those links which are not registred  */}
                <li><Link to='/books'> <button>booksNot</button></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavigationBar