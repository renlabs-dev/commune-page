import Link from "next/link";
import { tutorials } from "./tutorials";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";

export default async function Docs({ params }: { params: { slug: string } }) {
  const prefix = `/docs`

  const activeTutorial = tutorials.findIndex((tutorial) => tutorial.tutorialId === params.slug[0])
  const activeContent = tutorials[activeTutorial]?.contents.findIndex((content) => content.href === params.slug[1])

  const getPreviousContent = () => {
    if (tutorials[activeTutorial].contents[activeContent - 1]) return { id: tutorials[activeTutorial]?.tutorialId, content: tutorials[activeTutorial].contents[activeContent - 1] }
    if (activeTutorial > 0) {
      const contentLenght = tutorials[activeTutorial - 1]?.contents.length
      return { id: tutorials[activeTutorial - 1].tutorialId, content: tutorials[activeTutorial - 1]?.contents[contentLenght - 1] }
    }
    return false
  }

  const getNextContent = () => {
    if (tutorials[activeTutorial].contents[activeContent + 1]) return { id: tutorials[activeTutorial]?.tutorialId, content: tutorials[activeTutorial]?.contents[activeContent + 1] }
    if (tutorials[activeTutorial + 1]) {
      return { id: tutorials[activeTutorial + 1].tutorialId, content: tutorials[activeTutorial + 1].contents[0], }
    }
    return false
  }

  const previousContent = getPreviousContent()
  const nextContent = getNextContent()
  return (
    <>
      <section className={`w-full mx-auto`}>
        <div className="relative w-full overflow-hidden">
          <div
            className="fixed hidden md:w-[17rem] border-r border-gray-50/[0.06] min-w-max lg:block"
            aria-label='Global'
          >
            <div className="h-[calc(100vh-81px)] p-8 w-full mx-auto overflow-y-scroll">
              {tutorials.map((tutorial, index) => {
                return (
                  <div key={index}>
                    <span className="text-base font-medium text-white">{tutorial.title}</span>
                    <div className="my-3 ml-1">
                      {tutorial.contents.map((content, index) => {
                        return (
                          <Link key={index} href={`${prefix}/${tutorial.tutorialId}/${content.href}`}
                            className={`p-3 flex border-l items-center relative mt-0 border-gray-600/70 ${(params.slug[1] === content.href && params.slug[0] === tutorial.tutorialId) ? 'text-gray-200' : 'text-gray-500  hover:text-gray-300'}`}
                          >
                            {(params.slug[1] === content.href && params.slug[0] === tutorial.tutorialId) && <div className="absolute w-2 h-2 bg-gray-200 rounded-full -left-1" />}
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
          <div className="lg:pl-[19.5rem] flex flex-col items-center w-auto bg-gray-900 ">
            <div id="teste" className="h-[calc(100vh-81px)] pt-8 w-full items-center flex flex-col overflow-y-scroll">
              <div className="flex flex-col w-full max-w-[70%] prose prose-invert">
                {!!tutorials[activeTutorial].contents[activeContent] && tutorials[activeTutorial].contents[activeContent].component}
              </div>
              <div className="flex justify-between  w-full max-w-[70%] mt-20 mb-10 text-base">
                {!!previousContent &&
                  <Link className="flex flex-col items-start p-2 text-left text-gray-400 transition ease-in-out hover:border-gray-300 hover:text-gray-200 rounded-2xl" href={`${prefix}/${previousContent.id}/${previousContent.content.href}`}>
                    <span className="text-gray-300">
                      {previousContent.content.name}
                    </span>
                    <span className="flex text-xs">
                      <ArrowLongLeftIcon width={14} className="mr-2" />
                      Previous
                    </span>
                  </Link>
                }
                {!!nextContent &&
                  <Link className="flex flex-col items-end p-2 ml-auto text-gray-400 transition ease-in-out text-end hover:border-gray-300 hover:text-gray-200 rounded-2xl" href={`${prefix}/${nextContent.id}/${nextContent.content.href}`}>
                    <span className="text-gray-300">
                      {nextContent.content.name}
                    </span>
                    <span className="flex text-xs">
                      Next
                      <ArrowLongRightIcon width={14} className="ml-2" />
                    </span>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}