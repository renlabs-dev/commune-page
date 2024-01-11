"use client"
import Lottie from 'react-lottie-player'

type TLottiePlayerProps = {
  animationData: object
  className: string
}

export const LottiePlayer = (props: TLottiePlayerProps) => {
  const { animationData, className = 'opacity-40 max-w-4xl animate-fadeIn' } = props
  return (
    <Lottie
      animationData={animationData}
      play
      loop
      className={className}
    />
  )
}
