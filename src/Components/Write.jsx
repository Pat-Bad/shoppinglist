import { Form } from "react-bootstrap";

const Write = () => {
  return (
    <Form>
      <Form.Group
        className="mb-3 d-flex"
        controlId="typewhatyouwant"
      >
        <Form.Label className="pe-5 ps-5 text-light">Add something</Form.Label>
        <Form.Control
          type="text"
          placeholder="Carrots, apples..."
          className="ps-5 w-25"
        />
      </Form.Group>
    </Form>
  );
};

export default Write;
