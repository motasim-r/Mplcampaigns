import CampaignsPage from "./components/CampaignsPage";
import AudiencePage from "./components/AudiencePage";
import AthenaPage from "./components/AthenaPage";
import StorefrontPage from "./components/StorefrontPage";

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath === "/audience") {
    return <AudiencePage />;
  }

  if (normalizedPath === "/athena") {
    return <AthenaPage />;
  }

  if (normalizedPath === "/storefront") {
    return <StorefrontPage />;
  }

  return <CampaignsPage />;
}
