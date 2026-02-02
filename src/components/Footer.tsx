import { Link } from 'react-router-dom';
import { Plane, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
            <img src="/small_logo_sib.png" alt="VATSIM Siberia" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl">
                VATSIM <span className="text-primary">Siberia</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Официальное подразделение VATSIM для Сибирского региона России. 
              Виртуальная авиация на профессиональном уровне.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.profile')}
                </Link>
              </li>
            </ul>
          </div>

          {/* External */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Ресурсы</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://vatsim.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                >
                  VATSIM.net <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/unnt" 
                  target ="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                >
                  Discord UNNT<ExternalLink className="w-3 h-3" />
                </a>
              </li>
                            <li>
                <a 
                  href="#" 
                  target ="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                >
                  Discord UNKL<ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  target ="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1"
                >
                  Discord UIII<ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VATSIM Siberia {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-xs">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              {t('footer.privacy') || 'Privacy Policy'}
            </Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">
              {t('footer.cookies') || 'Cookie Policy'}
            </Link>
            <p>
              Not affiliated with real-world aviation organizations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
