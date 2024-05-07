export const WelcomeSection = () => {
  return (
    <div
      id='welcome'
      className='flex h-auto w-full flex-col bg-black/30 p-10 px-20 justify-center items-start text-gray-400 border-y border-white'
    >
      <div className='flex w-full max-w-screen-sm flex-col justify-center space-y-3'>
        <h3 className='text-white text-5xl font-medium'>
          Welcome to the
          <span className='text-green-500 font-normal'>
            {' '} commune
          </span>
        </h3>
        <p>A place for everyone to develop design and create.</p>
      </div>
    </div>
  )
}
