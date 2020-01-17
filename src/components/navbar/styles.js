import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 0 30px;
  color: #fff;

  height: auto;
  background: #fff;
  grid-area: navbar;

  @media (max-width: 375px) {
    display: none;
  }
`;
