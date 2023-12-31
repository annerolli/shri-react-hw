import { Card } from '@/shared/ui/card';
import s from './page.module.css';
import { Paragraph, Title } from '@/shared/ui/typography';
import { FC } from 'react';
import { createPageTitle } from '@/shared/lib/app';

const PAGE_TITLE = 'О нас';

const AboutPage: FC = () => {
  return (
    <Card>
      <Title weight={600}>{PAGE_TITLE}</Title>
      <Paragraph className={s.page_paragrph}>
        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
        фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео
        и интересные факты, поставить фильмам оценки, написать рецензии и
        дополнить описание фильмов.
      </Paragraph>
      <Paragraph className={s.page_paragrph}>
        Был запущен в 2003 году. Портал предоставляет пользователям информацию о
        фильмах и их создателях, новости кино, интервью с актерами и другими
        знаменитостями, рецензии пользователей, расписание сеансов в
        кинотеатрах, ТВ-программу и другие разделы.
      </Paragraph>
      <Paragraph className={s.page_paragrph}>
        Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и
        Дмитрий Суханов. Владельцем проекта являлась компания ООО «Билетопоиск»,
        которой принадлежало 60 % акций проекта, 40 % акций принадлежало её
        совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года
        сервис купила компания «Яндекс» (размер сделки — $80 млн, около 2,6 млрд
        рублей на то время).
      </Paragraph>
    </Card>
  );
};

export const metadata = {
  title: createPageTitle(PAGE_TITLE),
};

export default AboutPage;
