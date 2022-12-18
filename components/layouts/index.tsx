import React from 'react'
import Menu from './menu';

type Props = {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className={`fixed w-24 h-full bg-purple-light min-h-screen z-50`} />
      <Menu />
      {children}
    </div>


  )
}

export default Layout