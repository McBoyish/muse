import { useState, useEffect } from 'react';
import useBreakPoints from './utils/responsive';

export default function Careers() {
  const { isMediumScreen } = useBreakPoints();

  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <div
      id='careers'
      style={{
        display: 'flex',
        flexDirection: mediumScreen ? 'row' : 'column-reverse',
        justifyContent: 'space-evenly',
        backgroundColor: '#EAE9E7',
        alignItems: 'center',
        padding: 50,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: mediumScreen ? 500 : 300,
          paddingRight: mediumScreen ? 25 : 0,
          textAlign: mediumScreen ? 'left' : 'center',
          alignItems: mediumScreen ? 'flex-start' : 'center',
        }}
      >
        <text
          style={{
            fontSize: 38,
            fontFamily: 'Miller Banner',
            fontWeight: 'bold',
          }}
        >
          Careers
        </text>
        <div style={{ marginTop: 50 }}>
          <text style={{ fontSize: 17, fontFamily: 'Poppins' }}>
            Join the MUSE Barbershop team! We're seeking skilled barbers who
            share our passion for grooming and delivering exceptional customer
            service. Grow your career with ongoing training and development
            opportunities. Let's raise the bar for men's grooming together.{' '}
          </text>
          <text
            style={{ fontSize: 17, fontFamily: 'Poppins', color: '#AF0202' }}
          >
            Apply now!
          </text>
        </div>
        <button
          style={{
            width: 140,
            height: 35,
            borderRadius: 24,
            backgroundColor: '#AF0202',
            fontSize: 16,
            fontFamily: 'Poppins',
            borderWidth: 0,
            color: 'white',
            marginTop: 35,
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
      <div style={{ marginBottom: mediumScreen ? 0 : 50 }}>
        <img
          src={'/images/Mask_Group_20.png'}
          style={{
            objectFit: 'cover',
            width: mediumScreen ? '100%' : 300,
            height: mediumScreen ? '100%' : 300,
          }}
        />
      </div>
    </div>
  );
}
