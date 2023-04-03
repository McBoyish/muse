import useBreakPoints from './utils/responsive';

export default function Contact() {
  const { isMediumScreen } = useBreakPoints();
  return (
    <>
      <div
        id={'contact'}
        style={{
          display: 'flex',
          flexDirection: isMediumScreen ? 'row' : 'column-reverse',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          justifyContent: 'space-between',
          marginTop: 50,
          margin: 50,
          padding: 20,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: 40 }}>
          {isMediumScreen && (
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
          {isMediumScreen && (
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
                flexDirection: isMediumScreen ? 'row' : 'column',
              }}
            >
              <input
                type='text'
                placeholder='Name'
                style={{
                  width: isMediumScreen ? 195 : 250,
                  height: 20,
                  backgroundColor: '#EAE9E7',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 0,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                }}
              />
              <div style={{ width: 10 }} />
              <input
                type='email'
                placeholder='Email address'
                style={{
                  width: isMediumScreen ? 195 : 250,
                  height: 20,
                  backgroundColor: '#EAE9E7',
                  borderRadius: 5,
                  padding: 10,
                  borderWidth: 0,
                  fontSize: 16,
                  fontFamily: 'Poppins',
                  marginTop: isMediumScreen ? 0 : 15,
                }}
              />
            </div>
            <textarea
              placeholder='Write your message here'
              rows={4}
              style={{
                width: isMediumScreen ? 420 : 250,
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
          <button
            style={{
              width: isMediumScreen ? 235 : 270,
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
        <img src='/images/Mask_Group_14.png' style={{ overflow: 'hidden' }} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 75,
          width: '75%',
          alignSelf: 'center',
          alignItems: isMediumScreen ? undefined : 'center',
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
            flexDirection: isMediumScreen ? 'row' : 'column',
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
            Tuesday - Wenesday
          </text>
          {isMediumScreen && (
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
            flexDirection: isMediumScreen ? 'row' : 'column',
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
          {isMediumScreen && (
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
            flexDirection: isMediumScreen ? 'row' : 'column',
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
          {isMediumScreen && (
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
