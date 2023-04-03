import Logo from './Logo';
import useBreakPoints from './utils/responsive';

export default function Banner2() {
  const { isMediumScreen } = useBreakPoints();
  return (
    <div
      style={{
        flexDirection: isMediumScreen ? 'row' : 'column-reverse',
        justifyContent: 'space-evenly',
        display: 'flex',
        alignItems: 'center',
        margin: isMediumScreen ? 50 : 25,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <div
        style={{
          maxWidth: 750,
          textAlign: isMediumScreen ? 'left' : 'center',
          marginTop: isMediumScreen ? 0 : 50,
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
      <div style={{ marginTop: isMediumScreen ? 0 : 50 }}>
        <Logo />
      </div>
    </div>
  );
}
