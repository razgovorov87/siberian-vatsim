import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Globe, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/events', label: t('nav.events') },
    { href: '/airports', label: t('nav.airports') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-sky-400 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">
              VATSIM <span className="text-primary">Сибирь</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-2',
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}

            {/* Airports Dropdown */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary relative py-2',
                    isActive('/airports')
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {t('nav.airports')}
                  <ChevronDown className="w-3 h-3" />
                  {isActive('/airports') && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-popover border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/airports" className="flex items-center gap-2 cursor-pointer">
                    <MapPin className="w-4 h-4" />
                    {t('nav.airports')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <Link
              to="/profile"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-2',
                isActive('/profile')
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {t('nav.profile')}
              {isActive('/profile') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            
            <Button variant="default" size="sm">
              {t('nav.login')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/airports"
              onClick={() => setIsOpen(false)}
              className={cn(
                'block py-2 text-sm font-medium transition-colors',
                isActive('/airports')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {t('nav.airports')}
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={cn(
                'block py-2 text-sm font-medium transition-colors',
                isActive('/profile')
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {t('nav.profile')}
            </Link>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
              </button>
              <Button variant="default" size="sm" className="flex-1">
                {t('nav.login')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
