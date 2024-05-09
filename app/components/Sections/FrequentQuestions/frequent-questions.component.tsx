'use client'
import { Disclosure } from '@headlessui/react'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import Image from 'next/image'

export const FrequentQuestions = () => {
  return (
    <section
      className={`relative overflow-hidden divide-y text-left text-white`}
    >
      <div className=''>
        <Disclosure as='div'>
          {({ open }) => (
            <>
              <div className='border-b p-4 space-y-4 lg:px-20'>
                <div className='max-w-screen-2xl mx-auto'>
                  <Disclosure.Button className='flex items-center justify-between w-full text-left'>
                    <div className='flex w-full flex-col py-12 space-y-4 '>
                      <h2 className='w-[80%] text-3xl font-medium text-white lg:text-5xl'>
                        Frequently asked
                        <span
                          className={`text-green-500`}
                        >
                          {' '} questions
                        </span>
                      </h2>
                      <p className='font-medium text-gray-400'>A Knowledge Treasure Trove</p>
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
                </div>
              </div>

              <Disclosure.Panel
                as='dd'
                className='animate-fade-slide-down text-pretty'
              >
                <dl className='divide-y-0 divide-white border-b-0 border-white'>
                  {faqData.map((faq) => (
                    <Disclosure as='div' key={faq.question}>
                      {({ open }) => (
                        <div className='border-b p-4 space-y-4 lg:px-20'>
                          <dt className='max-w-screen-2xl mx-auto'>
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
                            className='pr-12 mt-2 animate-fade-slide-down text-pretty max-w-screen-2xl mx-auto'
                          >
                            <p className='mr-8 text-base leading-7 text-gray-400'>
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section >
  )
}
