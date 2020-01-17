import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  flex: 1;
  height: 100%;
  background: #eeeeee;
  /* background: -webkit-linear-gradient(to bottom, #012840, #023059); */
  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to bottom, #012840, #023059); */
`;

export const Aside = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: -webkit-linear-gradient(to top, #00acc1, #eeeeee);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #00acc1, #eeeeee);
`;

export const Content = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  color: #fff;
  display: flex;
  padding: 0px 30px;
  grid-area: main;

  height: calc(100vh - 110px);
  background: #ebeff3;
  justify-content: space-between;
`;
