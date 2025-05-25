import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  // Этапы изготовления сумки
  const craftingStages = [
    {
      id: 1,
      stage: "Подготовка материалов",
      description: "Выбор и раскрой натуральной кожи",
      image:
        "https://cdn.poehali.dev/files/35843fa0-7e24-4119-81bb-3df458419685.png",
    },
    {
      id: 2,
      stage: "Формирование основы",
      description: "Создание каркаса и основных элементов",
      image:
        "https://cdn.poehali.dev/files/aaf4e6f2-7ca7-4368-bb3f-8965ef3a3e44.png",
    },
    {
      id: 3,
      stage: "Сборка и прошивка",
      description: "Соединение деталей вручную прочными швами",
      image:
        "https://cdn.poehali.dev/files/0c395486-819b-4c32-a073-5c0aef6885e1.png",
    },
    {
      id: 4,
      stage: "Финальная отделка",
      description: "Полировка, обработка краев и установка фурнитуры",
      image:
        "https://cdn.poehali.dev/files/bdc02f48-3ef9-4e3b-a292-36d6fbb3d631.png",
    },
  ];

  // Каталог изделий
  const products = [
    {
      id: 1,
      name: "Обложка для ежедневника классическая",
      image:
        "https://cdn.poehali.dev/files/31da0367-39c5-408a-95ba-e5f46b838fce.png",
      price: "от 8 000 ₽",
      category: "Обложки",
    },
    {
      id: 2,
      name: "Обложка для ежедневника с тиснением",
      image:
        "https://cdn.poehali.dev/files/de184548-ac98-43b7-9d09-45a7d939dff6.png",
      price: "от 12 000 ₽",
      category: "Обложки",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold text-amber-900 mb-6 font-serif">
            Кожаные изделия
            <br />
            ручной работы
          </h1>
          <p className="text-xl text-amber-800 mb-8 max-w-2xl mx-auto">
            Создаем уникальные сумки, портфели и аксессуары из натуральной кожи.
            Каждое изделие — произведение искусства, созданное вручную с любовью
            к деталям.
          </p>
          <Button
            size="lg"
            className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg"
          >
            Заказать изделие
          </Button>
        </div>
      </section>

      {/* Crafting Process */}
      <section className="py-20 px-6 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4 font-serif">
            Процесс изготовления
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
            От выбора кожи до готового изделия — каждый этап выполняется вручную
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftingStages.map((stage, index) => (
              <Card
                key={stage.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.stage}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-amber-900 text-white text-sm px-2 py-1 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-amber-900 text-lg">
                    {stage.stage}
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    {stage.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4 font-serif">
            Каталог изделий
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
            Эксклюзивные обложки и аксессуары ручной работы
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-amber-700">
                    {product.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-amber-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-8 font-serif">
            О мастерской
          </h2>
          <div className="text-lg text-amber-800 space-y-6">
            <p>
              Уже более 10 лет мы создаем эксклюзивные изделия из натуральной
              кожи. Каждая сумка, портфель или аксессуар изготавливается
              полностью вручную, без использования машинного производства.
            </p>
            <p>
              Мы используем только премиальную кожу от лучших поставщиков и
              проверенные временем техники обработки. Результат — изделия,
              которые служат десятилетиями и только становятся красивее со
              временем.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8 font-serif">
            Заказать изделие
          </h2>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Введите имя"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="border-amber-200 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">
                  Что хотите заказать?
                </label>
                <Textarea
                  placeholder="Опишите желаемое изделие: тип, размеры, цвет кожи, особые пожелания..."
                  className="border-amber-200 focus:border-amber-500 min-h-32"
                />
              </div>

              <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">
            Мастерская кожаных изделий
          </h3>
          <p className="mb-4">
            Москва • +7 (495) 123-45-67 • info@leather-craft.ru
          </p>
          <p className="text-amber-300">Создаем с любовью, делимся качеством</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
