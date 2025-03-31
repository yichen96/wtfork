import React from 'react';
import {Svg} from '../styles/svg';

interface CheckIconProps {
   size?: number;
}

export const CheckIcon = ({ size = 24 }: CheckIconProps) => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={size}
         height={size}
         viewBox="0 0 24 24"
         style={{ minWidth: size, minHeight: size }}
      >
         <Svg.Path
            css={{
               fill: '$green600',
            }}
            d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
         ></Svg.Path>
      </Svg>
   );
};
