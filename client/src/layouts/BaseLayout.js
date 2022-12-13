import React from 'react'
import Footer from '../components/Footer'

const BaseLayout = ({ children }) => (
  <>
    <main className="bg-white">
      {children}
    </main>
    <Footer />
  </>
)

export default BaseLayout