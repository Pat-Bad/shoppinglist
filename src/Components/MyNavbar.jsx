import { Container, Navbar } from "react-bootstrap";
//fake because we don't need it
const MyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-dark sticky-top py-0"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        height: "60px",
        borderBottom: "3px solid white",
      }}
    >
      <Container
        fluid
        style={{
          paddingLeft: 50,
        }}
      >
        <Navbar.Brand className="text-light fw-bold">
          Gettin' those greens!
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
