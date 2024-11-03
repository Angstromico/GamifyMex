import { type ReactNode } from 'react'
type Props = {
  children: ReactNode
}

const HeaderLink = ({ children }: Props) => {
  return (
    <a className='block xl:ml-8' href='/'>
      {children}
    </a>
  )
}
export default HeaderLink
