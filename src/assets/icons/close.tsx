import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CloseIcon = (props: SvgProps) => (
  <Svg width={15} height={15} viewBox="0 0 26 26" {...props}>
    <Path
      d="M14.06 13 24.78 2.28a.75.75 0 1 0-1.06-1.06L13 11.94 2.28 1.22a.75.75 0 1 0-1.06 1.06L11.94 13 1.22 23.72a.75.75 0 1 0 1.06 1.06L13 14.06l10.72 10.72a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.06L14.06 13z"
      fill="#1D1D1B"
    />
  </Svg>
);

export default CloseIcon;
