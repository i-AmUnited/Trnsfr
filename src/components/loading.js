import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className='px-20 py-10'>
      <div className='relative'>
      <div className=' aspect-square bg-[#71CB9016] rounded-full border-t-2 border-[#71CB90] border-dashed animate-spin grid items-center justify-center'>
      </div>
      <div className='absolute h-full top-0 w-full flex justify-center items-center'>{progress}%</div>
      </div>
      <p className='text-center mt-8 text-xs font-medium'>Your file is uploading <br /> Please wait...</p>
    </div>
  );
};

export default Loading;
