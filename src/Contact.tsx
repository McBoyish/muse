import { useEffect, useState } from 'react';
import useBreakPoints from './utils/responsive';

export default function Contact() {
  const { isMediumScreen, isLargeScreen } = useBreakPoints();
  const [mediumScreen, setMediumScreen] = useState(true);
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  useEffect(() => {
    setLargeScreen(isLargeScreen);
  }, [isLargeScreen]);

  return (
    <>
      <div
        id={'contact'}
        style={{
          display: 'flex',
          flexDirection: mediumScreen ? 'row' : 'column-reverse',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          justifyContent: 'space-around',
          marginLeft: mediumScreen ? 50 : 0,
          marginRight: mediumScreen ? 50 : 0,
          marginBottom: mediumScreen ? 50 : 0,
          marginTop: 50,
          padding: 20,
          alignItems: mediumScreen ? 'flex-start' : 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: 40 }}>
          {mediumScreen && (
            <text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'Miller Display',
                color: '#AF0202',
              }}
            >
              We are hiring!
            </text>
          )}
          {mediumScreen && (
            <text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'Miller Display',
                color: '#AF0202',
              }}
            >
              Get in touch.
            </text>
          )}
          <text
            style={{
              textDecoration: 'underline',
              marginTop: 15,
              fontSize: 16,
              fontFamily: 'Poppins',
            }}
          >
            6185 Taschereau Blvd., Brossard, Unit 119
          </text>
          <text
            style={{
              textDecoration: 'underline',
              marginTop: 15,
              fontSize: 16,
              fontFamily: 'Poppins',
            }}
          >
            {'514-575-MUSE (6873)'}
          </text>
          <text
            style={{
              textDecoration: 'underline',
              marginTop: 15,
              fontSize: 16,
              fontFamily: 'Poppins',
            }}
          >
            {'muse.brossard@gmail.com'}
          </text>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 50,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: largeScreen ? 'row' : 'column',
                backgroundColor: 'red',
              }}
            >
              <input
                type='text'
                placeholder='Name'
                style={{
                  flex: 1,
                  width: largeScreen ? '47.5%' : undefined,
                  height: 20,
                  backgroundColor: '#EAE9E7',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 0,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                }}
              />
              <div style={{ width: '5%' }} />
              <input
                type='email'
                placeholder='Email address'
                style={{
                  flex: 1,
                  width: largeScreen ? '47.5%' : undefined,
                  height: 20,
                  backgroundColor: '#EAE9E7',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 0,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  marginTop: largeScreen ? 0 : 15,
                }}
              />
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <textarea
                placeholder='Write your message here'
                rows={4}
                style={{
                  flex: 1,
                  backgroundColor: '#EAE9E7',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 0,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  marginTop: 15,
                }}
              />
            </div>
          </div>
          <button
            style={{
              width: largeScreen ? 235 : undefined,
              height: 50,
              borderRadius: 24,
              backgroundColor: '#AF0202',
              fontSize: 16,
              fontFamily: 'Poppins',
              borderWidth: 0,
              color: 'white',
              marginTop: 15,
            }}
          >
            Send
          </button>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <img
            src='/images/Mask_Group_14.png'
            style={{
              objectFit: 'cover',
              width: mediumScreen ? '100%' : 300,
              height: mediumScreen ? 500 : 300,
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 75,
          width: '75%',
          alignSelf: 'center',
          alignItems: mediumScreen ? undefined : 'center',
          marginBottom: 75,
        }}
      >
        <text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Miller Display',
            color: '#AF0202',
            alignSelf: 'center',
          }}
        >
          BUSINESS HOURS
        </text>
        <div
          style={{
            display: 'flex',
            flexDirection: mediumScreen ? 'row' : 'column',
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}
        >
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: '#AF0202',
              alignSelf: 'flex-start',
            }}
          >
            Tuesday - Wednesday
          </text>
          {mediumScreen && (
            <text>
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            </text>
          )}
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: 'black',
              alignSelf: 'flex-start',
            }}
          >
            11:00 am - 7:00 pm
          </text>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: mediumScreen ? 'row' : 'column',
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: '#AF0202',
            }}
          >
            Thursday - Friday
          </text>
          {mediumScreen && (
            <text>
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              .
            </text>
          )}
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: 'black',
              alignSelf: 'flex-start',
            }}
          >
            11:00 am - 8:00 pm
          </text>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: mediumScreen ? 'row' : 'column',
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: '#AF0202',
            }}
          >
            Saturday
          </text>
          {mediumScreen && (
            <text>
              . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
              . . . . . . . . .
            </text>
          )}
          <text
            style={{
              fontSize: 18,
              fontFamily: 'Miller Display',
              color: 'black',
              alignSelf: 'flex-start',
            }}
          >
            10:00 am - 6:00 pm
          </text>
        </div>
      </div>
    </>
  );
}
