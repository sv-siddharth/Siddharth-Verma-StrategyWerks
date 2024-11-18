import { SiteHeader } from "./components/site-header";
import Landing from "./pages/landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="p-4">
        <Landing />
      </main>
    </div>
  );
}