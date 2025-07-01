import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Write = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const addToList = () => {
    setItem([...item, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <Form
        className="mt-5 d-flex justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <Form.Group
          className="mb-3 d-flex"
          controlId="typewhatyouwant"
        >
          <Form.Control
            type="text"
            placeholder="I need..."
            className="ps-5 me-3"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button
            variant="success"
            type="button"
            onClick={addToList}
          >
            Add
          </Button>
        </Form.Group>
      </Form>

      <ul className="d-flex flex-column align-items-center">
        {item.map((item, index) => (
          <li
            key={index}
            className="d-flex align-items-center mb-2 text-light"
          >
            <span className="me-3">{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Write;
