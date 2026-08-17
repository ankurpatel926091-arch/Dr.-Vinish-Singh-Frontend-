// Web3Forms Configuration
// Current Access Key linked to testing Gmail: ankurpatel926091@gmail.com
// To change recipient email before production deployment:
// 1. Register a new Access Key at https://web3forms.com using the doctor's official Gmail.
// 2. Update VITE_WEB3FORMS_ACCESS_KEY in .env or replace the default fallback string below.

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "c0ecd988-cfdf-4e23-9944-cfa4332eb163";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
