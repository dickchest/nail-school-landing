import React from 'react';
import ScheduleSection from './components/ScheduleSection';
import Navbar from './components/Navbar';
import {
    Sparkles,
    MapPin,
    Phone,
    Mail,
    Instagram,
    CheckCircle,
    Star,
    Diamond,
    Clock,
    Users,
    GraduationCap,
    Quote,
} from 'lucide-react';

function App() {
    const handleWhatsApp = () => {
        const name =
            (document.querySelector('#name') as HTMLInputElement)?.value || '';
        const email =
            (document.querySelector('#email') as HTMLInputElement)?.value || '';
        const message =
            (document.querySelector('#message') as HTMLTextAreaElement)
                ?.value || '';

        const fullMessage = `Здравствуйте! Меня зовут ${name}. Мой email: ${email}. ${message}`;
        const phone = '4917662521437'; // твой номер в международном формате без +

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            fullMessage
        )}`;
        window.open(url, '_blank');
    };

    React.useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', 'https://www.instagram.com/embed.js');
        script.setAttribute('async', '');
        document.body.appendChild(script);
    }, []);
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            {/* Navbar */}
            <Navbar />
            <div className="h-20" />

            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url("/images/bg1.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="w-full max-w-sm md:ml-auto order-1 md:order-2">
                            <img
                                src="/images/natalia.jpg"
                                alt="Наталья Чайковская"
                                className="rounded-2xl border-4 border-gold shadow-lg object-cover w-full h-auto"
                            />
                        </div>
                        <div className="max-w-3xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Школа маникюра{' '}
                                <span className="text-gold">
                                    Натальи Чайковской
                                </span>
                            </h1>
                            <p className="text-xl text-white mb-8">
                                Профессиональное обучение маникюру и педикюру в
                                Эссене
                            </p>
                            <a href="#contact">
                                <button className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold transition duration-300">
                                    Записаться на курс
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div
                id="courses"
                className="py-20 bg-gradient-to-b from-black to-gray-900"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Наши <span className="text-gold">Курсы</span>
                    </h2>

                    {/* Basic Manicure Course */}
                    <div className="mb-16 bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    Базовый курс маникюра
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        3 дня
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        5 моделей
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    500€
                                </p>
                                <p className="text-gray-400">Полный курс</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    Для кого подходит:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Новичков без опыта</span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Самоучек, работающих по видео с
                                            YouTube
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Мастеров после долгого перерыва
                                        </span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    Программа курса:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Комбинированный маникюр</span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Покрытие в стык кутикуле</span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Выравнивание ногтевой пластины
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Архитектура ногтя</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    График обучения:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-white">
                                        <div className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                            1
                                        </div>
                                        <span>
                                            День первый: теория, работа с
                                            фрезером, практика на первой модели
                                        </span>
                                    </li>
                                    <li className="flex items-start text-white">
                                        <div className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                            2
                                        </div>
                                        <span>
                                            День второй: практика на двух
                                            моделях
                                        </span>
                                    </li>
                                    <li className="flex items-start text-white">
                                        <div className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                            3
                                        </div>
                                        <span>
                                            День третий: две модели и вручение
                                            дипломов
                                        </span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    Вы получаете:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Сертификат о прохождении курса
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Чек-лист "Базовая закупка для
                                            мастеров"
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            3 месяца поддержки после курса
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Basic Pedicure Course */}
                    <div className="mb-16 bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    Базовый курс педикюра
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        1 день
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        2 модели
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    350€ - 500€
                                </p>
                                <p className="text-gray-400">
                                    Группа / Индивидуально
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    Для кого подходит:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Действующих мастеров маникюра
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Выпускников базового курса маникюра
                                        </span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    Программа курса:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Обработка стоп специальной
                                            косметикой
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Техника покрытия гель-лаком</span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Особенности педикюра</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    Формат обучения:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-white">
                                        <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                                        <span>
                                            Групповой (2 мастера): 350€ с
                                            человека
                                        </span>
                                    </li>
                                    <li className="flex items-start text-white">
                                        <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                                        <span>Индивидуальный: 500€</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    Вы получаете:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Сертификат о прохождении курса
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Все материалы включены</span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>Квитанция для налоговой</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Course */}
                    <div className="bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    Повышение квалификации
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        1 день
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        2-4 модели
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    350€ - 450€
                                </p>
                                <p className="text-gray-400">
                                    Группа / Индивидуально
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    Для кого подходит:
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Действующих мастеров
                                            комбинированного маникюра
                                        </span>
                                    </li>
                                    <li className="flex items-center text-white">
                                        <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                        <span>
                                            Желающих улучшить скорость и
                                            качество работы
                                        </span>
                                    </li>
                                </ul>

                                <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                                    <p className="text-white">
                                        <span className="text-gold font-semibold">
                                            Важно:
                                        </span>{' '}
                                        Курс не подходит для самоучек и мастеров
                                        после длительного перерыва
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    Форматы обучения:
                                </h4>
                                <ul className="space-y-6">
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            Групповой (350€):
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-center">
                                                <Star className="text-gold w-4 h-4 mr-2" />
                                                <span>2 мастера</span>
                                            </li>
                                            <li className="flex items-center">
                                                <Star className="text-gold w-4 h-4 mr-2" />
                                                <span>2 модели (2 руки)</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            Индивидуальный (450€):
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            <li className="flex items-center">
                                                <Star className="text-gold w-4 h-4 mr-2" />
                                                <span>
                                                    Персональное обучение
                                                </span>
                                            </li>
                                            <li className="flex items-center">
                                                <Star className="text-gold w-4 h-4 mr-2" />
                                                <span>2 модели (4 руки)</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div id="gallery" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Наши <span className="text-gold">Работы</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <img
                            src="/images/img4.jpg"
                            alt="Nail Art"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img7.jpg"
                            alt="Manicure Tools"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img2.jpg"
                            alt="Professional Nails"
                            className="w-full h-64 object-cover rounded-lg"
                        />

                        <img
                            src="/images/img5.jpg"
                            alt="Nail Art"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img3.jpg"
                            alt="Manicure Tools"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <img
                            src="/images/img6.jpg"
                            alt="Professional Nails"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div id="testimonials" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Отзывы <span className="text-gold">учениц</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Elena',
                                review: 'спасибо большое ❤️❤️❤️ меня конечно до сих пор эмоции переполняют всем вокруг рассказываю и рассказываю только нашем курсе и о всех девочках, очень прониклась ко всем вам🥹 еще раз огромное спасибо за эти три дня, было потрясающе!!!',
                            },
                            {
                                name: 'Варварушка',
                                review: 'Большое спасибо за ваши теплые слова! Невероятно приятно, что вы поддерживаете нас и верите в наши силы. Вы – настоящий профессионал и вдохновитель! Я очень рада, что прошла курс именно у вас, и уверенна, что эти знания пригодятся нам на все 100%. Еще раз спасибо за вашу доброту и мастерство ❤️❤️❤️❤️❤️ Очень приятно было со всеми познакомиться, всех очень полюбила за эти 3 дня ❤️❤️❤️',
                            },
                            {
                                name: 'Sashulya',
                                review: 'Большое спасибо Наталье 😻за профессионализм в своем деле. И спасибо Марине😻 Я очень благодарна за то чему я научилась за эти три дня. Я очень рада что познакомилась со всеми девчонками . Девочки вы крутые ❤️❤️❤️❤️❤️ Желаю всем успехов❤️❤️❤️❤️❤️',
                            },
                            {
                                name: 'Наталія',
                                review: 'Спасибо большое за ваши слова ! А самое главное спасибо за работу которую вы проделали! Вы большая молодец! Я очень благодарна вам за такой прекрасный курс! И отдельное большое спасибо Марине, она нам помогала и была всегда рядом ❤️ Всем девочкам хочу пожелать успех в работе и много хороших клиентов, рости и развиваться в этой сфере 🙌🏻❤️',
                            },
                            {
                                name: 'Sveta',
                                review: 'Дорогие девочки, ❤️❤️❤️ мне было невероятно приятно познакомиться со всеми вами! Хочу выразить свою огромную благодарность Наталье ❤️🫂 за ту колоссальную работу, которую она с нами проделала. Спасибо Вам 🫶🏻 за ваши знания, за ваше терпение, за веру в нас, за то, что вы показали нам этот путь с нуля и вложили в нас душу и труд. Это бесценно!🙏😘',
                            },
                            {
                                name: 'Марина Андрієць',
                                review: 'Привет ☺️Я осталась в большом восторге 😍Я ехала вчера домой и все время улыбка на лице была 😅Я так тискала свой сертификат,не верилось что он мой 😅Наталия просто самый лучший учитель который может быть😘Девочки самые лучшие кураторы 😘❤️Очень нам помогали 🤗Мои курочки🤗😻Спасибо БОЛЬШОЕ Наталии,она многому научила и показала как правильно делать❤️❤️❤️Для себя я узнала все что хотела,а то что не хотела тоже узнала 😅Я очень рада была пройти обучение именно у Наталии😘И мы с девчонками обязательно вернемся на повышение,просто так мы от Вас не отстанем 🤣❤️❤️❤️😘😘😘',
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gold/20"
                            >
                                <Quote className="text-gold w-6 h-6 mb-4" />
                                <p className="text-white mb-4">
                                    {testimonial.review}
                                </p>
                                <p className="text-gold font-semibold">
                                    — {testimonial.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Schedule Section */}
            <ScheduleSection />

            {/* Video Section */}
            <div id="video" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Видео с <span className="text-gold">курсов</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                        {/* Видео 1 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DHtEDkHIFFh/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>

                        {/* Видео 2 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DHqWSduIHEn/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>

                        {/* Видео 3 */}
                        <div className="w-full md:w-1/2 max-w-md">
                            <blockquote
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/reel/DIQxuhSIp6d/?utm_source=ig_embed&amp;utm_campaign=loading"
                                data-instgrm-version="14"
                            ></blockquote>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div
                id="contact"
                className="py-20 bg-gradient-to-b from-gray-900 to-black"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        Контакты и <span className="text-gold">Запись</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 text-white">
                            <div className="flex items-center">
                                <MapPin className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="https://www.google.com/maps?q=Mülheimer+Str.+83,+45130+Essen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition"
                                >
                                    Mülheimer Str. 83, 45130 Essen
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="tel:+4917662521437"
                                    className="hover:text-gold transition"
                                >
                                    +49 176 62521437
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="mailto:chaykovskayanails45138@gmail.com?subject=Запись на курс"
                                    className="hover:text-gold transition"
                                >
                                    chaykovskayanails45138@gmail.com
                                </a>
                            </div>

                            <a
                                href="https://www.instagram.com/chaykovskaya_pronails"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <Instagram className="text-gold w-6 h-6 mr-4" />
                                <p>@chaykovskaya_pronails</p>
                            </a>
                        </div>
                        <form className="space-y-4">
                            <input
                                id="name"
                                type="text"
                                placeholder="Ваше имя"
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder="Ваш email"
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <textarea
                                id="message"
                                placeholder="Ваше сообщение"
                                rows={4}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            ></textarea>
                            <button
                                onClick={handleWhatsApp}
                                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                Написать в WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>
                        © 2025 Школа маникюра Натальи Чайковской. Все права
                        защищены.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
