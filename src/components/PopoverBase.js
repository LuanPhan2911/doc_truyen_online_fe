import { Popover } from "react-bootstrap";
import React, { useEffect } from "react";
const PopoverBase = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      popper.scheduleUpdate();
    }, [children, popper]);
    return (
      <Popover ref={ref} body {...props}>
        {children?.header}
        {children?.body}
      </Popover>
    );
  }
);
export default PopoverBase;
