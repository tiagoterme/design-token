import React from 'react'
import { Button } from '../components'
import { useAuth } from '../contexts/authContext'
import requireAuthentication from '../hoc/requireAuthentication'


const authenticated = function AuthenticatedRoute() {
  const { logout } = useAuth()
  return (
    <>
      <div>Authenticated</div>
      <Button label="Logout" onClick={() => logout()} primary={true} />
    </>
  )
}

export default requireAuthentication(authenticated);