import { Container, Navbar } from "react-bootstrap";
//fake because we don't need it
const MyNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-dark sticky-top"
    >
      <Container
        fluid
        style={{
          paddingLeft: 50,
          paddingTop: 20,
          paddingBottom: 20,
          color: "white",
          fontWeight: "bold",
          borderBottom: "1px solid white",
        }}
      >
        <Navbar.Brand>Gettin' those greens!</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
