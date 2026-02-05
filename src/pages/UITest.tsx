import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { C } from 'vitest/dist/chunks/reporters.d.BFLkQcL6.js';

const UITest = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: 'Привет!',
      description: 'Это уведомление Toast',
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-2">Тестирование UI Компонентов</h1>
          <p className="text-muted-foreground mb-8">Все компоненты интерфейса с подписями</p>

          {/* Buttons */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Кнопки</CardTitle>
              <CardDescription>Различные стили и размеры кнопок</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Бейджи</CardTitle>
              <CardDescription>Различные варианты бейджей</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Алерты</CardTitle>
              <CardDescription>Различные типы оповещений</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Информация</AlertTitle>
                <AlertDescription>Это информационное сообщение</AlertDescription>
              </Alert>
              <Alert className="border-green-600 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Успех</AlertTitle>
                <AlertDescription>Операция завершена успешно</AlertDescription>
              </Alert>
              <Alert className="border-red-600 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>Произошла ошибка при выполнении операции</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Input & Form Elements */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Элементы формы</CardTitle>
              <CardDescription>Input, Checkbox, Radio, Switch и другие</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="input-text">Text Input</Label>
                <Input id="input-text" placeholder="Введите текст..." className="mt-2" />
              </div>

              <div>
                <Label htmlFor="textarea">Textarea</Label>
                <Textarea id="textarea" placeholder="Введите текст..." className="mt-2" />
              </div>

              <div>
                <Label htmlFor="select">Select</Label>
                <Select>
                  <SelectTrigger id="select" className="mt-2">
                    <SelectValue placeholder="Выберите опцию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Опция 1</SelectItem>
                    <SelectItem value="option2">Опция 2</SelectItem>
                    <SelectItem value="option3">Опция 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="checkbox" 
                  checked={checkboxChecked}
                  onCheckedChange={(checked) => setCheckboxChecked(checked === true)}
                />
                <Label htmlFor="checkbox">Checkbox</Label>
              </div>

              <div>
                <Label>Radio Group</Label>
                <RadioGroup defaultValue="option1" className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="radio1" />
                    <Label htmlFor="radio1">Опция 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="radio2" />
                    <Label htmlFor="radio2">Опция 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="radio3" />
                    <Label htmlFor="radio3">Опция 3</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Switch 
                  id="switch"
                  checked={switchEnabled}
                  onCheckedChange={setSwitchEnabled}
                />
                <Label htmlFor="switch">Switch (Состояние: {switchEnabled ? 'ВКЛ' : 'ВЫКЛ'})</Label>
              </div>
            </CardContent>
          </Card>

          {/* Slider & Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Слайдер и Progress</CardTitle>
              <CardDescription>Интерактивные элементы управления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Slider (Значение: {sliderValue[0]})</Label>
                <Slider 
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  min={0}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Progress Bar</Label>
                <Progress value={66} className="mt-2" />
              </div>
            </CardContent>
          </Card>

          {/* Dialog & Alert Dialog */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Диалоги</CardTitle>
              <CardDescription>Dialog и AlertDialog компоненты</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Открыть Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Dialog Заголовок</DialogTitle>
                    <DialogDescription>
                      Это содержимое обычного диалогового окна.
                    </DialogDescription>
                  </DialogHeader>
                  <Button className="w-full">Действие</Button>
                </DialogContent>
              </Dialog>

              <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
                <Button 
                  variant="outline"
                  onClick={() => setAlertDialogOpen(true)}
                >
                  Открыть AlertDialog
                </Button>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Подтверждение действия</AlertDialogTitle>
                    <AlertDialogDescription>
                      Это важное диалоговое окно с подтверждением.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setAlertDialogOpen(false)}>
                      Подтвердить
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Табы</CardTitle>
              <CardDescription>Табуляция с несколькими вкладками</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Вкладка 1</TabsTrigger>
                  <TabsTrigger value="tab2">Вкладка 2</TabsTrigger>
                  <TabsTrigger value="tab3">Вкладка 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <p>Содержимое первой вкладки</p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <p>Содержимое второй вкладки</p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <p>Содержимое третьей вкладки</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Аккордеон</CardTitle>
              <CardDescription>Складываемые элементы</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item1">
                  <AccordionTrigger>Пункт 1</AccordionTrigger>
                  <AccordionContent>
                    Содержимое первого пункта аккордеона
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item2">
                  <AccordionTrigger>Пункт 2</AccordionTrigger>
                  <AccordionContent>
                    Содержимое второго пункта аккордеона
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item3">
                  <AccordionTrigger>Пункт 3</AccordionTrigger>
                  <AccordionContent>
                    Содержимое третьего пункта аккордеона
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tooltip */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Подсказки</CardTitle>
              <CardDescription>Tooltip компонент</CardDescription>
            </CardHeader>
            <CardContent>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Наведите мышь</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Это подсказка при наведении</p>
                </TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>

          {/* Toggle */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Переключатели</CardTitle>
              <CardDescription>Toggle и ToggleGroup</CardDescription>
            </CardHeader>
            <CardContent>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <strong>Б</strong>
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <em>И</em>
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <u>П</u>
                </ToggleGroupItem>
              </ToggleGroup>
            </CardContent>
          </Card>

          {/* Skeleton */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Skeleton (Загрузка)</CardTitle>
              <CardDescription>Скелет для отображения во время загрузки</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Пример 1: Профиль пользователя */}
              <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Skeleton className="h-16 w-16 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-3/4 bg-zinc-300 dark:bg-zinc-700" />
                  <Skeleton className="h-4 w-1/2 bg-zinc-300 dark:bg-zinc-700" />
                  <Skeleton className="h-3 w-2/3 bg-zinc-300 dark:bg-zinc-700" />
                </div>
              </div>

              {/* Пример 2: Карточка товара */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <Skeleton className="h-40 w-full rounded-lg bg-zinc-300 dark:bg-zinc-700" />
                <Skeleton className="h-4 w-full bg-zinc-300 dark:bg-zinc-700" />
                <Skeleton className="h-4 w-5/6 bg-zinc-300 dark:bg-zinc-700" />
                <div className="flex gap-2">
                  <Skeleton className="h-10 flex-1 bg-zinc-300 dark:bg-zinc-700" />
                  <Skeleton className="h-10 flex-1 bg-zinc-300 dark:bg-zinc-700" />
                </div>
              </div>

              {/* Пример 3: Список элементов */}
              <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-5 w-5 rounded bg-zinc-300 dark:bg-zinc-700" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-3 w-1/2 bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Таблица</CardTitle>
              <CardDescription>Компонент для отображения табличных данных</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Имя</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Иван Петров</TableCell>
                    <TableCell>ivan@example.com</TableCell>
                    <TableCell><Badge>Активен</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Мария Сидорова</TableCell>
                    <TableCell>maria@example.com</TableCell>
                    <TableCell><Badge variant="secondary">Неактивен</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Петр Иванов</TableCell>
                    <TableCell>petr@example.com</TableCell>
                    <TableCell><Badge>Активен</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Toast */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Toast Уведомления</CardTitle>
              <CardDescription>Всплывающие уведомления</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={showToast} variant="outline">
                Показать Toast уведомление
              </Button>
            </CardContent>
          </Card>

          {/* Separator */}
          <Separator className="my-8" />

          <div className="text-center text-muted-foreground">
            <p>Все UI компоненты загружены и готовы к использованию</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UITest;
