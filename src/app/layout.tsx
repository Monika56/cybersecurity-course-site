// =========================================================
// FILE: src/app/layout.tsx
// =========================================================
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue–Cloud Cyber Lab",
  description: "Hands-on cybersecurity curriculum with daily challenges (Colab + GCP)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-6xl mx-auto px-4 py-6">
          {children}
          <footer className="text-xs text-slate-500 py-10">© {new Date().getFullYear()} Blue–Cloud Cyber Lab • Educational, ethical use only.</footer>
        </div>
>>>>>>> a0d1063 (edited env local file)
      </body>
    </html>
  );
}
