import React from 'react';

const SpecialCategoryConsent = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#1a202c' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
              Согласие на обработку персональных данных специальной категории
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Я, лицо (далее – «Пользователь»), достигшее на момент дачи настоящего согласия возраста 18 (восемнадцати) лет, 
                подтвердившее настоящее согласие в Сервисах Оператора путем проставления соответствующей «галочки», 
                даю свое согласие на обработку сообщенных мной в целях использования ИИ-сервиса «Лаборатория молодости PREVENTUM» 
                в соответствии с <a href="/public-offer" className="text-blue-600 hover:text-blue-800 underline">Публичной офертой</a> 
                персональных данных специальной категории, а именно:
              </p>

              <div className="mb-6">
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>результаты анализов и иных лабораторных исследований, данных о состоянии здоровья.</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Согласие является конкретным, предметным, информированным, сознательным и однозначным.
              </p>

              <p className="text-gray-700 mb-6">
                Оператор обрабатывает персональные данные указанной специальной категории в соответствии с 
                <a href="/data-processing-policy" className="text-blue-600 hover:text-blue-800 underline"> Политикой в области обработки и обеспечения безопасности персональных данных</a> 
                любыми способами, необходимыми для использования Сервиса, как с использованием средств автоматизации, 
                так и без использования таких средств следующими способами: сбор, запись, систематизация, накопление, 
                хранение, уточнение (обновление, изменение), извлечение, использование, передача (распространение, 
                предоставление, доступ), блокирование, удаление, уничтожение.
              </p>

              <p className="text-gray-700 mb-6">
                Обработка предоставляемых Пользователем специальной категории персональных данных осуществляется 
                в соответствии с целями, установленными 
                <a href="/data-processing-policy" className="text-blue-600 hover:text-blue-800 underline"> Политикой Оператора в области обработки и обеспечения безопасности персональных данных</a>.
              </p>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Пользователь вправе отозвать свое согласие путем направления Оператору заявления:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    в письменной форме по адресу: <strong>Московская обл., Ногинский район, город Старая Купавна, ул. Ленина, д.57, кв.40</strong>
                  </li>
                  <li>
                    в форме электронного документа по адресу электронной почты: <strong>zakupkinadezhno@gmail.com</strong>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                Оператор рассматривает заявление и дает ответ на запрос в течение 10 рабочих дней с момента его получения.
              </p>

              <p className="text-gray-700 mb-8">
                В случае отзыва согласия обработка персональных данных должна быть прекращена Оператором, 
                и персональные данные Пользователя должны быть уничтожены в порядке предусмотренным 
                <a href="/data-processing-policy" className="text-blue-600 hover:text-blue-800 underline"> Политикой Оператора в области обработки и обеспечения безопасности персональных данных</a>.
              </p>

              <div className="border-t pt-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Контактная информация</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>ИП Бурмистров Илья Борисович, ИИ-сервис «Лаборатория молодости»</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Адрес:</strong> Московская обл., Ногинский район, город Старая Купавна, ул. Ленина, д.57, кв.40
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Телефон:</strong> 8-916-9898522
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>ИНН:</strong> 503111822990
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>ОГРНИП:</strong> 319508100184260
                  </p>
                  <p className="text-gray-700">
                    <strong>E-mail:</strong> zakupkinadezhno@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCategoryConsent;
