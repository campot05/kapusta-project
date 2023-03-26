import styled from "@emotion/styled";

export const StyledReportAppbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 32px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

`;
export const Container = styled.div`
    padding:0 20px;

    @media screen and (min-width: 480px) {
        padding: 0 32px;
    }
    @media screen and (min-width: 480px) {
        padding: 0 123px;
    }
`;
export const StyledCommonBar = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
   
`;
