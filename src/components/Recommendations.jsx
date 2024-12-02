export default function Recommendations() {
  const RECOMMENDATIONS = [
    {
      title: "Ampliar la Red de Monitoreo",
      description:
        "Se recomienda incrementar el número de estaciones de monitoreo de calidad del aire en diversas áreas de Ica, especialmente en zonas rurales y periféricas, para obtener una visión más representativa de la calidad del aire en toda la región.",
    },
    {
      title: "Fortalecer las Políticas de Regulación de Emisiones",
      description:
        "Es necesario implementar y hacer cumplir políticas más estrictas para controlar las emisiones de contaminantes provenientes de fuentes industriales, el transporte y la agricultura, en función de los resultados obtenidos del análisis meteorológico y de calidad del aire.",
    },
    {
      title: "Fomentar el Uso de Energías Renovables",
      description:
        "Promover el uso de energías renovables y tecnologías más limpias en las actividades industriales y de transporte de la región, con el fin de reducir las emisiones de gases contaminantes y mejorar la calidad del aire.",
    },
    {
      title: "Educación Ambiental y Concienciación Pública",
      description:
        "Desarrollar campañas de concientización sobre la importancia de la calidad del aire y cómo las condiciones meteorológicas pueden afectarla, incentivando la participación de la comunidad en acciones para reducir la contaminación.",
    },
    {
      title:
        "Incentivar la Investigación y Desarrollo en Tecnologías de Monitoreo",
      description:
        "Se recomienda invertir en tecnologías emergentes como sensores de bajo costo y el uso de drones para realizar monitoreos más dinámicos, accesibles y en tiempo real de la calidad del aire, mejorando la reactividad ante posibles episodios de contaminación.",
    },
    {
      title: "Desarrollar Modelos Predictivos de Largo Plazo",
      description:
        "Crear y utilizar modelos predictivos más avanzados que integren tanto las variables meteorológicas como las fuentes de emisión locales para prever con mayor precisión los niveles de contaminación en el futuro, ayudando a la toma de decisiones a largo plazo.",
    },
  ];

  return (
    <div className="bg-white">
      <section
        id="recomendaciones"
        className="mx-auto max-w-[720px] px-6 pt-20"
      >
        <h2 className="text-xl font-bold">Recomendaciones del Estudio</h2>
        <p className="mt-2">
          Implementar acciones estratégicas basadas en los hallazgos para
          preservar y mejorar la calidad del aire en Ica, fomentando la
          sostenibilidad y el bienestar de la población.
        </p>
        <div className="mt-8 flex flex-col gap-8">
          {RECOMMENDATIONS.map((conclusion, index) => (
            <article
              key={index}
              className="shadow-card-home rounded-lg border-2 border-gray-300 bg-white p-8 outline-none"
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
