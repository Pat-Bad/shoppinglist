import { useState } from "react";
import { Button, Container, Form, FormCheck } from "react-bootstrap";

const Write = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);
  const addToList = () => {
    setItem([...item, inputValue]);
    setInputValue("");
  };

  const removeFromList = (index) => {
    const updatedList = [...item];
    updatedList.splice(index, 1);
    setItem(updatedList);
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
            variant="warning"
            type="button"
            onClick={addToList}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Add
          </Button>
        </Form.Group>
      </Form>

      <Container>
        <div
          className="mt-3 border border-1 border-light w-50 mx-auto"
          style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: "600px",
          }}
        >
          <ul className="d-flex flex-column align-items-center px-3 pt-3">
            {item.map((item, index) => (
              <li
                key={index}
                className="d-flex align-items-center mb-4 text-light justify-content-between w-100"
              >
                <span className="d-flex align-items-center">
                  <FormCheck className="fs-4 me-3" />
                  {item}
                </span>
                <Button
                  variant="danger"
                  onClick={() => removeFromList(index)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Write;
