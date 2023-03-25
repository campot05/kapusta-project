import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledTitle = styled.p`
    margin:0;
    font-weight: 400;
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
`
