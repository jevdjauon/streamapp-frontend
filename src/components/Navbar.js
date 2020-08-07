import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: darkgreen;
  padding: 0 5%;
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/heroes">All Heroes</Link>
      <Link to="/create">Create Hero</Link>
      <Link to="/user">Create User</Link>
    </Container>
  );
};

export default Navbar;
