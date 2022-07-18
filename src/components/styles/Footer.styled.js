import styled from "styled-components";

export const StyledFooter = styled.footer`
margin-top:200px;
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    padding-left:10px;
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  .firstUl{
    flex:2;
    margin-right:50px;
  }
  .firstUl .location{
    list-style-image: url('./images/icon-location.svg');
  }
  .firstUl .phone{
    list-style-image: url('./images/icon-phone.svg');
  }
  .firstUl .email{
    list-style-image: url('./images/icon-email.svg');
  }
  img{
    margin-bottom:20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    .firstUl{
      flex:1;
      margin-right:0px;
      width:80%;
    }
    
    p {
      text-align: center;
    }
  }
`;
