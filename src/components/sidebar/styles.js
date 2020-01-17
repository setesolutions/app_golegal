import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 100vh;
  background-color: rgba(37, 37, 41, 0.5);
  width: 250px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  list-style: none;
  width: 70px;
  padding: 0px;
`;

export const SidebarMenuItem = styled.li`
  display: flex;
  height: 40px;
  width: 250px;
  align-items: center;
  padding-left: 30px;
  &:hover {
    background: rgba(0, 172, 193, 0.8);
    border-radius: 5px;
    box-shadow: inset 3px 0 3px 0 #ffffff;
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const SidebarMenuItemLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  text-align: left;
  padding: 12px 0px;
  margin-left: 20px;
  color: #eeeeee;
  width: 290px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  background: #252529;
  color: #fff;
  margin: 0px 0px 30px 0px;
  border-bottom-right-radius: 70%;
  box-shadow: 5px 5px 8px #252529;

  img {
    max-width: 100%;
    height: auto;

    @media (max-width: 750px) {
      display: none;
    }
  }
`;

export const MenuSignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  border-top: 1px solid #2e2e33;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  height: 40px;
  color: #fff;
  margin: 150px 0px 60px 0px;
  padding: 0px 0px 0px 30px;
  width: 250px;

  p {
    padding-left: 20px;

    @media (max-width: 750px) {
      display: none;
    }
  }

  &:hover {
    background: rgba(233, 30, 99, 0.8);
    border-radius: 5px;
    box-shadow: inset 3px 0px 3px 0px #ffffff;
    cursor: pointer;
  }
`;
