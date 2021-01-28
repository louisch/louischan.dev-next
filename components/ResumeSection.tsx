import React from 'react'


function ResumeSection({ title, children }): React.ReactElement {
  return (
    <div>
      <h2>{title}</h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
}


export default ResumeSection
