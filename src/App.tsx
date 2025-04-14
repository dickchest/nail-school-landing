import React from 'react';
import ModalForm from './components/ModalForm';
import { useState } from 'react';
import ScheduleSection from './components/ScheduleSection';
import Navbar from './components/Navbar';
import { useTranslation, Trans } from 'react-i18next';
import {
    // Sparkles,
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

function App() {
    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState('');

    const handleCourseClick = (courseKey: string) => {
        const translated = t(`contact.preFilledMessages.${courseKey}`);
        setPrefillMessage(translated);
        setModalOpen(true);
    };

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

    const formatGroup = t('courses.advancedCourse.formatItems.group.details', {
        returnObjects: true,
    }) as string[];

    const formatIndividual = t(
        'courses.advancedCourse.formatItems.individual.details',
        {
            returnObjects: true,
        }
    ) as string[];

    const testimonials = t('testimonials.list', { returnObjects: true }) as {
        name: string;
        review: string;
    }[];

    const handleWhatsApp = () => {
        const name =
            (document.querySelector('#name') as HTMLInputElement)?.value || '';
        const email =
            (document.querySelector('#email') as HTMLInputElement)?.value || '';
        const message =
            (document.querySelector('#message') as HTMLTextAreaElement)
                ?.value || '';

        const fullMessage = t('whatsapp.message', { name, email, message });
        const phone = '4917662521437'; // твой номер в международном формате без +

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            fullMessage
        )}`;
        window.open(url, '_blank');
    };

    const handleWhatsApp2 = (name: string, email: string, message: string) => {
        const fullMessage = t('whatsapp.message', { name, email, message });
        const phone = '4917662521437';
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

                        {/* КНОПКА */}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('basicManicure')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
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
                        {/* КНОПКА педикюр */}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('basicPedicure')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Advanced Course */}
                    <div className="bg-black p-8 rounded-lg border border-gold/20 shadow-2xl shadow-gold/10">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 break-words">
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
                                <p className="text-3xl sm:text-3xl font-bold text-gold">
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
                                    {t('courses.advancedCourse.format')}
                                </h4>
                                <ul className="space-y-6">
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            {t(
                                                'courses.advancedCourse.formatItems.group.label'
                                            )}
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            {formatGroup.map(
                                                (detail: string, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center"
                                                    >
                                                        <Star className="text-gold w-4 h-4 mr-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                    <li className="text-white">
                                        <p className="font-semibold mb-2">
                                            {t(
                                                'courses.advancedCourse.formatItems.individual.label'
                                            )}
                                        </p>
                                        <ul className="space-y-2 ml-4">
                                            {formatIndividual.map(
                                                (detail: string, i: number) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center"
                                                    >
                                                        <Star className="text-gold w-4 h-4 mr-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* КНОПКА повышение*/}
                        <div className="mt-8 text-center">
                            <a href="#contact">
                                <button
                                    onClick={() =>
                                        handleCourseClick('advanced')
                                    }
                                    className="bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold transition duration-300"
                                >
                                    {t('courses.common.wantButton')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div id="gallery" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        {t('ourWork.title')}
                        {''}
                        <span className="text-gold">
                            {t('ourWork.highlight')}
                        </span>
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
                        {t('testimonials.title')}{' '}
                        <span className="text-gold">
                            {t('testimonials.highlight')}
                        </span>
                    </h2>

                    <Swiper
                        spaceBetween={16}
                        slidesPerView="auto"
                        grabCursor={true}
                        mousewheel={true}
                        breakpoints={{
                            640: {
                                spaceBetween: 24,
                            },
                            1024: {
                                spaceBetween: 32,
                            },
                        }}
                        className="pb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="w-[280px]">
                                <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gold/20 h-full">
                                    <Quote className="text-gold w-6 h-6 mb-4" />
                                    <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">
                                        {testimonial.review}
                                    </p>
                                    <p className="text-gold font-semibold mt-4">
                                        — {testimonial.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Schedule Section */}
            <ScheduleSection />

            {/* Video Section */}
            <div id="video" className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        {t('video.title')}{' '}
                        <span className="text-gold">
                            {t('video.highlight')}
                        </span>
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
                        {t('contact.title')}{' '}
                        <span className="text-gold">
                            {t('contact.highlight')}
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 text-white">
                            <div className="flex items-center">
                                <MapPin className="text-gold w-6 h-6 mr-4" />
                                <a
                                    href="https://www.google.com/maps?q=Mülheimer+Str.+83,+45145+Essen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gold transition"
                                >
                                    Mülheimer Str. 83, 45145 Essen
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
                                className="flex items-center hover:text-gold transition"
                            >
                                <Instagram className="text-gold w-6 h-6 mr-4" />
                                <p>@chaykovskaya_pronails</p>
                            </a>
                        </div>

                        {/* Форма */}
                        <form className="space-y-4">
                            <input
                                id="name"
                                type="text"
                                placeholder={t('contact.namePlaceholder')}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder={t('contact.emailPlaceholder')}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            />
                            <textarea
                                id="message"
                                placeholder={t('contact.messagePlaceholder')}
                                rows={4}
                                className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg focus:outline-none focus:border-gold text-white"
                            ></textarea>
                            <button
                                onClick={handleWhatsApp}
                                className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                            >
                                {t('contact.button')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <ModalForm
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                prefillMessage={prefillMessage}
                handleWhatsApp={handleWhatsApp2}
            />

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>{t('footer')}</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
