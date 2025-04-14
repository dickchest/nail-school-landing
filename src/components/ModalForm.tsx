import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    prefillMessage: string;
    handleWhatsApp: (name: string, email: string, message: string) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose, prefillMessage, handleWhatsApp }) => {
    const { t } = useTranslation();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-lg p-8 w-full max-w-lg relative border border-gold/20">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gold text-2xl"
                >
                    ×
                </button>
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    {t('contact.title')} <span className="text-gold">{t('contact.highlight')}</span>
                </h2>
                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleWhatsApp(
                            nameRef.current?.value || '',
                            emailRef.current?.value || '',
                            messageRef.current?.value || ''
                        );
                        onClose();
                    }}
                >
                    <input
                        type="text"
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg text-white"
                        ref={nameRef}
                    />
                    <input
                        type="email"
                        placeholder={t('contact.emailPlaceholder')}
                        className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg text-white"
                        ref={emailRef}
                    />
                    <textarea
                        rows={4}
                        placeholder={t('contact.messagePlaceholder')}
                        className="w-full p-3 bg-white/10 border border-gold/20 rounded-lg text-white"
                        ref={messageRef}
                        defaultValue={prefillMessage}
                    />
                    <button
                        type="submit"
                        className="bg-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                    >
                        {t('contact.button')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
