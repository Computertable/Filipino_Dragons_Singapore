import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { moderniz, montserrat} from './fonts';

export const metadata = {
  title: "Filipino Dragons Singapore",
  description: "Power. Unity. Excellence on the Water.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${moderniz.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}