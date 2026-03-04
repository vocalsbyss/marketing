
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "VIKISHA Invisible Grills | Best Invisible Grills in Visakhapatnam",
  description: "Premium invisible grills for balconies and windows in Vizag.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}