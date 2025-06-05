import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page d'accueil" },
    { name: "description", content: "Page d'accueil du TD2" },
  ];
}

export default function Home() {
  return <Welcome />;
}
