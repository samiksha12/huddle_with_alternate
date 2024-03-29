import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  li {
    list-style: none;
  }
  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      justify-content: center;
      align-items: center;
    }
  }
`;
