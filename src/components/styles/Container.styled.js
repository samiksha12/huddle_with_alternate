import styled from "styled-components";

export const Container = styled.div`
    // width:1200px;
    max-width:100%;
    padding:0 20px;
    margin:0 70px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin:0 auto;
    }
`
