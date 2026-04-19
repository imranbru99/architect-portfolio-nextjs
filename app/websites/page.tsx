import { Metadata } from "next";
import WebsitesClient from "./WebsitesClient";

export const metadata: Metadata = {
  title: "Websites Showcase | Imran Ahmed - Senior Full-Stack Developer",
  description: "A curated showcase of nearly 100 modern web applications developed with Laravel and WordPress, focused on performance, security, and high conversion.",
  keywords: "laravel websites, wordpress portfolio, custom web apps, senior developer portfolio, imran ahmed",
};

export default function WebsitesPage() {
  return <WebsitesClient />;
}