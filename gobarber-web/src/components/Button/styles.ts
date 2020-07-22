import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 24px;
  height: 56px;
  width: 100%;
  border: 0;
  border-radius: 10px;
  background-color: #ff9000;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
