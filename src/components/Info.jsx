export default function Info() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <section id="informacion" className="mx-auto max-w-[720px] px-6 pt-14">
      <a
        href="https://www.gob.pe/minem"
        className="text-blue text-xl font-bold underline"
      >
        Ministerio de Energía y Minas
      </a>
      <h2 className="mt-4 text-4xl font-bold leading-9">
        Monitoreo de la Distribución de GLP en Ica en el año 2024
      </h2>
      <span className="mt-2.5 inline-block bg-gray-100 px-2 py-1.5 text-sm font-bold leading-5 text-[#4d4d4d]">
        ESTUDIO
      </span>
      <p className="mt-4">
        El GLP es un recurso esencial para miles de hogares, empresas e
        industrias, por lo que garantizar su correcta distribución resulta clave
        para el desarrollo sostenible de la región.
      </p>
      <img src="/info.jpg" alt="Info Image" className="mt-4 rounded" />
      <p className="mt-2">27 de noviembre de 2024 - {currentTime}</p>
    </section>
  );
}
