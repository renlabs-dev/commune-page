'use client'
import { Disclosure } from '@headlessui/react'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import Image from 'next/image'

export const FrequentQuestions = () => {
  return (
    <section
      className={`relative overflow-hidden divide-y text-left text-white`}
    >
      <div className='px-6 py-12 space-y-4 lg:px-20'>
        <h2 className='text-3xl font-medium text-white lg:text-5xl'>
          Frequently asked
          <span
            className={`text-green-500`}
          >
            {' '} questions
          </span>
        </h2>
        <p className='font-medium text-gray-400'>A Knowledge Treasure Trove</p>
      </div>

      <div className=''>
        <dl className='divide-y divide-white'>
          {faqData.map((faq) => (
            <Disclosure as='div' key={faq.question} className='p-6 space-y-4 lg:px-20'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex items-center justify-between w-full text-left'>
                      <div className='flex w-full'>
                        <span className='w-[80%] text-base font-semibold leading-7 text-white'>
                          {faq.question}
                        </span>
                      </div>
                      <span className='flex items-center py-4 border border-white'>
                        <Image
                          src={'/arrow-down-icon.svg'}
                          width={50}
                          height={50}
                          alt={'read'}
                          className={
                            open
                              ? 'h-5 rotate-0 transform animate-open-accordion'
                              : 'h-5 -rotate-90 transform animate-close-accordion'
                          }
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as='dd'
                    className='pr-12 mt-2 animate-fade-slide-down text-pretty'
                  >
                    <p className='mr-8 text-base leading-7 text-gray-400'>
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div >
    </section >
  )
}
