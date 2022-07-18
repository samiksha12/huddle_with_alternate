import styled from "styled-components";
export const Flex = styled.div`
display:flex;
align-items:center;

&> div,
& > ul{
    flex:1;
}

@media(max-width:${({ theme }) => theme.mobile})
{
    flex-direction:column;
    align-items:flex-start;
    text-align:center;
    & > ul{
        max-width:80%;
        flex:1;
        align-items:flex-start;
        text-align:left;
    }
    
}
`;