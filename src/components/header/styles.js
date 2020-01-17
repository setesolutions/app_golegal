import styled from 'styled-components';

export const Container = styled.div`
  /*   font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  height: auto; */
  padding: 0 30px;
  color: #fff;

  grid-area: head;

  background: #eeeeee; /* fallback for old browsers */
  /*background: -webkit-linear-gradient(
    to right,
    #e91e63,
    #ffffff
  );*/ /* Chrome 10-25, Safari 5.1-6 */
  /*background: linear-gradient(
    to right,
    #e91e63,
    #ffffff
  );*/ /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #e91e63;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #00acc1;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
