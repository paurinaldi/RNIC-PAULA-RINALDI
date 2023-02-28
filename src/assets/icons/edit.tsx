import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const EditIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 32 32"
    fill="none"
    width={20}
    height={20}
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    {...props}>
    <Path d="m30 7-5-5L5 22l-2 7 7-2Zm-9-1 5 5ZM5 22l5 5Z" />
  </Svg>
);

export default EditIcon;
