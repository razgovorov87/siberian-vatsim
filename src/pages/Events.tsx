import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { EventCard } from '@/components/EventCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const upcomingEvents = [
  {
    id: 1,
    title: 'Групповой полёт: Новосибирск - Красноярск',
    date: '15 февраля 2026',
    time: '18:00 UTC',
    location: 'UNNT → UNKL',
    participants: 24,
    isPast: false,
  },
  {
    id: 2,
    title: 'Cross the Siberia Event',
    date: '22 февраля 2026',
    time: '14:00 UTC',
    location: 'UUEE → UHWW',
    participants: 45,
    isPast: false,
  },
  {
    id: 3,
    title: 'АТС Training Day',
    date: '1 марта 2026',
    time: '16:00 UTC',
    location: 'UNNT',
    participants: 12,
    isPast: false,
  },
];

const pastEvents = [
  {
    id: 4,
    title: 'Новогодний групповой полёт',
    date: '31 декабря 2025',
    time: '20:00 UTC',
    location: 'UUEE → UNNT',
    participants: 67,
    isPast: true,
  },
  {
    id: 5,
    title: 'Winter Wonderland Event',
    date: '15 декабря 2025',
    time: '15:00 UTC',
    location: 'UNKL → UIII',
    participants: 38,
    isPast: true,
  },
];

const Events = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('events.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('events.subtitle')}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={cn(
                  'px-6 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === 'upcoming'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {t('events.upcoming')}
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={cn(
                  'px-6 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === 'past'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {t('events.past')}
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                participants={event.participants}
                isPast={event.isPast}
              />
            ))}
          </div>

          {/* Empty state */}
          {activeTab === 'upcoming' && upcomingEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Нет предстоящих событий</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
