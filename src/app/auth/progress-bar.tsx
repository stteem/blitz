import React from 'react';

interface ProgressBarProps {
  strength: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ strength }) => {
  const getProgressBarColor = () => {
    switch (strength) {
      case 1:
      case 2:
        return 'red';
      case 3:
      case 4:
        return 'yellow';
      case 5:
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div className='rounded' style={{ height: '5px', width: '100%', backgroundColor: getProgressBarColor() }}></div>
  );
};

export default ProgressBar;