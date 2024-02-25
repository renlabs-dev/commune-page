import type { MDXComponents } from 'mdx/types'
import { CopyButton } from './app/components/CopyButton'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: (props) => (
    //   <h1
    //     {...props}
    //     style={{ fontSize: '2.441rem', lineHeight: '2.25rem', fontWeight: 600, margin: '1.5rem 0' }}
    //   >
    //     {props.children}
    //     {/* <a
    //       aria-label={`Link to this section: ${props.children}`}
    //       href={`#${props.id}`}
    //     >
    //       #
    //     </a> */}
    //   </h1>
    // ),
    // h2: (props) => (
    //   <h2
    //     {...props}
    //     style={{ fontSize: '1.953rem', lineHeight: '2.25rem', fontWeight: 500, margin: '1.5rem 0' }}
    //   >
    //     {props.children}
    //   </h2>
    // ),
    // h3: (props) => (
    //   <h3
    //     {...props}
    //     style={{ fontSize: '1.563rem', lineHeight: '1.563rem', fontWeight: 400, margin: '1.563rem 0' }}
    //   >
    //     {props.children}
    //   </h3>
    // ),
    // p: (props) => (
    //   <p
    //     {...props}
    //     style={{ fontSize: '1rem', margin: '1rem 0' }}
    //   >
    //     {props.children}
    //   </p>
    // ),
    code: (props) => (
      //   <div style={{ display: 'inline-block', borderRadius: 10, minWidth: '100%' }}>
      //     <div style={{ display: 'flex', padding: '16px', backgroundColor: '#0D0F14', borderRadius: '0px 10px 0px 0px' }}>
      //       <div style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#FF5F56', borderRadius: '100%', marginRight: 8 }} />
      //       <div style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#FFBD2D', borderRadius: '100%', marginRight: 8 }} />
      //       <div style={{ width: '0.8rem', height: '0.8rem', backgroundColor: '#26C940', borderRadius: '100%', marginRight: 8 }} />
      //     </div>
      //     <div
      //       style={{ width: '100%', backgroundColor: '#22212C', display: 'inline-flex', padding: '16px', borderRadius: '0px 0px 10px 0px' }}
      //     >
      <div className='flex items-center'>
        <div className='ml-20'>
          <code
            {...props}
          >
            {props.children}
          </code>
        </div>
        <CopyButton code={props.children as string} />
      </div>


      //     </div>
      //   </div>
      // </div>
    ),
    // a: (props) => (
    //   <a
    //     {...props}
    //     style={{ color: '#93c4fd' }}
    //   >
    //     {props.children}
    //   </a>
    // ),
    ...components,
  }
}