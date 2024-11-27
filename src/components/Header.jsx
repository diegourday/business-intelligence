import Gobpe from "@/icons/Gobpe";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      event.preventDefault();
      const yOffset = -100;
      const element = document.getElementById(
        event.target.getAttribute("href").substring(1),
      );
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll("a.nav-link");
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () =>
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-[100px] max-w-[1120px] items-center justify-between">
        <a href="https://www.gob.pe/">
          <Gobpe className="h-10" />
        </a>
        <ul className="flex">
          <a href="#informacion" className="nav-link">
            Monitoreo de la Distribución
          </a>
          <a href="#reportes" className="nav-link">
            Visualización de Datos
          </a>
          <a href="#conclusiones" className="nav-link">
            Conclusiones
          </a>
          <a href="#equipo" className="nav-link">
            Equipo
          </a>
        </ul>
      </nav>
    </header>
  );
}
