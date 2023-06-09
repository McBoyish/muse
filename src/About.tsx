import { useState, useEffect } from 'react';
import useBreakPoints from './utils/responsive';

export default function About() {
  const { isMediumScreen } = useBreakPoints();

  const [mediumScreen, setMediumScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: mediumScreen ? 'row' : 'column-reverse',
        justifyContent: 'space-evenly',
        backgroundColor: '#EAE9E7',
        alignItems: 'center',
        padding: 50,
      }}
      id='about'
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: mediumScreen ? 500 : '90%',
          paddingRight: 25,
          textAlign: mediumScreen ? 'left' : 'center',
        }}
      >
        <text
          style={{
            fontSize: 38,
            fontFamily: 'Miller Banner',
            fontWeight: 'bold',
          }}
        >
          About
        </text>
        <text style={{ fontSize: 17, fontFamily: 'Poppins', marginTop: 50 }}>
          MUSE barbershop is the brainchild of Danish Naveed. With a passion for
          grooming and fashion, he decided to open a barbershop that would cater
          to men who wanted a unique and personalized experience. The name
          "MUSE" was chosen to reflect his belief that grooming is an art form
          and each client is their muse. The shop has sleek, modern design with
          a warm and inviting atmosphere. MUSE Barbershop is on its way to
          becoming a favourite place for men who want to look and feel their
          best.
        </text>
      </div>
      <div style={{ marginBottom: mediumScreen ? 0 : 50 }}>
        <img
          src={'/images/Mask_Group_16.png'}
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
