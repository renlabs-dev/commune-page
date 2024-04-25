import Link from 'next/link'

export function StartCards() {
  function Card({
    title,
    description,
    link,
  }: {
    title: string
    description: string
    link: string
  }) {
    return (
      <div className='flex flex-col justify-between rounded-xl border border-title px-6 pb-6 shadow-custom dark:border-white dark:shadow-custom-dark md:w-1/2'>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          href={link}
          className='text-sm font-bold no-underline hover:underline'
        >
          View More
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <Card
        title='Install'
        description='Set up your commune and wallet to start participating in the network.'
        link='/docs/installation/setup-commune'
      />
      <Card
        title='Learn the Concepts'
        description='Understand the basics of the network, weight system, governance, and more.'
        link='/docs/concepts/basics'
      />
    </div>
  )
}
