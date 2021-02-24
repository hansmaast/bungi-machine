import {
  BorderProps,
  ColorProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps, TypographyProps,
} from 'styled-system';

export type StyleProps =
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ColorProps &
  PositionProps &
  BorderProps &
  TypographyProps;
