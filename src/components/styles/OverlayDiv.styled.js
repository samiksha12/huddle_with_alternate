import styled from "styled-components";

export const StyledOverlayDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 0 auto;
margin-top:-200px;
margin-bottom:60px;
padding: 40px;
max-width:45%;
left:0;
background-color: #fff;
color: ${({color})=>color};

button{
    max-width:75%;
}
@media(max-width:${({ theme }) => theme.mobile})
{
    max-width: 90%;
}
`;