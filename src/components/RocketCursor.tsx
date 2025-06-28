import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

// Add this type alias for browser compatibility
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Timeout = ReturnType<typeof setTimeout>;

const RocketCursor = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });
  const [swingAngle, setSwingAngle] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const [flyDirection, setFlyDirection] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<Timeout>();
  const animationRef = useRef<number>();

  const isHomePage = location.pathname === '/';

  // Smooth rocket movement
  useEffect(() => {
    if (!isFlying && isHomePage) {
      const updateRocketPosition = () => {
        setRocketPosition(prev => {
          const lerpFactor = 0.08;
          const newX = prev.x + (mousePosition.x - prev.x) * lerpFactor;
          const newY = prev.y + (mousePosition.y - prev.y) * lerpFactor;
          return { x: newX, y: newY };
        });
        animationRef.current = requestAnimationFrame(updateRocketPosition);
      };
      animationRef.current = requestAnimationFrame(updateRocketPosition);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isFlying, isHomePage]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (!isFlying && isHomePage) {
        const deltaX = e.clientX - rocketPosition.x;
        const maxSwingAngle = 25;
        const swingIntensity = Math.min(Math.abs(deltaX) / 15, 1);
        const newSwingAngle = (deltaX / 15) * maxSwingAngle * swingIntensity;
        setSwingAngle(newSwingAngle);
      }
      
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.tagName === 'BUTTON' || 
                      target.closest('button') ||
                      target.closest('a[href]');

      if (isButton && !isFlying && isHomePage) {
        const randomAngle = (Math.random() - 0.5) * Math.PI / 3;
        const flyX = Math.sin(randomAngle) * 1000;
        const flyY = -Math.abs(Math.cos(randomAngle)) * 1000 - 500;

        setFlyDirection({ x: flyX, y: flyY });
        setIsFlying(true);
        setSwingAngle(0);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        timeoutRef.current = setTimeout(() => {
          setIsFlying(false);
        }, 2000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('click', handleClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isFlying, rocketPosition, isHomePage]);

  // Damping effect for swing
  useEffect(() => {
    if (isHomePage) {
      const dampingInterval = setInterval(() => {
        setSwingAngle(prev => prev * 0.92);
      }, 50);
      return () => clearInterval(dampingInterval);
    }
  }, [isHomePage]);

  const rocketStyle = {
    left: rocketPosition.x - 20,
    top: rocketPosition.y - 80,
    transform: isFlying 
      ? `translate(${flyDirection.x}px, ${flyDirection.y}px) rotate(${Math.atan2(flyDirection.y, flyDirection.x) * 180 / Math.PI + 90}deg) scale(0.3)`
      : `rotate(${-45 + swingAngle}deg) scale(1)`,
    opacity: isVisible && isHomePage ? (isFlying ? 0 : 1) : 0,
    transition: isFlying 
      ? 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
      : 'opacity 0.3s ease-out',
  };

  const cursorStyle = {
    left: mousePosition.x - 12,
    top: mousePosition.y - 12,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-out',
  };

  return (
    <>
      {/* Orange Circle Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] w-6 h-6"
        style={cursorStyle}
      >
        <div className="w-full h-full border-2 border-orange-500 rounded-full bg-transparent"></div>
      </div>

      {/* Rocket - Only on Home Page */}
      {isHomePage && (
        <div
          className="fixed pointer-events-none z-[9998] w-10 h-10"
          style={rocketStyle}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              {/* Rocket Nose */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-red-500"></div>
              {/* Rocket Body */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-5 bg-gray-200 rounded-sm border border-gray-300"></div>
              {/* Rocket Window */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full border border-gray-400"></div>
              {/* Rocket Fins */}
              <div className="absolute top-7 left-1 w-0 h-0 border-t-[4px] border-r-[6px] border-t-transparent border-r-red-500"></div>
              <div className="absolute top-7 right-1 w-0 h-0 border-t-[4px] border-l-[6px] border-t-transparent border-l-red-500"></div>
              {/* Rocket Flames */}
              {isFlying && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute -left-1 top-1 w-1 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="absolute -right-1 top-1 w-1 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RocketCursor;