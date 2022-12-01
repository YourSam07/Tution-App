import React from 'react'
import ContactLeftSide from '../components/ContactLeftSide'
import ContactRIdeSide from '../components/ContactRIdeSide'

const Contact = () => {
  return (
    <div className="flex flex-col">
      <ContactRIdeSide />
      <ContactLeftSide />
    </div>
  )
}

export default Contact