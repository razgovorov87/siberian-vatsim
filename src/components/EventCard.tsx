import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  imageUrl?: string;
  isPast?: boolean;
}

export function EventCard({ 
  title, 
  date, 
  time, 
  location, 
  participants, 
  imageUrl,
  isPast = false 
}: EventCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-sky-400/20 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">✈️</div>
          </div>
        )}
        {isPast && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-muted/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
            Завершено
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4 line-clamp-2">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>{participants} участников</span>
          </div>
        </div>

        {!isPast && (
          <Button variant="default" className="w-full">
            {t('events.register')}
          </Button>
        )}
      </div>
    </div>
  );
}
