import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Signfold | OAuth Once, Follow Everywhere",
  description: "Signfold - Modern UI Components",
  icons: {
    icon: "https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif",
    shortcut: "https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif",
    apple: "https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital@0;1&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/gif" href="https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif" />
        <link rel="shortcut icon" type="image/gif" href="https://cslplhzfcfvzsivsgrpc.supabase.co/storage/v1/object/public/img/Signfold.gif" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
