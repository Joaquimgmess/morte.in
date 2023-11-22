import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 640,
    height: typeof window !== 'undefined' ? window.innerHeight : 360,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Ajusta as dimensões do vídeo com base no tamanho da tela
  const calculateDimensions = () => {
    const maxWidth = 800; // Largura máxima desejada para dispositivos grandes
    const maxHeight = 450; // Altura máxima desejada para dispositivos grandes
    const aspectRatio = 16 / 9; // Proporção de aspecto típica de vídeos do YouTube

    let width = Math.min(windowSize.width, maxWidth);
    let height = width / aspectRatio;

    // Ajusta as dimensões para dispositivos grandes
    if (width === maxWidth && height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    return {
      width,
      height,
    };
  };

  const { width, height } = calculateDimensions();

  const opts = {
    height,
    width,
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
