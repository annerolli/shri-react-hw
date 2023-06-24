'use client';

import { ElementType, FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import s from './logo.module.css';
import { Title } from '@/shared/ui/typography';

interface Props {
  children?: never;
}

const title = 'Билетопоиск';

export const Logo: FC<Props> = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const elementType: ElementType = isMainPage ? 'h1' : 'h2';

  return (
    <Title className={s.logo} as={elementType} weight={700}>
      {isMainPage ? title : <Link href="/">{title}</Link>}
    </Title>
  );
};
