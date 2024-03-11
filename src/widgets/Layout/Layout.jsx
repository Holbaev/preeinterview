import React from 'react'
import './Layout.scss';
import Header from './components/Header/Header';

const Layout = ({children}) => {
  return (
    <div className="layout">
        <div className="layout_header">
            <Header/>
        </div>
        <div className="layout_body">
        {children}
        </div>
    </div>
  )
}

export default Layout