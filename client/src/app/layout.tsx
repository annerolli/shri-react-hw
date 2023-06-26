import './globals.css';
import s from './layout.module.css';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { APP_DESCRIPTION, APP_TITLE } from '@/shared/config';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={clsx(roboto.className, s.layout)}>
        <Header className={s.layout_header} />
        <main className={s.layout_main}>{children}</main>
        <Footer className={s.layout_footer} />
      </body>
    </html>
  );
}
