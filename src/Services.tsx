import Service from '@/src/Service';

export default function Services() {
  return (
    <div
      id='services'
      style={{
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
        maxWidth: 1440,
        marginTop: 50,
      }}
    >
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'30.00'}
        type={'Haircut'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'40.00'}
        type={'Haircut & Beard'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'20.00'}
        type={'Line-Up/Just beard'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'25.00'}
        type={'Haircut'}
        ageRange='Kids'
        description='No skin-fade under 14 years old.'
        note='* Kids up to 12 years old.'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'25.00'}
        type={'Haircut'}
        ageRange='Senior'
        description='Above 60 years old'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'5.00'}
        type={'Eyebrow Wax'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'5.00'}
        type={'Cheeks Wax'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
      <Service
        icon={'/images/Group_77.png'}
        iconAlt='icon'
        price={'5.00'}
        type={'Nose/Ears Wax'}
        ageRange='Adult'
        description='Lorem ipsum dolor sit amet, ipiscing elit'
      />
    </div>
  );
}
