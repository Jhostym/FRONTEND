import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 ronunded-lg">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className="text-2xl font-bold">TRANSPORTES J</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ?
          (
            <>
              <li>
                BIENVENIDO {user.name}
              </li>
              <li>
                <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-sm" >Add Tasks</Link>
              </li>
              <li>
                <Link className="bg-red-500 px-4 py-1 rounded-sm" to="/" onClick={() => {
                  logout()
                }}>Logout</Link>
              </li>

            </>
          ) :
          (
            <>
              <li>
                <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
              </li>
            </>
          )}
      </ul>
    </nav>
  )
}

export default Navbar