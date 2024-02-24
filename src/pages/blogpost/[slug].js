import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug}=router.query// javascript using destructuring 
  return (
    <div>{slug}</div>
  )
}

export default slug;