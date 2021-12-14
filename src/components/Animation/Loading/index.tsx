import React, { ReactElement } from "react";
import Lottie from 'lottie-react-web';
import loadingData from '../../../assets/json/loading.json';

import {AnimationLoadingProps} from "./props"

export default function AnimationLoading({ height, width }:AnimationLoadingProps) : ReactElement  {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Lottie
      speed={0.5}
      width={width}
      height={height}
      options={defaultOptions}
      isStopped={false}
      isPaused={false}
    />
  );
}