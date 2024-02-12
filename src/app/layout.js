import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IT SKILLS",
  canonical: "https://itskills.uz/",
  description: "IT SKILLS",
  keywords:
    "IT skills, IT, skills айти ташкент, ayti toshkent, IT tashkent, ташкент программирование, toshkent dasturchilik, tashkent programmer, IT-парк, IT Park, IT Park, Информационные технологии, axborot texnologiyalari, information technologies, Компьютерные сети, Kompyuter tarmoqlari, computer networks, Системы безопасности, xavfsizlik tizimlari, security systems, Облачные технологии, bulutli texnologiyalar, cloud technologies, Мобильные приложения, mobil dasturlar, mobile aplications, Аналитика данных, ma'lumotlar tahlili, data analytics, Виртуальная реальность, virtual reallik, virtual reality, Робототехника, robototexnika, robotics, айти ташкент, ayti toshkent, ayti tashkent, IT Park, ayti park, ayti park, ayti park, технологии, texnologiyalar, technologies, стартап, startap, startups, startup, statup, startups, бизнес идея, biznes g'oya, business idea, инкубация, inkubatsiya, incubation, акселерация, akseleratsiya, acceleration, программист, dasturchi, programmer, релокация, relokatsiya, relocation, Itpark, Startups, Residents, Bpo, IT-center, IT-education, Outsourcing, Robotics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
