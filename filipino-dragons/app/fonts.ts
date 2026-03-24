import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const moderniz = localFont({
  src: '../public/font/Moderniz.otf',
  variable: '--font-moderniz',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700', '900'],
});