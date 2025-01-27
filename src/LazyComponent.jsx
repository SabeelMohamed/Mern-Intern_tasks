import React from 'react';

const LazyComponent = () => {
  return (
    <div>
      <h2>This is a Lazy Loaded Component</h2>
      <p>This component is loaded lazily using React.lazy and Suspense.</p>
    </div>
  );
};

export default LazyComponent;