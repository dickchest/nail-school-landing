import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';



export default function Navbar() {
    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { href: '#courses', label: t('navbar.courses') },
        { href: '#schedule', label: t('navbar.schedule') },
        { href: '#gallery', label: t('navbar.gallery') },
        { href: '#testimonials', label: t('navbar.testimonials') },
        { href: '#video', label: t('navbar.videos') },
        { href: '#contact', label: t('navbar.contact') },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black border-b border-gold z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
                <a
                    href="https://www.instagram.com/chaykovskaya_pronails"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/logo.png"
                        alt="Diva Nails Bar Logo"
                        className="h-10"
                    />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm md:text-base">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="hover:text-gold transition"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Burger Menu Button */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => i18n.changeLanguage('ru')}
                        className="hover:text-gold"
                    >
                        🇷🇺
                    </button>
                    <button
                        onClick={() => i18n.changeLanguage('de')}
                        className="hover:text-gold"
                    >
                        🇩🇪
                    </button>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden focus:outline-none ml-8"
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-gold px-4 pb-4">
                    <ul className="flex flex-col space-y-4 pt-4 text-sm text-right">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="block text-white hover:text-gold transition"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
