//The main page component that renders your portfolio
import dynamic from "next/dynamic";

// Use dynamic import for the client component
const BakingPortfolio = dynamic(() => import("./components/bakingportfolio"), {
  ssr: false,
});

export default function Home() {
  return <BakingPortfolio />;
}
