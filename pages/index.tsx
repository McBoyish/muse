import Head from 'next/head';
import styles from '@/styles/muse.module.css';
import Navbar from '@/src/Navbar';
import Section from '@/src/Section';
import Banner1 from '@/src/Banner1';
import Slideshow from '@/src/Slideshow';
import Banner2 from '@/src/Banner2';
import About from '@/src/About';
import Services from '@/src/Services';
import Contact from '@/src/Contact';
import Careers from '@/src/Careers';
import useBreakPoints from '@/src/utils/responsive';
import SpinningLogo from '@/src/SpinningLogo';
import InstaLogo from '@/src/InstaLogo';
import TiktokLogo from '@/src/TiktokLogo';
import NavbarMenu from '@/src/NavbarMenu';
import { useState } from 'react';

export default function Home() {
  const { isMediumScreen } = useBreakPoints();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Muse</title>
      </Head>

      <div className={styles['container']}>
        <Navbar
          openMenu={() => {
            setVisible(true);
          }}
        />

        <NavbarMenu visible={visible} close={() => setVisible(false)} />

        <Banner1 />

        <Section text='SERVICES' />

        <Services />

        <text
          style={{
            fontFamily: 'Poppins',
            fontSize: 18,
            alignSelf: 'center',
            marginTop: 50,
            maxWidth: isMediumScreen ? 1440 : 300,
            textAlign: isMediumScreen ? 'left' : 'center',
          }}
        >
          Notes about the services provided by Muse Barbershop
        </text>

        <div
          style={{
            backgroundColor: 'black',
            height: 700,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 50,
          }}
        >
          <Section text='GALLERY' />
          <Slideshow />
        </div>

        <Banner2 />

        <About />

        <Section text={'CONTACT'} />

        <Contact />

        <Careers />

        <div
          style={{
            display: 'flex',
            flexDirection: isMediumScreen ? 'row' : 'column',
            paddingLeft: 100,
            paddingRight: 100,
            paddingTop: 50,
            paddingBottom: 50,
            textAlign: isMediumScreen ? 'left' : 'center',
            justifyContent: isMediumScreen ? 'space-between' : 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 300,
              alignItems: isMediumScreen ? 'flex-start' : 'center',
              alignSelf: isMediumScreen ? 'flex-start' : 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: isMediumScreen ? 'flex-start' : 'center',
              }}
            >
              <SpinningLogo />
              <text
                style={{
                  fontSize: 21,
                  fontFamily: 'Miller Display',
                  fontWeight: 'bold',
                  marginLeft: 15,
                }}
              >
                Muse Barbershop
              </text>
            </div>
            <text
              style={{ fontSize: 16, fontFamily: 'Poppins', marginTop: 10 }}
            >
              Our barbershop is a welcoming and relaxed environment where you
              can unwind and enjoy a personalized grooming experience.
            </text>
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                marginTop: 25,
              }}
            >
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  color: '#AF0202',
                }}
              >
                Follow us for more:
              </text>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 10,
                  alignSelf: isMediumScreen ? 'flex-start' : 'center',
                }}
              >
                <div>
                  <InstaLogo />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <TiktokLogo />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: isMediumScreen ? 'row' : 'column',
            }}
          >
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                marginTop: isMediumScreen ? 0 : 50,
                alignSelf: 'flex-start',
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'Miller Display',
                  textAlign: 'left',
                }}
              >
                SERVICES
              </text>
              <div
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 20 }}
                >
                  Haircut
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Haircut & Beard
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Line-up/Just beard
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Kids haircut
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Senior haircut
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Eyebrow Wax
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Cheeks wax
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Nose wax
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Ears wax
                </text>
              </div>
            </div>

            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
                marginTop: isMediumScreen ? 0 : 50,
                alignSelf: 'flex-start',
                marginLeft: isMediumScreen ? 50 : 0,
              }}
            >
              <text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  fontFamily: 'Miller Display',
                  textAlign: 'left',
                }}
              >
                RESOURCES
              </text>
              <div
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 20 }}
                >
                  Instagram
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Tiktok
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Videos
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  FAQ
                </text>
                <text
                  style={{ fontSize: 13, fontFamily: 'Poppins', marginTop: 10 }}
                >
                  Careers
                </text>
              </div>
            </div>
          </div>
        </div>

        {/* end of footer */}
        <div
          style={{
            backgroundColor: 'black',
            height: 80,
            display: 'flex',
            flexDirection: isMediumScreen ? 'row' : 'column-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMediumScreen ? 0 : 50,
            paddingLeft: 50,
            paddingRight: 50,
          }}
        >
          <text style={{ fontSize: 13, fontFamily: 'Poppins', color: 'white' }}>
            © 2023. Muse Barbershop. All Rights Reserved.
          </text>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <text
              style={{ fontSize: 13, fontFamily: 'Poppins', color: '#AF0202' }}
            >
              Privacy Policy
            </text>
            <text
              style={{
                fontSize: 13,
                fontFamily: 'Poppins',
                color: '#AF0202',
                marginLeft: 50,
              }}
            >
              Terms of Service
            </text>
          </div>
        </div>
      </div>
    </>
  );
}
