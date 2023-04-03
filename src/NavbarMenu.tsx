import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface NavbarMenuProps {
  visible: boolean;
  close: () => void;
}

export default function NavbarMenu({ visible, close }: NavbarMenuProps) {
  if (!visible) return null;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 50,
        position: 'relative',
        backgroundColor: '#EAE9E7',
      }}
    >
      <div style={{ position: 'absolute', right: 20, top: 20 }} onClick={close}>
        <AiOutlineCloseCircle color={'#AF0202'} size={40} />
      </div>
      <a
        onClick={close}
        href='#about'
        style={{
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'Miller Display',
          fontWeight: 'bold',
          marginTop: 75,
        }}
      >
        ABOUT
      </a>
      <a
        onClick={close}
        href='#contact'
        style={{
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'Miller Display',
          fontWeight: 'bold',
          marginTop: 75,
        }}
      >
        CONTACT
      </a>
      <a
        onClick={close}
        href='#services'
        style={{
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'Miller Display',
          fontWeight: 'bold',
          marginTop: 75,
        }}
      >
        SERVICES
      </a>
      <a
        onClick={close}
        href='#careers'
        style={{
          textDecoration: 'none',
          fontSize: 18,
          fontFamily: 'Miller Display',
          fontWeight: 'bold',
          marginTop: 75,
        }}
      >
        CAREER
      </a>
      <div style={{ marginTop: 150 }}>
        <svg
          id='Component_107_1'
          data-name='Component 107 – 1'
          xmlns='http://www.w3.org/2000/svg'
          width='43.165'
          height='43.165'
          viewBox='0 0 43.165 43.165'
        >
          <path
            id='Path_1871'
            data-name='Path 1871'
            d='M-1212.116,504.574v15.7h-11.772v-15.7h-3.924v19.62h19.62v-19.62Z'
            transform='translate(1251.357 -504.574)'
          />
          <rect
            id='Rectangle_1617'
            data-name='Rectangle 1617'
            width='3.924'
            height='19.62'
          />
          <rect
            id='Rectangle_1618'
            data-name='Rectangle 1618'
            width='3.924'
            height='19.62'
            transform='translate(7.848)'
          />
          <rect
            id='Rectangle_1619'
            data-name='Rectangle 1619'
            width='3.924'
            height='19.62'
            transform='translate(15.696)'
          />
          <path
            id='Path_1872'
            data-name='Path 1872'
            d='M-1280.952,557.713v11.772h15.7v3.924h-15.7v3.924h19.62V565.561h-15.7v-3.924h15.7v-3.924h-19.62Z'
            transform='translate(1280.952 -534.168)'
          />
          <rect
            id='Rectangle_1620'
            data-name='Rectangle 1620'
            width='19.62'
            height='3.924'
            transform='translate(23.544 39.241)'
          />
          <rect
            id='Rectangle_1621'
            data-name='Rectangle 1621'
            width='19.62'
            height='3.924'
            transform='translate(23.544 31.393)'
          />
          <rect
            id='Rectangle_1622'
            data-name='Rectangle 1622'
            width='19.62'
            height='3.924'
            transform='translate(23.544 23.544)'
          />
        </svg>
      </div>
    </div>
  );
}
