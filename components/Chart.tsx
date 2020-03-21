

import React, { FC } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}
const Chart : FC<Props> = ({ title, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>{title}</div>
      <div style={{ height: 500, width: '50vw' }}>{children}</div>
    </div>
  )
}

export default Chart