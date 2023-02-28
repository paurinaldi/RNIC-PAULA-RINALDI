import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';

const CircleIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="black"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle cx={12} cy={12} r={11} />
  </Svg>
);

export default CircleIcon;
