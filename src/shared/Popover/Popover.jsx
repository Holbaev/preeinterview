import React from 'react';
import { Popover } from 'react-tiny-popover';

const PopoverPop  = ({isOpen, positions, padding, reposition, onClickOutside, content, children}) => {
  return (
    <Popover
      isOpen={isOpen}
      positions={positions || ['top', 'bottom', 'left', 'right']}
      padding={padding || 10}
      reposition={reposition !== undefined ? reposition : true}
      onClickOutside={onClickOutside}
      content={content}
      containerStyle={{ zIndex: 9999 }} 
    >
      {children}
    </Popover>
  )
}

export default PopoverPop