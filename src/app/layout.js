import ThemeProvider from "@/components/UI/ThemeProvider";
import "./globals.scss";

export const metadata = {
  title: "ApexPrep AI | Master UPSC, GATE & Java",
  description: "An AI-powered localized platform for competitive exam preparation and technical skill-building.",
  icons : {
    icon : '/logo.png'
  }
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className="antialiased relative">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
