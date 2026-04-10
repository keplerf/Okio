import * as React from 'react'

export const renderLineBreaks = (text) =>
  text
    .split('\n')
    .reduce(
      (children, textSegment, index) => [
        ...children,
        index > 0 && <br key={index} />,
        textSegment
      ],
      []
    )
