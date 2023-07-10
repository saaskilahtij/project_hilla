import { createClient, groq } from "next-sanity";


// todo: a function that gets the amount of cloudberries from sanity


export async function getProjects() {

  const client = createClient({
    projectId: "4rgy654h",
    dataset: "production",
    apiVersion: "2023-06-07",
  });



  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      title,
      date,
      "image": image.asset->url, 
      content,
    }`
  )
}


export async function getCloudberries() {

  const client = createClient({
    projectId: "4rgy654h",
    dataset: "production",
    apiVersion: "2023-06-07",
  });

  return client.fetch(
    groq`*[_type == "cloudberriesAmount"]{
      _id,
      _createdAt,
      amount,
    }`
  )
}