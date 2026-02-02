import { ArrowRight, Calendar, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type PlaneDirection = 'right' | 'left' | 'up' | 'diagonal';

// Animated airplane component
function AnimatedPlane({ 
  delay, 
  duration, 
  startX, 
  startY, 
  size,
  opacity,
  direction = 'right',
  rotation = 45
}: { 
  delay: number; 
  duration: number; 
  startX: string; 
  startY: string; 
  size: number;
  opacity: number;
  direction?: PlaneDirection;
  rotation?: number;
}) {
  const animationClass = {
    right: 'animate-fly-plane-right',
    left: 'animate-fly-plane-left',
    up: 'animate-fly-plane-up',
    diagonal: 'animate-fly-plane-diagonal',
  }[direction];

  return (
    <div
      className={`absolute ${animationClass}`}
      style={{
        left: startX,
        top: startY,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity,
      }}
    >
      <Plane 
        className="text-primary/30" 
        style={{ width: size, height: size, transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  // Иконка Plane по умолчанию направлена носом вправо (0°)
  // Для корректного отображения нужно повернуть иконку в направлении движения
  const planes = [
    // Flying to the right (from left) — moving right and slightly up: ~-10°
    { delay: 0, duration: 15, startX: '-5%', startY: '20%', size: 24, opacity: 0.4, direction: 'right' as PlaneDirection, rotation: -10 },
    { delay: 4, duration: 18, startX: '-5%', startY: '60%', size: 32, opacity: 0.3, direction: 'right' as PlaneDirection, rotation: -10 },
    { delay: 8, duration: 14, startX: '-5%', startY: '40%', size: 20, opacity: 0.5, direction: 'right' as PlaneDirection, rotation: -10 },
    { delay: 12, duration: 20, startX: '-5%', startY: '75%', size: 28, opacity: 0.25, direction: 'right' as PlaneDirection, rotation: -10 },
    
    // Flying to the left (from right) — moving left and slightly up: ~170°
    { delay: 2, duration: 16, startX: '105%', startY: '30%', size: 26, opacity: 0.35, direction: 'left' as PlaneDirection, rotation: 170 },
    { delay: 6, duration: 19, startX: '105%', startY: '70%', size: 30, opacity: 0.3, direction: 'left' as PlaneDirection, rotation: 170 },
    { delay: 10, duration: 15, startX: '105%', startY: '50%', size: 22, opacity: 0.4, direction: 'left' as PlaneDirection, rotation: 170 },
    
    // Flying up (from bottom) — moving up and slightly right: ~-75°
    { delay: 1, duration: 22, startX: '20%', startY: '105%', size: 28, opacity: 0.3, direction: 'up' as PlaneDirection, rotation: -75 },
    { delay: 7, duration: 20, startX: '70%', startY: '105%', size: 24, opacity: 0.35, direction: 'up' as PlaneDirection, rotation: -75 },
    
    // Flying diagonally (from bottom right to top left) — moving left and up at 45°: ~135°
    { delay: 3, duration: 24, startX: '105%', startY: '105%', size: 34, opacity: 0.25, direction: 'diagonal' as PlaneDirection, rotation: 135 },
    { delay: 11, duration: 22, startX: '90%', startY: '100%', size: 26, opacity: 0.3, direction: 'diagonal' as PlaneDirection, rotation: 135 },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-background to-blue-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Animated airplanes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {planes.map((plane, index) => (
          <AnimatedPlane key={index} {...plane} />
        ))}
      </div>

      {/* Cloud decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-32 h-16 bg-white/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[25%] right-[15%] w-48 h-20 bg-white/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-40 h-16 bg-white/35 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[60%] right-[10%] w-36 h-14 bg-white/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            VATSIM Russia Division
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-foreground">{t('hero.title').split(' ')[0]}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-500 to-blue-600 bg-clip-text text-transparent">
              {t('hero.title').split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="hero" className="group">
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/events" className="gap-2">
                <Calendar className="w-4 h-4" />
                {t('hero.events')}
              </Link>
            </Button>
          </div>

          {/* Info Section */}
          <div className="mt-16 w-full px-4 sm:px-6 lg:px-8 py-8 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
            <p className="text-lg text-foreground leading-relaxed font-light">
              {t('hero.webinfo')}{' '}
              <a href="https://vatsim.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>VATSIM Siberia</strong>
              </a>
              {' '}{t('hero.webinfo2')}{' '}
              <a href="https://vatrus.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>VATRUS</strong>
              </a>
              {', '}{t('hero.webinfo3')}{' '}
              <a href="https://vatsim.net/docs/regions/emea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>Middle East and Africa (EMEA)</strong>
              </a>
              {'. '}
              <br />
              {t('hero.welcomefly')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
