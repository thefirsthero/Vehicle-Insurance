import React, { useEffect, useState } from 'react'
import AdminPolicies from './ApplicationsTable'
import { Link } from 'react-router-dom'
import Users from './UsersTable'
import EditPolicies from './PoliciesTable'
import myimage from './admin_image.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './AdminStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const AdminDashboard = () => {
  const history = useHistory();
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
  });

  const handleLogout = () => {
    sessionStorage.clear();
    history.push('/');
  }

  const n = localStorage.getItem('name')
  const [active, setActive] = useState(1);
  return (
    <>
      {token &&
        <div className='d-flex'>

          <div className='w-25'>

            <div className='sidebar justify-content-between flex-column bg-white text-dark py-5 ps-3 pe-2 vh-100 text-black m-0 text-center'>

              <img src={myimage} className='h-25 mx-auto bg-white' />
              <p>{n}</p>


              <hr className='text-secondary'></hr>
              <ul className="nav nav-pills flex-column mt-2">
                <button className={active === 1 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(1)}>

                  <span className='text-decoration-none'>
                    <i className='bi bi-wrench-adjustable me-3 fs-4'></i>
                    <span className='fs-4 '><strong>Applications</strong></span>
                  </span>
                </button>
                <button className={active === 3 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(3)}>
                  <span className='p-1'>
                    <span className='text-decoration-none'>
                      <i className='bi bi-shield-fill-check me-3 fs-4'></i>
                      <span className='fs-4'><strong>Policies</strong></span>
                    </span>
                  </span>
                </button>
                <button className={active === 2 ? 'active nav-item p-2' : 'nav-item p-2'} onClick={e => setActive(2)}>
                  <span className='p-1'>
                    <span className='text-decoration-none'>
                      <i className='bi bi-person-hearts me-3 fs-4'></i>
                      <span className='fs-4'><strong>Users</strong></span>
                    </span></span>
                </button>


              </ul>
              <ul className="nav nav-pills flex-column mt-3" >
                <button className='nav-item p-2' onClick={handleLogout}>
                  <span className='p-1'>
                    <span className='text-decoration-none'>
                      <i className='bi bi-caret-left-fill me-3 fs-4'></i>
                      <span className='fs-4'><strong>Logout</strong></span>
                    </span></span>
                </button>

              </ul>
            </div>
          </div>
          <div className='col m-4'>
            <h1 className='text-center p-4'>Admin Dashboard</h1>
            <div style={{ border: '2px solid black', height: '80%' }}>
              {active === 1 && <AdminPolicies />}
              {active === 2 && <Users />}
              {active === 3 && <EditPolicies />}
            </div>

          </div>


        </div>
      }

      {!token &&
        <div className="d-flex justify-content-center align-items-center login-container">
          <div class="alert alert-warning" role="alert">
            <Link to='/'>Please Login</Link>
          </div>
        </div>
      }
    </>
  )


}

export default AdminDashboard