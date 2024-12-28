import React from 'react';
import Calculator from './Calculator';

const Home = () => {
  return (
    <div>
      <h1>Строительство домов</h1>
      <p>В команде компании работают высококвалифицированные специалисты, включая архитекторов, инженеров и строителей с многолетним опытом.
Компания активно инвестирует в обучение и развитие своих сотрудников, что позволяет поддерживать высокий уровень профессионализма.
Руководство компании состоит из опытных менеджеров, которые имеют успешный опыт работы в строительной отрасли и управлении проектами.</p>
      <Calculator />
      <section>
        <h2>Отзывы клиентов</h2>
        <ul>
          <li>Анна и Сергей Петровы

"Мы обратились в Архитектура Комфорта для строительства нашего первого дома, и остались в полном восторге! С самого начала команда проявила высокий уровень профессионализма и внимательности к нашим пожеланиям. Проект был разработан быстро и с учетом всех наших требований. Строительство прошло в срок, а качество работ превзошло наши ожидания. Теперь у нас есть уютный дом, в котором мы счастливо живем. Рекомендуем всем!"</li>
          <li>Игорь Сидоров

"Хочу выразить благодарность Архитектура Комфорта за отличную работу! Я долго искал надежного подрядчика для строительства дачи, и, наконец, нашел. Команда профессионалов помогла мне на каждом этапе — от проектирования до отделки. Особенно понравился калькулятор стоимости, который позволил заранее понять, какие расходы нас ожидают. Все было сделано качественно и в срок. Обязательно буду рекомендовать вас своим друзьям!"</li>
          <li>Елена Кузнецова

"С Архитектура Комфорта мы строили дом для нашей семьи. В целом, мы довольны результатом. Работы были выполнены качественно, и команда всегда была на связи, что очень важно. Единственное, что хотелось бы улучшить — это скорость выполнения некоторых этапов. Но в целом, мы получили именно тот дом, о котором мечтали. Спасибо за вашу работу!"
</li>
        </ul>
      </section>
      <footer>
        <p>Контактная информация (8 (999) 177-17-17, info@architecturecomfort.ru, г. Москва, ул. Примерная д. 10)</p>
      </footer>
    </div>
  );
};

export default Home;