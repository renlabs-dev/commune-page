'use client'
import { Disclosure } from '@headlessui/react'
import { covered_by_your_grace } from '@/app/fonts'
import { faqData } from '@/app/utils/sections-mock/frequent-questions'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export const FrequentQuestions = () => {
  return (
    <section
      className={`relative overflow-hidden bg-[#F9EFE4] px-10 py-16 text-left md:p-12`}
    >
      <div className='max-w-4xl mx-auto divide-y divide-white/10'>
        <h2 className='mb-10 text-2xl font-bold text-center text-title lg:mb-0 lg:text-4xl'>
          Frequently asked
          <span
            className={`${covered_by_your_grace.className} -ml-3 text-4xl font-normal text-[#FF6C6C] lg:text-5xl`}
          >
            {' '}
            questions
          </span>
        </h2>
        <dl className='mt-10 space-y-6 divide-y divide-white/10'>
          {faqData.map((faq) => (
            <Disclosure as='div' key={faq.question} className='pt-6'>
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className='flex items-start justify-between w-full text-left text-subtitle'>
                      <span className='text-base font-semibold leading-7'>
                        {faq.question}
                      </span>
                      <span className='flex items-center ml-6 h-7'>
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
                    className='pr-12 mt-2 animate-fade-slide-down text-pretty'
                  >
                    <p className='text-base leading-7 text-subtitle'>
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
