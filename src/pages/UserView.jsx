import React from 'react'
import { useParams } from "react-router-dom"

export default function UserView() {
    let parametro = useParams()

  return (
    <div>User {parametro.id}</div>
  )
}
