'use client'

import React, { useEffect } from 'react'
import { useLottie } from 'lottie-react'
import logoAnimation from './logo-lottie.json'

const LogoLottie = () => {
  const options = {
    loop: false,
    autoplay: false,
    animationData: logoAnimation,
  }

  const { View, play } = useLottie(options)

  useEffect(() => {
    const timer = setTimeout(() => {
      play()
    }, 1000)

    return () => clearTimeout(timer)
  }, [play])

  return <div>{View}</div>
}

export default LogoLottie
