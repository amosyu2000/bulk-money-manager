import '@/app/ui/global.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultColorScheme = "auto";

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <MantineProvider defaultColorScheme={defaultColorScheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}