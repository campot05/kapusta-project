import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 100px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 8px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Category = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const Date = styled.span`
  margin-right: 20px;
  font-size: 8px;
  line-height: 1.13;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const Descr = styled.span`
  font-size: 8px;
  line-height: 1.13;
  letter-spacing: 0.04em;
  color: #52555f;
`;

export const Amount = styled.span`
  margin-left: auto;
  margin-right: 14px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #407946;
`;

export const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #f5f6fb;
`;
