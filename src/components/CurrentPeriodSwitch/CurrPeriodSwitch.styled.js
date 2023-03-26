import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledTitle = styled.p`
    margin:0;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    line-height: calc(14/12);
    letter-spacing: 0.04;
    color:#52555F;
`;

export const StyledLinkBackToMain = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap:18px;
    text-decoration: none;
    margin-bottom:${({width})=>width <=480 ? '22px': 0};
    max-width: 150px;

    
    

`
