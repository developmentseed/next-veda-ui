
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

import { EnhancedBlock, Prose, EnhancedCaption, EnhancedFigure} from './mdx-components/block'
import { grabDatasets } from 'app/store/provider'
// import { grabDatasets } from '../store/provider';

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}




function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

// let components = {
//   h1: createHeading(1),
//   h2: createHeading(2),
//   h3: createHeading(3),
//   h4: createHeading(4),
//   h5: createHeading(5),
//   h6: createHeading(6),
//   code: Code,
//   Table,
//   Block: EnhancedBlock,
//
export function CustomMDX(props) {
  /**
   * @EXPERIMENT-NOTE: 
   * We could do something like this for BlockMap
   * Can use server-only-context to grabDatasets here because this is a direct child component of
   * where datasets was initialized in "app/datasets/[slug]/page"
   */
  const datasets = grabDatasets();

  let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    code: Code,
    Table,
    // Block: EnhancedBlock,
    Block: (props) => (<EnhancedBlock {...props} datasets={datasets}/>),
    Prose: Prose,
    Caption: EnhancedCaption,
    Figure: EnhancedFigure
    // BlockMap: BlockMap // @EXPERIMENT-NOTE: Currently depends on datasets from veda virtual modules and takes in datasetId as a prop
  }

  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
