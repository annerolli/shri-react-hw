'use client';

import { FC, HTMLAttributes, ReactNode } from 'react';
import { Card } from '../card';
import { Headline } from '../typography';
import { IconButton } from '../icon-button';
import s from './accordion.module.css';
import { IconDropDown } from '@/shared/icons';
import { useAccordion } from './use-accordion';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: ReactNode;
  children: ReactNode;
}

export const Accordion: FC<Props> = ({ header, children, ...props }) => {
  const { isVisible, toggle } = useAccordion();

  return (
    <Card {...props}>
      <header className={s.header}>
        <Headline as="h5" weight={600}>
          {header}
        </Headline>
        <IconButton onClick={toggle}>
          <IconDropDown
            width={32}
            height={32}
            className={clsx(isVisible && s['icon_dropdown-reverse'])}
          />
        </IconButton>
      </header>
      <div className={clsx(s.content, isVisible && s['content-visible'])}>
        {children}
      </div>
    </Card>
  );
};
