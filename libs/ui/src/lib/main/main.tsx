import styled from 'styled-components';
import { HTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface MainProps {}

const StyledMain = styled.main`
  padding: 0 1rem;
  width: 100%;
  max-width: 960px;
`;

export const Main = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <div>
      <StyledMain>{props.children}</StyledMain>;
    </div>
  );
};

export default Main;
