export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100dvh] w-full bg-black text-white">
      {children}
    </div>
  );
}
