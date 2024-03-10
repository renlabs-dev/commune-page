export const runtime = 'edge'
import Link from 'next/link'
import { tutorials } from './tutorials'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  Bars3Icon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'

export default async function Docs({ params }: { params: { slug: string } }) {
  const prefix = `/docs`

  const activeTutorial = tutorials.findIndex(
    (tutorial) => tutorial.tutorialId === params.slug[0]
  )
  const activeContent = tutorials[activeTutorial]?.contents.findIndex(
    (content) => content.href === params.slug[1]
  )

  const getPreviousContent = () => {
    if (tutorials[activeTutorial].contents[activeContent - 1])
      return {
        id: tutorials[activeTutorial]?.tutorialId,
        content: tutorials[activeTutorial].contents[activeContent - 1],
      }
    if (activeTutorial > 0) {
      const contentLenght = tutorials[activeTutorial - 1]?.contents.length
      return {
        id: tutorials[activeTutorial - 1].tutorialId,
        content: tutorials[activeTutorial - 1]?.contents[contentLenght - 1],
      }
    }
    return false
  }

  const getNextContent = () => {
    if (tutorials[activeTutorial].contents[activeContent + 1])
      return {
        id: tutorials[activeTutorial]?.tutorialId,
        content: tutorials[activeTutorial]?.contents[activeContent + 1],
      }
    if (tutorials[activeTutorial + 1]) {
      return {
        id: tutorials[activeTutorial + 1].tutorialId,
        content: tutorials[activeTutorial + 1].contents[0],
      }
    }
    return false
  }

  const previousContent = getPreviousContent()
  const nextContent = getNextContent()
  return (
    <>
      <section className={`mx-auto w-full h-max`}>
        <div className='relative w-full overflow-hidden'>
          <div
            className='fixed hidden min-w-max border-r border-gray-50/[0.06] md:w-[17rem] lg:block'
            aria-label='Global'
          >
            <div className='mx-auto h-[calc(100vh-81px)] w-full overflow-y-scroll p-8'>
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
          <div className='lg:hidden w-full sticky top-0 z-[100] text-gray-400 text-sm flex items-center pl-6 h-12 bg-transparent border-b border-gray-50/[0.06]'>
            <div className='mr-6 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100/10 text-white p-1.5 hover:bg-gray-100/[0.15]'>
              <Bars3Icon width={16} />
            </div>
            <span className='font-light mr-2'>
              {tutorials[activeTutorial].title}
            </span>
            <ChevronRightIcon width={16} />
            <span className='font-semibold ml-2 text-white'>
              {tutorials[activeTutorial].contents[activeContent].name}
            </span>
          </div>
          <div
            className='flex h-[calc(100svh-129px)] w-full flex-col items-center overflow-y-scroll lg:pl-[19.5rem] pt-12'
          >
            <div className='prose prose-invert flex w-full max-w-[70%] flex-col'>
              {!!tutorials[activeTutorial].contents[activeContent] &&
                tutorials[activeTutorial].contents[activeContent].component}
            </div>
            <div className='mb-10 mt-20  flex w-full max-w-[70%] justify-between text-base'>
              {!!previousContent && (
                <Link
                  className='flex flex-col items-start rounded-2xl p-2 text-left text-gray-400 transition ease-in-out hover:border-gray-300 hover:text-gray-200'
                  href={`${prefix}/${previousContent.id}/${previousContent.content.href}`}
                >
                  <span className='text-gray-300'>
                    {previousContent.content.name}
                  </span>
                  <span className='flex text-xs'>
                    <ArrowLongLeftIcon width={14} className='mr-2' />
                    Previous
                  </span>
                </Link>
              )}
              {!!nextContent && (
                <Link
                  className='ml-auto flex flex-col items-end rounded-2xl p-2 text-end text-gray-400 transition ease-in-out hover:border-gray-300 hover:text-gray-200'
                  href={`${prefix}/${nextContent.id}/${nextContent.content.href}`}
                >
                  <span className='text-gray-300'>
                    {nextContent.content.name}
                  </span>
                  <span className='flex text-xs'>
                    Next
                    <ArrowLongRightIcon width={14} className='ml-2' />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
