import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useBreakPoints from '@/src/utils/responsive';
import { useEffect, useState } from 'react';

export default function Slideshow() {
  const images = [
    '/images/Mask_Group_15_ct.png',
    '/images/Mask_Group_15_cu.png',
    '/images/Mask_Group_15_cv.png',
    '/images/Mask_Group_15_cw.png',
    '/images/Mask_Group_15.png',
  ];

  const { isLargeScreen, isMediumScreen } = useBreakPoints();

  const [mediumScreen, setMediumScreen] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    setMediumScreen(isMediumScreen);
  }, [isMediumScreen]);

  useEffect(() => {
    setLargeScreen(isLargeScreen);
  }, [isLargeScreen]);

  const size = mediumScreen ? 350 : 300;

  return (
    <div
      style={{
        width: largeScreen ? 1000 : mediumScreen ? 700 : 300,
        alignSelf: 'center',
        marginTop: 100,
      }}
    >
      <Carousel
        centerMode={mediumScreen}
        centerSlidePercentage={largeScreen ? 50 : mediumScreen ? 75 : 95}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        showIndicators
        infiniteLoop
      >
        {images.map((image) => (
          <div
            style={{ width: size, height: size, alignSelf: 'center' }}
            key={image}
          >
            <img src={image} width={size} height={size} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
