import styled from 'styled-components';
import { LiHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface NavigationItemProps {}

const StyledNavigationItem = styled.li`
  margin-right: 1rem;
`;

export const NavigationItem = (props: LiHTMLAttributes<HTMLLIElement>) => {
  return <StyledNavigationItem>{props.children}</StyledNavigationItem>;
};

export default NavigationItem;
