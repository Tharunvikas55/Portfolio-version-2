"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {
  const pathName=usePathname()
  // console.log(pathName);
  return (
    //link to each nav items
    <Link className={`rounded p-1 ${pathName ===link.url&& "bg-black text-white"}`} href={link.url}>{link.title} </Link>
  )
}

export default NavLink
