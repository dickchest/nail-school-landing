import React from 'react';
import ScheduleSection from './components/ScheduleSection';
import Navbar from './components/Navbar';
import { useTranslation, Trans } from 'react-i18next';
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
    const { t } = useTranslation();

    const whoItems = t('courses.basicManicure.whoItems', {
        returnObjects: true,
    }) as string[];

    const programItems = t('courses.basicManicure.programItems', {
        returnObjects: true,
    }) as string[];

    const scheduleItems = t('courses.basicManicure.scheduleItems', {
        returnObjects: true,
    }) as string[];

    const youGetItems = t('courses.basicManicure.youGetItems', {
        returnObjects: true,
    }) as string[];

    const whoItemsPedicure = t('courses.basicPedicure.whoItems', {
        returnObjects: true,
    }) as string[];

    const programItemsPedicure = t('courses.basicPedicure.programItems', {
        returnObjects: true,
    }) as string[];

    const formatItemsPedicure = t('courses.basicPedicure.formatItems', {
        returnObjects: true,
    }) as string[];

    const youGetItemsPedicure = t('courses.basicPedicure.youGetItems', {
        returnObjects: true,
    }) as string[];

    const whoItemsAdvance = t('courses.advancedCourse.whoItems', {
        returnObjects: true,
    }) as string[];

    const formatGroup = t('courses.advancedCourse.formatItems.group', {
        returnObjects: true,
    }) as string[];

    const formatIndividual = t(
        'courses.advancedCourse.formatItems.individual',
        {
            returnObjects: true,
        }
    ) as string[];

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
                                {t('hero.title')}{' '}
                                <span className="text-gold">
                                    {t('hero.name')}
                                </span>
                            </h1>
                            <p className="text-xl text-white mb-8">
                                {t('hero.subtitle')}
                            </p>
                            <a href="#contact">
                                <button className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold transition duration-300">
                                    {t('hero.button')}
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
                        <Trans
                            i18nKey="courses.sectionTitle"
                            components={{ 1: <span className="text-gold" /> }}
                        />
                    </h2>

                    {/* Basic Manicure Course */}
                    <div className="mb-16 bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <GraduationCap className="text-gold w-8 h-8" />
                                    {t('courses.basicManicure.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicManicure.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicManicure.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    {t('courses.basicManicure.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.basicManicure.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicManicure.who')}
                                </h4>

                                <ul className="space-y-3">
                                    {whoItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.program')}
                                </h4>
                                <ul className="space-y-3">
                                    {programItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicManicure.schedule')}
                                </h4>
                                <ul className="space-y-3">
                                    {scheduleItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-white"
                                        >
                                            <div className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                                                {idx + 1}
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.youGet')}
                                </h4>
                                <ul className="space-y-3">
                                    {youGetItems.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
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
                                    {t('courses.basicPedicure.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicPedicure.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.basicPedicure.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    {t('courses.basicPedicure.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.basicPedicure.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicPedicure.who')}
                                </h4>
                                <ul className="space-y-3">
                                    {whoItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicPedicure.program')}
                                </h4>
                                <ul className="space-y-3">
                                    {programItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Star className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.basicPedicure.format')}
                                </h4>
                                <ul className="space-y-3">
                                    {formatItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <Diamond className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="text-xl font-semibold text-gold mt-6 mb-4">
                                    {t('courses.basicManicure.youGet')}
                                </h4>
                                <ul className="space-y-3">
                                    {youGetItemsPedicure.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
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
                                    {t('courses.advancedCourse.title')}
                                </h3>
                                <div className="flex items-center gap-4 mt-3 text-gray-400">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.advancedCourse.duration')}
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gold" />
                                        {t('courses.advancedCourse.models')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-gold">
                                    {t('courses.advancedCourse.price')}
                                </p>
                                <p className="text-gray-400">
                                    {t('courses.advancedCourse.priceNote')}
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-gold mb-4">
                                    {t('courses.advancedCourse.who')}
                                </h4>
                                <ul className="space-y-3">
                                    {whoItemsAdvance.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-white"
                                        >
                                            <CheckCircle className="text-gold w-5 h-5 mr-3 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                                    <p className="text-white">
                                        <span className="text-gold font-semibold">
                                            {t(
                                                'courses.advancedCourse.importantNote.label'
                                            )}
                                        </span>{' '}
                                        {t(
                                            'courses.advancedCourse.importantNote.text'
                                        )}
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
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Отзывы <span className="text-gold">учениц</span>
                    </h2>

                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6 px-2 pb-4 w-max">
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
                                    name: 'Марина',
                                    review: 'Привет ☺️Я осталась в большом восторге 😍Я ехала вчера домой и все время улыбка на лице была 😅Я так тискала свой сертификат,не верилось что он мой 😅Наталия просто самый лучший учитель который может быть😘Девочки самые лучшие кураторы 😘❤️Очень нам помогали 🤗Мои курочки🤗😻Спасибо БОЛЬШОЕ Наталии,она многому научила и показала как правильно делать❤️❤️❤️Для себя я узнала все что хотела,а то что не хотела тоже узнала 😅Я очень рада была пройти обучение именно у Наталии😘И мы с девчонками обязательно вернемся на повышение,просто так мы от Вас не отстанем 🤣❤️❤️❤️😘😘😘',
                                },
                                {
                                    name: 'Света',
                                    review: 'Приветик всем! Хочу написать благодарность. Наталье за ее труд. Я думала что мне уже позно учиться маникюру. Но все привзошло моим ожиданиям. Благодаря Натальи  консультантам Виктории и Лилии. Я ещё больше поверила в себя. Девочки были так внимательны. Не оставляли нас на  секундочку',
                                },
                                {
                                    name: 'Лидия',
                                    review: 'Привет всем 😘 Хочу ещё раз поблагодарить нашего САНСЕЯ  Наталью и кураторов Викторию и Лилю за три прекрасных дня , проведенных вместе с вами. Я до сих пор ещё нахожусь под впечатлением  и целый день находясь на работе рассказывала о вас и нашей замечательной группе . Ещё раз огромное спасибо за ваш нелегкий труд, за ваше терпение и я обязательно приеду на повышение именно к вам. Я горжусь  вами и ваша студия самая лучшая!!!!❤️❤️❤️😘😘😘',
                                },
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="min-w-[280px] max-w-[320px] bg-gray-900 p-6 rounded-lg shadow-lg border border-gold/20 flex-shrink-0 flex flex-col h-auto"
                                >
                                    <div className="overflow-auto">
                                        <Quote className="text-gold w-6 h-6 mb-4" />
                                        <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                                            {testimonial.review}
                                        </p>
                                    </div>
                                    <p className="text-gold font-semibold mt-4">
                                        — {testimonial.name}
                                    </p>
                                </div>
                            ))}
                        </div>
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
