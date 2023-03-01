import Map from '@components/Map';

import '../styles/globals.css';

export const metadata = {
  title: 'Baro-Cyclo',
  description: 'Fait-il bon rouler chez toi ?',
};

const getPlaces = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/api/places`, {cache: 'no-store'});

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function RootLayout({children}: {
  children: React.ReactNode;
}) {
  const places = await getPlaces();

  return (
    <html lang="fr">
    <body>
      <Map places={places.data}>{children}</Map>
    </body>
    </html>
  );
}