import { GoogleTagManager as NextGoogleTagManager } from '@next/third-parties/google';

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gtmId) {
    return null;
  }

  return <NextGoogleTagManager gtmId={gtmId} />;
}
