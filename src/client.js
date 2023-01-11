import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "j15yirv0",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
