import styled from '@emotion/styled';
import { Color } from '@styles/index';

export const Title = styled.h2({
  color: Color.grey,
});

export const Header = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '56px',
  },
  ({ active, disable }: { active: boolean; disable: boolean }) => ({
    opacity: disable ? 0.5 : 1,

    '& > svg': {
      rotate: !disable && active ? '180deg' : '0',
    },
  }),
);

export const Content = styled.div(
  {
    display: 'flex',
    columnGap: '23px',
  },
  ({ active, disable }: { active: boolean; disable: boolean }) => ({}),
);
