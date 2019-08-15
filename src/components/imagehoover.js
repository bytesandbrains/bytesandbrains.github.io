import React, { useRef, useState } from 'react'

export default ({ notHover, hover, nameClass, attributeText }) => {
  const [logoUrl, setLogoUrl] = useState(notHover)

  return (
    <img
      className={nameClass}
      alt={attributeText}
      src={logoUrl}
      onMouseOver={() => setLogoUrl(hover)}
      onMouseOut={() => setLogoUrl(notHover)}
    />
  )
}
