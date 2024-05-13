export const WelcomeSection = () => {
  return (
    <div className='border-y border-gray-500 bg-black/30 px-4 lg:px-20'>
      <div
        id='start'
        className='mx-auto flex h-auto w-full max-w-screen-2xl flex-col items-start justify-center py-10 text-gray-400'
      >
        <div className='flex w-full max-w-screen-sm flex-col justify-center space-y-3 py-12'>
          <h3 className='text-3xl font-medium text-white lg:text-5xl'>
            Welcome to
            <span className='font-normal text-green-500'> Commune</span>
          </h3>
          <p>A place for everyone to develop design and create.</p>
        </div>
      </div>
    </div>
  )
}
