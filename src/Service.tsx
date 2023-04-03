import React from 'react';

interface ServiceProps {
  icon: string;
  iconAlt: string;
  price: string;
  type: string;
  ageRange: string;
  description?: string;
  note?: string;
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
      <img
        src={icon}
        alt={iconAlt}
        style={{
          width: 40,
          height: 50,
          marginTop: 30,
        }}
      />
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
