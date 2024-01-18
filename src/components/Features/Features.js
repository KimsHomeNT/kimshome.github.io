import React, { useState, useEffect } from 'react';
import './Features.css';

function Features() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [manualSelection, setManualSelection] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualSelection) {
        // Move to the next card in sequence if not manually selected
        setSelectedCard((prevCard) => (prevCard + 1) % 3);
      }
    }, 3000); // Adjust the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [manualSelection]); // Include manualSelection in the dependency array

  const featureDetails = [
    // Add your feature details here for each card
    [
      'Strategic Location',
      '2 minutes to SJK (C) Pai Teik And SMK Seri Nibong',
      '3 minutes to Famous Nibong tebal Food Hall Street',
      '3 minutes to Sunday Nibong Tebal Night Market',
      '3 minutes to Yawata Supermarket',
      '4 minutes to Famous Cheng Hwa Seafood Porridge',
      '4 minutes to Taman Berjaya Public Market',
      '4 minutes to Firefly Jetty Nibong Tebal',
      '6 minutes to Tunku Abdul Rahman High School',
      '7 minutes to C-Mart Nibong Tebal',
      '8 minutes to Plaza Tol Jawi (Highway)',
      '8 minutes to Merbok Sanctuary',
      '8 minutes to USM Nibong Tebal'
    ],
    [
      'Large And Clean',
      '4 bedrooms, 3 bathrooms, One Living Room',
      'Wide open space area beside the house',
      'Cleanliness is our highest priority',
      'Large Parking Space',
    ],
    [
      'Well-Equipped',
      'Air-Cond For Each Bedrooms',
      'Water Heater For Each Bathrooms',
      'Wifi and TV',
      'Refrigerator, Washing Machine',
    ]
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setManualSelection(true);

    // Reset manualSelection after 5 seconds (adjust as needed)
    setTimeout(() => {
      setManualSelection(false);
    }, 5000);
  };

  // Inside the Features component
return (
  <>
    <div className='feature-wrapper'>
      <h1>Why Kim's Home</h1>
      <div className='each-feature-wrapper'>
        {featureDetails.map((details, index) => (
          <div
            key={index}
            className={`Card ${index < 2 ? 'right-pad' : ''} ${selectedCard === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {details[0]}
          </div>
        ))}
      </div>
      {/* {selectedCard !== null && (
        <div
          className={`each-feature-detail-wrapper card${selectedCard + 1}`}
        >
          <div className='each-feature-detail'>
            <ul>
              {featureDetails[selectedCard].map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )} */}
    </div>
  </>
);

}

export default Features;
