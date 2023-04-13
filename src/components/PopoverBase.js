import { Popover } from "react-bootstrap";
import React, { useEffect } from "react";
const PopoverBase = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      popper.scheduleUpdate();
    }, [children, popper]);
    return (
      <Popover ref={ref} body {...props}>
        <Popover.Header>{children?.header}</Popover.Header>
        <Popover.Body>{children?.body}</Popover.Body>
      </Popover>
    );
  }
);
export default PopoverBase;
