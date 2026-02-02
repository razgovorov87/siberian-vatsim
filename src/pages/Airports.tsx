import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plane, 
  Cloud, 
  Wind, 
  Thermometer, 
  Eye, 
  Search,
  MapPin,
  Clock
} from 'lucide-react';

interface Airport {
  icao: string;
  name: string;
  city: string;
  metar?: string;
  temperature?: number;
  wind?: string;
  visibility?: string;
  conditions?: string;
  runways: string[];
}

const airports: Airport[] = [
  {
    icao: 'UNNT',
    name: 'Толмачёво',
    city: 'Новосибирск',
    temperature: -12,
    wind: '270/15',
    visibility: '10 км',
    conditions: 'Облачно',
    runways: ['07/25', '16/34'],
  },
  {
    icao: 'UNKL',
    name: 'Емельяново',
    city: 'Красноярск',
    temperature: -18,
    wind: '180/08',
    visibility: '6 км',
    conditions: 'Снег',
    runways: ['11/29'],
  },
  {
    icao: 'UIII',
    name: 'Международный',
    city: 'Иркутск',
    temperature: -22,
    wind: '090/12',
    visibility: '8 км',
    conditions: 'Ясно',
    runways: ['12/30'],
  },
  {
    icao: 'UNBB',
    name: 'Аэропорт им.Титова',
    city: 'Барнаул',
    temperature: -8,
    wind: '320/20',
    visibility: '10 км',
    conditions: 'Переменная облачность',
    runways: ['06/24',],
  },
  {
    icao: 'UUEE',
    name: 'Шереметьево',
    city: 'Москва',
    temperature: -5,
    wind: '230/10',
    visibility: '10 км',
    conditions: 'Облачно',
    runways: ['06L/24R', '06C/24C', '06R/24L'],
  },
  {
    icao: 'ULLI',
    name: 'Пулково',
    city: 'Санкт-Петербург',
    temperature: -3,
    wind: '200/15',
    visibility: '5 км',
    conditions: 'Туман',
    runways: ['10L/28R', '10R/28L'],
  },
];

function AirportCard({ airport }: { airport: Airport }) {
  const { t } = useLanguage();
  
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="secondary" className="mb-2 font-mono text-sm">
              {airport.icao}
            </Badge>
            <CardTitle className="text-lg">{airport.name}</CardTitle>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" />
              {airport.city}
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Plane className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Weather info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Thermometer className="w-4 h-4 text-blue-500" />
            <span>{airport.temperature}°C</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Wind className="w-4 h-4 text-sky-500" />
            <span>{airport.wind} kt</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Eye className="w-4 h-4 text-green-500" />
            <span>{airport.visibility}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Cloud className="w-4 h-4 text-gray-500" />
            <span>{airport.conditions}</span>
          </div>
        </div>

        {/* Runways */}
        <div>
          <p className="text-xs text-muted-foreground mb-2">{t('airports.runways')}</p>
          <div className="flex flex-wrap gap-2">
            {airport.runways.map((runway) => (
              <Badge key={runway} variant="outline" className="font-mono text-xs">
                {runway}
              </Badge>
            ))}
          </div>
        </div>

        {/* Update time */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t border-border">
          <Clock className="w-3 h-3" />
          <span>{t('airports.updated')}: 5 {t('airports.minutesAgo')}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Airports() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAirports = airports.filter(
    (airport) =>
      airport.icao.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('airports.title')}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('airports.subtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={t('airports.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Airports grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirports.map((airport) => (
            <AirportCard key={airport.icao} airport={airport} />
          ))}
        </div>

        {filteredAirports.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t('airports.notFound')}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
