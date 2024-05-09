export const WelcomeSection = () => {
  return (
    <div className='border-y px-4 lg:px-20 bg-black/30'>
      <div
        id='start'
        className='flex flex-col items-start justify-center w-full h-auto py-10 text-gray-400 max-w-screen-2xl mx-auto'
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
    </div>
  )
}
