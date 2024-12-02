export default function Conclusions() {
  const CONCLUSIONS = [
    {
      title: "Influencia Significativa de los Factores Meteorológicos",
      description:
        "Los factores meteorológicos, especialmente la temperatura, humedad, viento y presión atmosférica, juegan un papel crucial en la dispersión y concentración de contaminantes en Ica, afectando directamente la calidad del aire.",
    },
    {
      title: "Patrones de Contaminación Variables",
      description:
        "Los niveles de contaminantes como PM2.5, PM10, NO2, SO2 y CO en Ica muestran una fuerte correlación con los cambios estacionales y climáticos, lo que indica que los contaminantes no solo son el resultado de fuentes locales, sino también de factores atmosféricos.",
    },
    {
      title: "Impacto en la Salud Pública",
      description:
        "La alta concentración de contaminantes en zonas urbanas e industriales, exacerbada por las condiciones meteorológicas, representa un riesgo considerable para la salud pública, especialmente para poblaciones vulnerables como niños, ancianos y personas con enfermedades respiratorias.",
    },
    {
      title: "Eficacia de Big Data y Modelos Predictivos",
      description:
        "El análisis de grandes volúmenes de datos mediante herramientas de Big Data y modelos predictivos con Python ha permitido identificar patrones de contaminación y predecir episodios de alta contaminación, mejorando la capacidad de respuesta ante emergencias ambientales.",
    },
    {
      title: "Limitación de Datos y Monitoreo Local",
      description:
        "La falta de datos completos y actualizados sobre las condiciones meteorológicas y de calidad del aire en áreas periféricas de Ica limita la capacidad para realizar un análisis exhaustivo y precisa la predicción de la calidad del aire.",
    },
    {
      title: "Desafíos del Cambio Climático",
      description:
        "El cambio climático podría alterar los patrones meteorológicos en la región, lo que a su vez afectaría la dispersión y concentración de contaminantes, haciendo aún más urgente la necesidad de monitoreo continuo y modelos predictivos robustos.",
    },
  ];

  return (
    <div className="bg-[#F3F8FB]">
      <section
        id="conclusiones"
        className="mx-auto max-w-[720px] px-6 pb-24 pt-20"
      >
        <h2 className="text-xl font-bold">Conclusiones del Estudio</h2>
        <p className="mt-2">
          Explora los hallazgos, logros y propuestas para mejorar la calidad del
          aire en Ica.
        </p>
        <div className="mt-8 flex flex-col gap-8">
          {CONCLUSIONS.map((conclusion, index) => (
            <article
              key={index}
              className="rounded-lg bg-white p-8 shadow-lg shadow-black/5 outline-none hover:outline-blue"
            >
              <h3 className="mb-2 text-xl font-bold text-blue underline">
                {conclusion.title}
              </h3>
              <p>{conclusion.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
