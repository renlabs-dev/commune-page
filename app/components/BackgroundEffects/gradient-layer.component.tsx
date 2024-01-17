type TGradientLayerProps = {
  children: React.ReactElement
  wrapperOverwriteStyle?: string
  direction?: string
}

export const GradientLayer = (props: TGradientLayerProps) => {
  const { children, wrapperOverwriteStyle = '', direction = 'left' } = props;

  return (
    <>
      <div
        className={`absolute ${direction}-[calc(50%+4rem)] top-10 -z-10 transform-gpu blur-3xl sm:${direction}-[calc(50%+18rem)] lg:${direction}-48 lg:top-[calc(50%-30rem)] xl:${direction}-[calc(50%+24rem)] ${wrapperOverwriteStyle}`}
        aria-hidden="true"
      >
        {children}
      </div>
    </>
  )
}