'use client'
import { Disclosure } from '@headlessui/react'
import { GradientLayer } from '../..'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const FrequentQuestions = () => {
  return (
    <section
      className={` relative m-6 w-11/12 max-w-screen-xl overflow-hidden rounded-3xl bg-gray-600/20 px-10 py-16 text-left shadow-2xl md:p-12 lg:m-8 lg:p-24`}
    >
      <GradientLayer
        gradientColor='from-blue-400 via-blue-200'
        wrapperOverwriteStyle='lg:top-'
      />

      <div className='mx-auto max-w-4xl divide-y divide-white/10'>
        <h2 className='text-2xl font-bold leading-10 tracking-tight text-white'>
          Frequently asked questions
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-white/10'>
          {faqData.map((faq) => (
            <Disclosure as='div' key={faq.question} className='pt-6'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex w-full items-start justify-between text-left text-white'>
                      <span className='text-base font-semibold leading-7'>
                        {faq.question}
                      </span>
                      <span className='ml-6 flex h-7 items-center'>
                        <ChevronRightIcon
                          className={
                            open
                              ? 'h-4 rotate-90 transform animate-open-accordion'
                              : 'h-4 rotate-0 transform animate-close-accordion'
                          }
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as='dd'
                    className='mt-2 animate-fade-slide-down text-pretty pr-12'
                  >
                    <p className='text-base leading-7 text-gray-300'>
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  )
}
