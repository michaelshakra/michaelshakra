export const metadata = {
  title: "Michael Shakra",
  description: "Brücken bauen zwischen Europa und dem Orient",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head />
      <body className="bg-emea-light text-emea-dark font-sans">
        {children}
      </body>
    </html>
  );
}
