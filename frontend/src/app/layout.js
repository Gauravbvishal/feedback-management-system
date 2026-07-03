import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "FeedPulse",
  description: "Customer Feedback Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        {children}
      </body>
    </html>
  );
}