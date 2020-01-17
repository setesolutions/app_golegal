import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(to top, #000000, #00acc1);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #000000, #00acc1);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 355px;
  text-align: center;

  border-radius: 5px;

  img {
    width: 100%;
    /* border-top-left-radius: 50%; */
    /* border-bottom-left-radius: 50%; */
    border-bottom-right-radius: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.3);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #eeeeee;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #00acc1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.1, '#00acc1')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
