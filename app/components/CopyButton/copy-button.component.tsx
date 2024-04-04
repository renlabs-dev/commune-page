'use client'

import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type TCodeComponentProps = { code: string }

export const CopyButton = (props: TCodeComponentProps) => {
  const { code } = props
  const [copied, setCopied] = useState(false)

  async function copyTextToClipboard(text: string) {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  return (
    <button
      className={`h-8 rounded-md border-[1px] border-gray-700 px-2 text-xs text-gray-500 ${copied ? 'border-green-700 text-green-700' : 'hover:border-gray-400 hover:text-gray-200'}`}
      onClick={() => copyTextToClipboard(code)}
    >
      {!copied && <DocumentDuplicateIcon height={16} />}
      {copied && <DocumentDuplicateIcon height={16} color='text-green-500' />}
    </button>
  )
}
