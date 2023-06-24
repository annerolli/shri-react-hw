import { Card } from '@/shared/ui/card';
import { Title } from '@/shared/ui/typography';
import { FC } from 'react';
import { FaqList } from './faq-list';

const Faq: FC = () => {
  return (
    <>
      <Card>
        <Title weight={600}>Вопросы-ответы</Title>
      </Card>
      <FaqList />
    </>
  );
};

export default Faq;
