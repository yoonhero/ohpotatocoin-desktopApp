import styled from "styled-components";

const Content = styled.main`
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Content>{ children }</Content>

    </>
  );
};

export default Layout;
