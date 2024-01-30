import Link from 'next/link'

export const DocsCTA = async () => {
  return (
    <Link
      href='https://www.communeai.org/docs/introduction'
      target='_blank'
      className='text-md font-base mt-8 flex items-center justify-center p-6 leading-6 text-blue-300 hover:animate-scale-up-sm hover:text-blue-400 '
    >
      <span>Go to Docs →</span>
    </Link>
  )
}
