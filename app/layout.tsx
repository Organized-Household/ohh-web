export const metadata = {
  title: "Organized Household",
  description: "OHh Platform Bootstrap"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#f5f5f5"
        }}
      >
        {children}
      </body>
    </html>
  );
}
