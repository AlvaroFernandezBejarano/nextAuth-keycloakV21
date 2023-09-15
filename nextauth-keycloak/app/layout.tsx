"use client";

import "./globals.scss";
import { Navbar } from "@/components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "NextAuth keycloak integration",
  description: "Template nextauth+keycloak v21 with roles and logout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid-container">
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
