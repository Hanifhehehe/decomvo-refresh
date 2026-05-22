'use client';

import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { ScrollEffects } from '@/components/scroll-effects';
import { SiteHeader } from '@/components/site-header';

export function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudioRoute = pathname === '/studio' || pathname.startsWith('/studio/');

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <main className="w-full overflow-x-hidden bg-white">{children}</main>
      <SiteFooter />
      <ScrollEffects />
    </>
  );
}
