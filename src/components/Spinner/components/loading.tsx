/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-named-as-default
import Spinner, { SpinnerProps } from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({ className = '', name = SPINNER_DEFAULT, color = COLOR_SPINNER, ...rest }: SpinnerProps) {
  return <Spinner className={className} name={name} color={color} fadeIn="half" {...rest} />;
}

export default Loading;
