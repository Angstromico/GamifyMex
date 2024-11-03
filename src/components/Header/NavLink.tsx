interface Props {
  title: string
  url?: string
  onlyMobile?: boolean
  currentPath?: string
  handleClick?: () => void
  isTitle?: boolean
}

const NavLink = ({
  title,
  url,
  onlyMobile,
  currentPath,
  handleClick,
  isTitle,
}: Props) => {
  const active = currentPath === url

  return (
    <li onClick={handleClick} style={{ listStyleType: 'none' }}>
      {/* Render link if there's a URL and not a title-only display */}
      {url && !isTitle && (
        <a
          className={`block font-code relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 p-6 md:py-8 ${
            onlyMobile ? 'lg:hidden' : ''
          } lg:text-xs lg:font-semibold ${
            active ? 'z-20 lg:text-n-1' : 'lg:text-n-1/50'
          } lg:leading-5 lg:hover:text-1-n xl:px-12`}
          href={url}
        >
          {title}
        </a>
      )}

      {/* Render button if no URL and not a title-only display */}
      {!url && !isTitle && (
        <button
          className={`block font-code relative text-2xl uppercase text-red-600 transition-colors hover:text-red-800 p-6 md:py-8 ${
            onlyMobile ? 'lg:hidden' : ''
          } lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-1-n xl:px-12`}
        >
          {title}
        </button>
      )}

      {/* Render heading if `isTitle` is true */}
      {isTitle && (
        <h4
          className={`h4 block font-block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 p-6 md:py-8 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-1-n xl:px-12 text-center`}
        >
          {title}
        </h4>
      )}
    </li>
  )
}

export default NavLink
