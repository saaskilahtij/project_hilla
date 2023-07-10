import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import project from "./sanity/schemas/schemas";


const config = defineConfig({
  projectId: "4rgy654h",
  dataset: "production",
  title: "kultamarja",
  apiVersion: "2023-06-07",
  basePath: "/admin",
  plugins: [deskTool()], 
  schema: { types: [project] }
})


export default config;