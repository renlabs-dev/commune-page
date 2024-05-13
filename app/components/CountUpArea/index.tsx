'use client'

import CountUp from 'react-countup'

const networkSpecs = [
  {
    title: 'Active Miners',
    info: '1000',
  },
  {
    title: 'Active Validators',
    info: '200',
  },
  {
    title: 'Contributors',
    info: '100',
  },
]

export const CountUpArea = () => {
  return (
    <div className='flex w-full justify-between border-b border-gray-500 lg:max-w-5xl lg:border-none lg:pl-12'>
      {networkSpecs.map((spec, index) => {
        return (
          <div
            key={index}
            className='flex w-1/3 items-center justify-center border-x border-gray-500 py-8 first:border-none last:border-none lg:border-none'
          >
            <div className='flex w-auto flex-col items-start justify-start'>
              <p className='text-2xl font-semibold text-white lg:text-3xl'>
                <CountUp
                  end={parseInt(spec.info)}
                  delay={0.7}
                  duration={4}
                  decimal=','
                />
                <span className='text-green-500'>+</span>
              </p>
              <p className='text-left text-sm font-normal'>{spec.title}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
