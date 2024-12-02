export default function Info() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <section id="informacion" className="mx-auto max-w-[720px] px-6 pt-14">
      <a
        href="https://www.gob.pe/minam"
        className="text-xl font-bold text-blue underline"
      >
        Ministerio del Ambiente
      </a>
      <h2 className="mt-4 text-4xl font-bold leading-9">
        Análisis de la calidad del aire en Ica (Octubre 2023 - Septiembre 2024)
      </h2>
      <span className="mt-2.5 inline-block bg-gray-100 px-2 py-1.5 text-sm font-bold leading-5 text-[#4d4d4d]">
        ESTUDIO
      </span>
      <p className="mt-4">
        La calidad del aire es un elemento fundamental para garantizar la salud
        y el bienestar de la población, por lo que su monitoreo constante
        resulta clave para el desarrollo sostenible de la región.
      </p>
      <img src="/info.jpeg" alt="Info Image" className="mt-4 rounded" />
      <p className="mt-1">02 de diciembre de 2024 - {currentTime}</p>
    </section>
  );
}
