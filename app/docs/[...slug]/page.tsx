export const runtime = 'edge'
import Link from 'next/link'
import { tutorials } from './tutorials'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid'
import { DocSidebar } from '@/app/components/DocSidebar'

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
      <section className={`mx-auto h-max w-full`}>
        <DocSidebar
          params={params}
          activeTutorial={activeTutorial}
          activeContent={activeContent}
          prefix={prefix}
        />
        <div className='flex h-[calc(100svh-129px)] w-full flex-col items-center overflow-y-scroll pt-12 lg:h-[calc(100svh-81px)] lg:pl-[19.5rem]'>
          <div className='prose flex w-full max-w-[100%] flex-col px-8 text-subtitle sm:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]'>
            {!!tutorials[activeTutorial].contents[activeContent] &&
              tutorials[activeTutorial].contents[activeContent].component}
          </div>
          <div className='mb-10 mt-20 flex w-full max-w-[100%] justify-between px-6 text-base sm:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[60%]'>
            {!!previousContent && (
              <Link
                className='flex flex-col items-start rounded-2xl p-2 text-left text-gray-400 transition ease-in-out hover:border-gray-300 hover:text-gray-200'
                href={`${prefix}/${previousContent.id}/${previousContent.content.href}`}
              >
                <span className='text-subtitle'>
                  {previousContent.content.name}
                </span>
                <span className='flex text-xs text-title'>
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
                <span className='text-subtitle'>
                  {nextContent.content.name}
                </span>
                <span className='flex text-xs text-title'>
                  Next
                  <ArrowLongRightIcon width={14} className='ml-2' />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
