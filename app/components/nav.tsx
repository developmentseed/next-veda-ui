import Link from 'next/link'
import { PageHeader, Logo } from 'app/lib'

const navItems = [ // @TODO: This should use the NavLinkType from veda-ui...
  {
    title: 'home',
    to: '/',
    type: 'internalLink'
  },
  {
    title: 'datasets',
    to: '/datasets',
    type: 'internalLink'
  },
  {
    title: 'stories',
    to: '/stories',
    type: 'internalLink'
  }
]


export function Navbar() {
  const linkProps = {
    LinkElement: Link,
    pathAttributeKeyName: 'href'
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
          <PageHeader mainNavItems={navItems} subNavItems={[]} logo={<Logo linkProperties={linkProps} />} linkProperties={linkProps} />
          </div>
        </nav>
      </div>
    </aside>
  )
}
