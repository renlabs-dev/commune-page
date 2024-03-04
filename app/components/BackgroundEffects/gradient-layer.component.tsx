type TGradientLayerProps = {
  wrapperOverwriteStyle?: string
  gradientColor?: string
  gradientStyle?: string
}

export const GradientLayer: React.FC<TGradientLayerProps> = ({
  gradientColor = '',
  wrapperOverwriteStyle = '',
}) => {
  const gradientClipPath =
    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'

  return (
    <div
      className={`absolute top-10 lg:top-[calc(60%-30rem)] -z-10 transform-gpu blur-3xl ${wrapperOverwriteStyle}`}
      aria-hidden='true'
    >
      <div
        style={{ clipPath: gradientClipPath }}
        className={`
          aspect-[1108/632] w-[69.25rem] 
          bg-gradient-to-r
          opacity-50
          ${gradientColor}
        `}
      />
    </div>
  )
}
