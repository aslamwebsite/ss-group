import React, { useState, useEffect, useRef } from 'react';
import 'odometer/themes/odometer-theme-default.css';
import dynamic from 'next/dynamic';

const Counter = ({ startValue, endValue, speed }) => {
  const [counted, setCounted] = useState(false);
  const counterRef = useRef(null);
  let Odometer;

  useEffect(() => {
    if (window.innerWidth > 768 && counterRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCounted(true);
            }
          });
        },
        { rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(counterRef.current);

      // Cleanup function
      return () => {
        observer.disconnect();
      };
    } else {
      setCounted(true);
    }
  }, []);

  useEffect(() => {
    if (counted && counterRef.current) {
      // Import Odometer dynamically
      import('odometer').then((OdometerModule) => {
        Odometer = OdometerModule.default;

        // Initialize Odometer
        const odometerInstance = new Odometer({
          el: counterRef.current,
          value: startValue,
          format: '(,ddd)',
          duration: speed,
        });

        // Update value
        odometerInstance.update(endValue);
      }).catch((error) => {
        console.error('Error importing Odometer:', error);
      });
    }
  }, [counted, startValue, endValue, speed]);

  return (
    <div className="counter-element mb-5 pb-5">
      <div className="odometer" ref={counterRef}>
        {counted ? startValue : 0}
      </div>
    </div>
  );
};

export default Counter;
