'use client'

import React from 'react'
import { useLottie } from 'lottie-react'
import logoAnimation from './logo-lottie.json'

const LogoLottie = () => {
  const options = {
    loop: false,
    autoplay: true,
    animationData: logoAnimation,
  }

  const { View } = useLottie(options)

  return <div>{View}</div>
}

export default LogoLottie
