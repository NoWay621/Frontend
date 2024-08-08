import { Link } from "react-router-dom"

const Navbar = () => {
  return (
       <nav>
        <div className='flex justify-between items-center bg-green-400 text-black p-4'>
          <h1 className='text-2xl cursor-pointer'>
            <Link to="/">Company Logo</Link>
          </h1>
          <ul className='flex gap-7 text-1xl uppercase'>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Shop" target="-blank">Shop</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
       </nav>
  )
}

export default Navbar
