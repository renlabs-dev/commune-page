"use client"
import { tutorials } from "@/app/docs/[...slug]/tutorials"
import { Bars3Icon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useState } from "react"

type TDocSidebarProps = {
  prefix: string
  activeTutorial: number
  activeContent: number
  params: { slug: string }
}

export const DocSidebar = (props: TDocSidebarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const commonButtonClass = 'flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100/10 text-white p-1.5 hover:bg-gray-100/[0.15]'

  const { params, activeTutorial, activeContent, prefix } = props;
  return (
    <>
      <div
        className={`fixed w-full backdrop-blur-sm z-[70] animate-menu-fade lg:w-[17rem] lg:backdrop-blur-none h-[calc(100svh-81px)] ${mobileMenuOpen ? 'visible' : 'hidden'} lg:block`}
        onClick={toggleMobileMenu}
        aria-label='Global'
      >
        <div className='bg-gray-900 relative w-4/6 sm:min-w-2/6 sm:w-3/6 md:w-2/6 lg:mx-auto h-full lg:w-full overflow-y-scroll p-8 border-r border-gray-50/[0.06]' >
          <button type='button' className={`${commonButtonClass} h-8 w-8 rounded-lg absolute right-0 top-0 m-5 lg:hidden`} onClick={toggleMobileMenu} >
            <span className='sr-only'>Close menu</span>
            <ChevronLeftIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          {tutorials.map((tutorial, index) => {
            return (
              <div key={index}>
                <span className='text-base font-medium text-white'>
                  {tutorial.title}
                </span>
                <div className='my-3 ml-1'>
                  {tutorial.contents.map((content, index) => {
                    return (
                      <Link
                        key={index}
                        href={`${prefix}/${tutorial.tutorialId}/${content.href}`}
                        className={`relative mt-0 flex items-center border-l border-gray-600/70 p-3 ${params.slug[1] === content.href && params.slug[0] === tutorial.tutorialId ? 'text-gray-200' : 'text-gray-500  hover:text-gray-300'}`}
                      >
                        {params.slug[1] === content.href &&
                          params.slug[0] === tutorial.tutorialId && (
                            <div className='absolute -left-1 h-2 w-2 rounded-full bg-gray-200' />
                          )}
                        <span>{content.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='relative w-full overflow-hidden'>
        <div className='lg:hidden w-full sticky top-0 z-[60] text-gray-400 text-sm flex items-center pl-6 h-12 bg-transparent border-b border-gray-50/[0.06]'>
          <button className={`${commonButtonClass} mr-6 h-8 w-8 rounded-lg`} onClick={toggleMobileMenu}>
            <Bars3Icon width={16} />
          </button>
          <span className='font-light mr-2'>
            {tutorials[activeTutorial].title}
          </span>
          <ChevronRightIcon width={16} />
          <span className='font-semibold ml-2 text-white'>
            {tutorials[activeTutorial].contents[activeContent].name}
          </span>
        </div>
      </div>
    </>)
}