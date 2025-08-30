'use client';

import { useCookieConsent } from '../hooks/useCookieConsent';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const CookieBanner = () => {
  const { isVisible, acceptCookies, declineCookies } = useCookieConsent();
  const pathname = usePathname();
  const [isPolicyPage, setIsPolicyPage] = useState(false);

  // Определяем, является ли текущая страница страницей с документами
  useEffect(() => {
    const policyPages = ['/privacy-policy', '/data-processing-policy', '/public-offer'];
    setIsPolicyPage(policyPages.includes(pathname));
  }, [pathname]);

  // Блокируем скролл только для модального баннера (не для страниц с документами)
  useEffect(() => {
    if (isVisible && !isPolicyPage) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Очистка при размонтировании
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isVisible, isPolicyPage]);

  if (!isVisible) {
    return null;
  }

  // Баннер для страниц с документами (правый нижний угол)
  if (isPolicyPage) {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 modal-content">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Использование файлов cookie
            </h3>
            
            <p className="text-xs text-gray-600 mb-3">
              Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie.
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-xs hover:bg-blue-700 transition-colors font-medium"
              >
                Принять
              </button>
              
              <button
                onClick={declineCookies}
                className="flex-1 text-gray-600 px-3 py-1.5 rounded border border-gray-300 text-xs hover:bg-gray-50 transition-colors"
              >
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Модальный баннер для остальных страниц
  return (
    <>
      {/* Размытие фона без затемнения */}
      <div className="fixed inset-0 backdrop-blur-sm z-50 modal-backdrop" />
      
      {/* Модальное окно */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto modal-content">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Использование файлов cookie
            </h2>
            
            <div className="text-sm text-gray-600 mb-6 space-y-3">
              <p>
                Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie.
              </p>
              
              <p>
                Вы можете изменить настройки своего браузера и отказаться от сохранения 
                файлов cookies:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>
                  <a 
                    href="https://support.google.com/accounts/answer/61416?hl=ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a 
                    href="https://browser.yandex.ru/help/personal-data-protection/cookies.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Яндекс.Браузер
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.mozilla.org/ru/kb/otklyuchenie-kukov-so-storonnih-sajtov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Принять все
              </button>
              
              <Link
                href="/privacy-policy"
                className="flex-1 text-center text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors font-medium"
              >
                Политика обработки ПД
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={declineCookies}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Отклонить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


