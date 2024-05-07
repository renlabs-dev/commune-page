'use client'
import { Disclosure } from '@headlessui/react'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import Image from 'next/image'

export const FrequentQuestions = () => {
  return (
    <section
      className={`relative overflow-hidden divide-y text-left text-white`}
    >
      <div className='px-20 py-12 space-y-2'>
        <h2 className=' text-5xl font-medium text-white'>
          Frequently asked
          <span
            className={`text-green-500`}
          >
            {' '} questions
          </span>
        </h2>
        <p className='text-gray-400 font-medium'>A Knowledge Treasure Trove</p>
      </div>

      <div className=''>
        <dl className='divide-y divide-white'>
          {faqData.map((faq) => (
            <Disclosure as='div' key={faq.question} className='px-20 py-6 space-y-2'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex w-full items-center justify-between text-left'>
                      <div>
                        <span className='text-base font-semibold leading-7 text-white mr-8'>
                          {faq.question}
                        </span>
                      </div>
                      <span className='flex items-center border border-white py-4'>
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
                    <p className='text-base leading-7 text-gray-400 mr-8'>
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
