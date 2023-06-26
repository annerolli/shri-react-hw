import { Card } from '@/shared/ui/card';
import { Title } from '@/shared/ui/typography';
import { FC } from 'react';
import { FaqList } from './faq-list';
import { createPageTitle } from '@/shared/lib/app';

const PAGE_TITLE = 'Вопросы-ответы';

const Faq: FC = () => {
  return (
    <>
      <Card>
        <Title weight={600}>{PAGE_TITLE}</Title>
      </Card>
      <FaqList />
    </>
  );
};

export const metadata = {
  title: createPageTitle(PAGE_TITLE),
};

export default Faq;
