import React, { useState } from 'react';
import type { ContactFormData } from '../../types';
import Button from '../ui/Button';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.nameRequired');
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.form.nameMin');
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contact.form.emailInvalid');
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.messageMin');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    
    // Réinitialiser le statut de soumission
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Vérifier que les variables d'environnement sont configurées
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Préparer les paramètres du template EmailJS (réception sur meninaabdelhakim@gmail.com)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Abdelhakim MENINA',
        to_email: 'meninaabdelhakim@gmail.com',
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      // Succès
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          {t('contact.title')}
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          {t('contact.description')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Colonne gauche - Informations de contact */}
          <div className="flex flex-col">
            <div className="flex-1 bg-gradient-to-br from-primary-500/10 via-blue-500/10 to-primary-500/10 dark:from-primary-500/20 dark:via-blue-500/20 dark:to-primary-500/20 rounded-2xl p-4 sm:p-6 md:p-8 border border-primary-200/50 dark:border-primary-500/30 shadow-xl h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 dark:text-gray-100">
                {t('contact.infoTitle')}
              </h3>
              
              <div className="flex-1 flex flex-col gap-3 sm:gap-4 justify-between">
                {/* Email */}
                <div className="group flex-1 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-primary-400/50 dark:hover:border-primary-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/60 transition-colors duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">{t('contact.email')}</div>
                      <a 
                        href="mailto:meninaabdelhakim@gmail.com" 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline text-xs sm:text-sm break-all transition-colors duration-300"
                      >
                        meninaabdelhakim@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="group flex-1 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-primary-400/50 dark:hover:border-primary-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/60 transition-colors duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">{t('contact.phone')}</div>
                      <a 
                        href="tel:+33698241257" 
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline text-sm sm:text-base transition-colors duration-300"
                      >
                        +33 6 98 24 12 57
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localisation */}
                <div className="group flex-1 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hover:border-primary-400/50 dark:hover:border-primary-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/60 transition-colors duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">{t('contact.location')}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        {t('contact.locationValue')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 space-y-6 border border-gray-200/60 dark:border-gray-700/60 h-full flex flex-col"
              noValidate
            >
          {/* Message de succès */}
          {submitStatus === 'success' && (
            <div
              className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
              role="alert"
              aria-live="polite"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="font-medium">
                  {t('contact.form.success')}
                </p>
              </div>
            </div>
          )}

          {/* Message d'erreur générale */}
          {submitStatus === 'error' && Object.keys(errors).length > 0 && (
            <div
              className="p-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
              role="alert"
              aria-live="assertive"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="font-medium">
                  {t('contact.form.error')}
                </p>
              </div>
            </div>
          )}

          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t('contact.form.name')} <span className="text-red-500">{t('contact.form.required')}</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500 ${
                errors.name
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder={t('contact.form.namePlaceholder')}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t('contact.form.email')} <span className="text-red-500">{t('contact.form.required')}</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500 ${
                errors.email
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder={t('contact.form.emailPlaceholder')}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              {t('contact.form.message')} <span className="text-red-500">{t('contact.form.required')}</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:border-primary-400 dark:hover:border-primary-500 resize-none ${
                errors.message
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              placeholder={t('contact.form.messagePlaceholder')}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Bouton Submit */}
          <div className="flex justify-center mt-auto pt-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
            </Button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

