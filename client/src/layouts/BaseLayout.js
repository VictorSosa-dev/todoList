import React from 'react'
import Footer from '../components/Footer'

const BaseLayout = ({ children }) => (
  <>
    <main>  
      {children}
    </main>
  </>
)

export default BaseLayout