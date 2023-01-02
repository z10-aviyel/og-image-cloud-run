import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';

import { Inter } from '../font/inter';

async function svg2png({ element }: { element: React.ReactNode }) {
  const svg = await satori(element, {
    fonts: await Inter(),
    width: 1200,
    height: 630,
  });

  const resvg = new Resvg(svg);

  return resvg.render().asPng();
}

export { svg2png };
