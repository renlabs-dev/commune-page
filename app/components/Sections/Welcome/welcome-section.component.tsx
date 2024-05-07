export const WelcomeSection = () => {
  return (
    <div
      id='welcome'
      className='flex flex-col items-start justify-center w-full h-auto p-10 px-6 text-gray-400 border-white bg-black/30 lg:px-20 border-y'
    >
      <div className='flex flex-col justify-center w-full max-w-screen-sm space-y-3'>
        <h3 className='text-3xl font-medium text-white lg:text-5xl'>
          Welcome to the
          <span className='font-normal text-green-500'>
            {' '} commune
          </span>
        </h3>
        <p>A place for everyone to develop design and create.</p>
      </div>
    </div>
  )
}
