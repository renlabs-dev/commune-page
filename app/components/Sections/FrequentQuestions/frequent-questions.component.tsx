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
                  <Disclosure.Button className='flex items-center justify-between w-full text-left '>
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

                    <span className='flex items-center py-4 border border-gray-500 bg-black/50 hover:bg-black/70'>
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
                <dl className='divide-y-0 divide-gray-500 border-b-0 border-gray-500'>
                  {faqData.map((faq) => (
                    <div key={faq.question}>
                      <div className='border-b p-4 space-y-4 lg:px-20' >
                        <dt className='max-w-screen-2xl mx-auto'>
                          {faq.question}
                        </dt>
                        <dd
                          className='pr-12 mt-2 animate-fade-slide-down text-pretty max-w-screen-2xl mx-auto'
                        >
                          <p className='mr-2 text-base leading-7 text-gray-400'>
                            {faq.answer}
                          </p>
                        </dd>
                      </div>
                    </div>
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
