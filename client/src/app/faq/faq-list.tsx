import s from './faq-list.module.css';
import { FC } from 'react';
import { items } from './model';
import { Accordion } from '@/shared/ui/accordion';
import { Paragraph } from '@/shared/ui/typography';

export const FaqList: FC = () => {
  return (
    <ul className={s.list}>
      {items.map(({ question, answer }, index) => {
        return (
          <li key={index}>
            <Accordion header={question}>
              <Paragraph>{answer}</Paragraph>
            </Accordion>
          </li>
        );
      })}
    </ul>
  );
};
