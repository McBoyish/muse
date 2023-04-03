import { useState, useEffect } from 'react';
import useBreakPoints from './utils/responsive';

export default function Banner1() {
  const { isMediumScreen } = useBreakPoints();

  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <div
      style={{
        position: 'relative',
        height: 600,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src='images/Mask_Group_1.png'
        style={{
          width: '100%',
          height: 600,
          position: 'relative',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: mediumScreen ? 100 : undefined,
          top: mediumScreen ? '10%' : 50,
          width: mediumScreen ? 665 : 320,
          textAlign: mediumScreen ? 'left' : 'center',
          alignItems: mediumScreen ? 'flex-start' : 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <text
          style={{
            fontSize: 68,
            color: 'white',
            width: mediumScreen ? 665 : 350,
          }}
        >
          Experience the Art of grooming at Muse Barbershop
        </text>
        <div
          style={{
            height: 40,
            width: 185,
            backgroundColor: '#af0202',
            borderRadius: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
        >
          <a
            href='#'
            style={{ fontSize: 14, textDecoration: 'none', color: 'white' }}
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}
