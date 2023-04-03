import React from 'react';
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
} from './Logos';

interface ServiceProps {
  icon: string;
  iconAlt: string;
  price: string;
  type: string;
  ageRange: string;
  description?: string;
  note?: string;
}

function Icon({ icon }: { icon: string }) {
  switch (icon) {
    case '1':
      return <Logo1 />;
    case '2':
      return <Logo2 />;
    case '3':
      return <Logo3 />;
    case '4':
      return <Logo4 />;
    case '5':
      return <Logo5 />;
    case '6':
      return <Logo6 />;
    case '7':
      return <Logo7 />;
    case '8':
      return <Logo8 />;
    default:
      return null;
  }
}

export default function Service({
  icon,
  iconAlt,
  price,
  type,
  ageRange,
  description,
  note,
}: ServiceProps) {
  return (
    <div
      style={{
        width: 280,
        height: 310,
        borderWidth: 6,
        borderStyle: 'solid',
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        margin: 20,
      }}
    >
      <div style={{ marginTop: 30, width: 40, height: 50 }}>
        <Icon icon={icon} />
      </div>
      <div
        style={{
          width: 112,
          height: 44,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          marginTop: 20,
        }}
      >
        <text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 2,
            fontFamily: 'Arial',
          }}
        >
          $
        </text>
        <text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            lineHeight: 1,
            fontFamily: 'Arial',
          }}
        >
          {price}
        </text>
      </div>
      <div
        style={{
          width: 220,
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
            }}
          >
            {type}
          </text>
          <text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins',
            }}
          >
            {ageRange}
          </text>
        </div>
        <hr style={{ borderStyle: 'solid', color: 'gray', width: '100%' }} />
        <text
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 10,
            fontFamily: 'Poppins',
          }}
        >
          {description}
        </text>
        {note && (
          <text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 10,
              fontFamily: 'Poppins',
              color: '#AF0202',
            }}
          >
            {note}
          </text>
        )}
        <div
          style={{
            width: 190,
            height: 35,
            borderRadius: 18,
            backgroundColor: '#af0202',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
          }}
        >
          <a
            href='#'
            style={{
              fontSize: 13,
              color: 'white',
              textDecoration: 'none',
            }}
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}
