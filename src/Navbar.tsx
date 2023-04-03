import styles from '@/styles/navbar.module.css';
import NavbarMenu from './NavbarMenuLogo';
import useBreakPoints from './utils/responsive';

interface NavbarProps {
  openMenu: () => void;
}

export default function Navbar({ openMenu }: NavbarProps) {
  const { isMediumScreen } = useBreakPoints();
  return (
    <div className={styles['nav-container']}>
      {isMediumScreen && (
        <div className={styles['nav-left']}>
          <a href='#about' className={styles['nav-left-anchor']}>
            ABOUT
          </a>
          <a href='#services' className={styles['nav-left-anchor']}>
            SERVICES
          </a>
          <a href='#contact' className={styles['nav-left-anchor']}>
            CONTACT
          </a>
          <a href='#careers' className={styles['nav-left-anchor']}>
            CAREER
          </a>
        </div>
      )}
      <div>
        <svg
          id='Logo'
          xmlns='http://www.w3.org/2000/svg'
          width='42.628'
          height='42.628'
          viewBox='0 0 42.628 42.628'
        >
          <path
            id='Path_65'
            data-name='Path 65'
            d='M162.773,0V15.5H151.148V0h-3.875V19.376h19.376V0Z'
            transform='translate(-124.021)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_126'
            data-name='Rectangle 126'
            width='3.875'
            height='19.376'
            transform='translate(0)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_127'
            data-name='Rectangle 127'
            width='3.875'
            height='19.376'
            transform='translate(7.75)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_128'
            data-name='Rectangle 128'
            width='3.875'
            height='19.376'
            transform='translate(15.501)'
            fill='#af0202'
          />
          <path
            id='Path_66'
            data-name='Path 66'
            d='M3.875,147.272H0V158.9H15.5v3.875H0v3.875H19.376V155.023H3.875v-3.875h15.5v-3.875Z'
            transform='translate(0 -124.021)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_129'
            data-name='Rectangle 129'
            width='19.376'
            height='3.875'
            transform='translate(23.251 38.752)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_130'
            data-name='Rectangle 130'
            width='19.376'
            height='3.875'
            transform='translate(23.251 31.002)'
            fill='#af0202'
          />
          <rect
            id='Rectangle_131'
            data-name='Rectangle 131'
            width='19.376'
            height='3.875'
            transform='translate(23.251 23.251)'
            fill='#af0202'
          />
        </svg>
      </div>

      {isMediumScreen && (
        <div className={styles['nav-right']}>
          <div className={styles['nav-right-book-now-container']}>
            <a href='#' className={styles['nav-right-book-now']}>
              BOOK NOW
            </a>
          </div>
        </div>
      )}

      {!isMediumScreen && (
        <div onClick={openMenu}>
          <NavbarMenu />
        </div>
      )}
    </div>
  );
}
