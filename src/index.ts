import "./lib/polyfill";
// import { fetch } from "undici";
import { createServer, RequestListener } from "http";

import { OgImage } from "./og";
import { svg2png } from "./svg/svg2png";

const TEST_DATA = {
  name: "Merchstack",
  location: "Houston, TX",
  jobType: "Full-Time",
  icon: "https://img.icons8.com/fluency/512/twitter.png",
  tags: [
    "Full-Stack Programming",
    "Adobe Creative Suite",
    "HTML / CSS",
    "Javascript",
    "PHP",
    "Wordpress",
  ],
};

const requestHandler: RequestListener = async (req, res) => {
  // const url = new URL(req.url!, "https://aviyel.com");
  // const jobId = +url.searchParams.get("job")!;
  // const jobData = await fetch(`.../${jobId}`).then((x) => x.json());

  const buffer = await svg2png({ element: OgImage({ data: TEST_DATA }) });

  res.setHeader("Content-Type", "image/png");
  res.end(buffer);
};

if (import.meta.env.PROD) {
  createServer(requestHandler).listen(8080);
}

// For dev
export { requestHandler as viteNodeApp };
