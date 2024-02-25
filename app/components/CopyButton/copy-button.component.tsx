'use client'

import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

type TCodeComponentProps = { code: string }

export const CopyButton = (props: TCodeComponentProps) => {
  const { code } = props
  const [copied, setCopied] = useState(false)

  async function copyTextToClipboard(text: string) {
    setCopied(true)
    setTimeout(() => { setCopied(false) }, 1000)

    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  return (
    <button className={`ml-auto border-gray-700 text-gray-500 text-xs rounded-md border-[1px] px-2 h-8 ${copied ? 'text-green-700 border-green-700' : 'hover:text-gray-200 hover:border-gray-400'}`} onClick={() => copyTextToClipboard(code)}>
      {!copied && <DocumentDuplicateIcon height={18} />}
      {copied && <span className="text-green-600" >Copied</span>}
    </button>
  )
}