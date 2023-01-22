import React, { useState } from "react";
import { Button, Card, Collapse } from "react-bootstrap";

function MyAccordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <Card.Header>
        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {title}
        </Button>
      </Card.Header>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card.Body>{children}</Card.Body>
        </div>
      </Collapse>
    </Card>
  );
}

export default MyAccordion;

// function MyAccordion() {
//   return (
//     <div>
//       <p>Hello There</p>
//     </div>
//   );
// }

// export default MyAccordion;
