import { useState, useEffect } from 'react';
import Logo from './Logo';
import useBreakPoints from './utils/responsive';

export default function Banner2() {
  const { isMediumScreen } = useBreakPoints();

  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <div
      style={{
        flexDirection: mediumScreen ? 'row' : 'column-reverse',
        justifyContent: 'space-evenly',
        display: 'flex',
        alignItems: 'center',
        margin: mediumScreen ? 50 : 25,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <div
        style={{
          maxWidth: 750,
          textAlign: mediumScreen ? 'left' : 'center',
          marginTop: mediumScreen ? 0 : 50,
        }}
      >
        <text
          style={{
            fontSize: 52,
            fontFamily: 'Miller Display',
            fontWeight: 'bold',
          }}
        >
          Our goal is to provide exceptional grooming services and a
          personalized experience for every customer
        </text>
      </div>
      <div style={{ marginTop: mediumScreen ? 0 : 50 }}>
        <Logo />
      </div>
    </div>
  );
}
