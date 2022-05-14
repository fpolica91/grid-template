import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  place-content: center;
  place-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(38, 46, 59, 0.3);
  border-radius: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;
