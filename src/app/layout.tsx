import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aidan Herderschee — Theoretical Physicist",
  description:
    "Personal academic website of Aidan Herderschee, theoretical physicist at the Institute for Advanced Study, Princeton.",
  openGraph: {
    title: "Aidan Herderschee — Theoretical Physicist",
    description:
      "Personal academic website of Aidan Herderschee, theoretical physicist at the Institute for Advanced Study, Princeton.",
    url: "https://aidanh17.github.io",
    siteName: "Aidan Herderschee",
    type: "website",
    images: [{ url: "https://aidanh17.github.io/headshot.jpg", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary",
    title: "Aidan Herderschee — Theoretical Physicist",
    description:
      "Theoretical physicist at the Institute for Advanced Study, Princeton.",
    images: ["https://aidanh17.github.io/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
