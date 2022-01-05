import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function useAlan() {
  useEffect(() => {
    alanBtn({
      key: '7271dff500f97b8c0e0cb4ef8e8e0df52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);
  return null;
}
