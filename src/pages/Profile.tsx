import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, Mail, Award, Clock, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock user data - in real app would come from VATSIM OAuth
const mockUser = {
  vatsimId: '1234567',
  email: 'pilot@example.com',
  name: 'Иван Петров',
  rating: 'P1 - PPL',
  hours: 156,
};

const Profile = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t('profile.title')}
              </h1>
            </div>

            {/* Profile Card */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* Banner */}
              <div className="h-32 bg-gradient-to-r from-primary via-sky-500 to-blue-600 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-background border-4 border-background flex items-center justify-center shadow-xl">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-8 px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground">{mockUser.name}</h2>
                  <p className="text-muted-foreground">VATSIM Pilot</p>
                </div>

                {/* Info Grid */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{t('profile.vatsimId')}</p>
                      <p className="font-semibold text-foreground">{mockUser.vatsimId}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{t('profile.email')}</p>
                      <p className="font-semibold text-foreground">{mockUser.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{t('profile.rating')}</p>
                      <p className="font-semibold text-foreground">{mockUser.rating}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{t('profile.hours')}</p>
                      <p className="font-semibold text-foreground">{mockUser.hours} ч</p>
                    </div>
                  </div>
                </div>

                {/* Logout Button */}
                <div className="mt-8">
                  <Button variant="outline" className="w-full gap-2">
                    <LogOut className="w-4 h-4" />
                    {t('profile.logout')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
