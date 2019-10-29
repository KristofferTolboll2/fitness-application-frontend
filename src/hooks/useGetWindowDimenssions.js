import { useState, useEffect } from 'react';



function useGetWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(useGetWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(useGetWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useGetWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }