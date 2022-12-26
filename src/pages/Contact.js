import React from 'react'
import ContactLeftSide from '../components/ContactLeftSide'
import ContactRIdeSide from '../components/ContactRIdeSide'
import BranchPage from './BranchPage'

const Contact = () => {
  return (
    <div className="mt-20 flex flex-col whypadding">
      <ContactRIdeSide />
      <ContactLeftSide />
      <BranchPage />
    </div>
  )
}

export default Contact