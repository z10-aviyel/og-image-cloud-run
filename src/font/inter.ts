import type { SatoriOptions } from 'satori';
import { fetch } from 'undici';

type FontOption = SatoriOptions['fonts'];

async function fetchBuffer(url: string) {
  const response = await fetch(url);
  return response.arrayBuffer();
}

async function loadInter(): Promise<FontOption> {
  // Links generated from
  // curl https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700

  // Load all in parallel
  const inter400 = fetchBuffer(
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf'
  );
  const inter500 = fetchBuffer(
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf'
  );
  const inter600 = fetchBuffer(
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZg.ttf'
  );
  const inter700 = fetchBuffer(
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf'
  );
  return [
    { data: await inter400, name: 'Inter', weight: 400 },
    { data: await inter500, name: 'Inter', weight: 500 },
    { data: await inter600, name: 'Inter', weight: 600 },
    { data: await inter700, name: 'Inter', weight: 700 },
  ];
}

let fontInitPromise: ReturnType<typeof loadInter> | undefined;

function Inter() {
  if (!fontInitPromise) {
    fontInitPromise = loadInter();
  }
  return fontInitPromise;
}

export { Inter };
