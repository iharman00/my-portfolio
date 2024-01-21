import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const PROJECT_ID = "7l5gl5lp";
const DATASET = "production";

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: "2024-01-17",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getSkills() {
  const result =
    await client.fetch(`*[_type == "categories"] | order(index asc){
    name,
    icon,
      "skills": *[_type == "skills" && references(^._id)] | order(index asc) {
        name,
        alt,
        icon,
      }
    }`);
  return result;
}

export async function getProjects() {
  const result = await client.fetch(`*[_type == "projects"] | order(index asc){
    title,
      description,
    siteLink,
    codeLink,
    image,
    imgAlt,
    "techStack": techStack[]->{
        name,
        alt,
        icon,
    }
    }`);
  return result;
}

export async function getSocials() {
  const result = await client.fetch(`*[_type == "socials"] | order(index asc){
    name,
    alt,
    link,
    icon
    }`);
  return result;
}

export async function getSection() {
  const result = await client.fetch(`*[_type == "sections"] | order(index asc){
    title,
    content,
    img,
    imgAlt
    }`);
  return result;
}
