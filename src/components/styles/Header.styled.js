import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  background-image: url('./images/bg-hero-desktop.svg');

  @media(max-width:${({ theme }) => theme.mobile})
  {
    background-image: url('./images/bg-hero-mobile.svg');
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media(max-width:${({ theme }) => theme.mobile})
{
    flex-direction:column;
}

  `;

export const Logo = styled.img`
@media(max-width:${({ theme }) => theme.mobile})
{
    margin-bottom:40px;
}
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media(max-width:${({ theme }) => theme.mobile})
{
    margin:0 auto;
    margin-top:40px;
}
`;
