import sanityClient from "@sanity/client";
import dotenv from "dotenv";
dotenv.config();

export default sanityClient({
  projectId: "uszsktca",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-07-21",
  token: process.env.SANITY_API_TOKEN,
});
