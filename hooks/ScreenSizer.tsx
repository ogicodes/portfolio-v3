import { useState, useEffect } from 'react';

export default function ScreenSizer() {
    const [screenSize, setScreenSize] = useState<'small' | 'medium' | 'large'>('large');


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScreenSize('small');
            } else if (window.innerWidth < 1024) {
                setScreenSize('medium');
            } else {
                setScreenSize('large');
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
}