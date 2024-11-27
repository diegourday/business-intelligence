export default function Conclusions() {
  const CONCLUSIONS = [
    {
      title: "Optimización de Rutas de Distribución",
      description:
        "El análisis de datos históricos permitió identificar oportunidades para optimizar las rutas de distribución de GLP. Esto contribuye a reducir costos operativos, mejorar la eficiencia logística y garantizar entregas más rápidas en las regiones atendidas.",
    },
    {
      title: "Gestión Eficiente de Inventarios",
      description:
        "Gracias a la centralización de datos en el Data Warehouse, se logró una mejor proyección y control de los niveles de inventario. Esto asegura que las reposiciones sean oportunas, evitando desabastecimientos y sobrecarga de almacenes.",
    },
    {
      title: "Segmentación de Clientes",
      description:
        "El reporte destaca que los clientes comerciales representan el segmento más significativo, seguido de los residenciales e industriales. Esta información permite personalizar estrategias para satisfacer mejor las necesidades de cada tipo de cliente y maximizar la rentabilidad.",
    },
    {
      title: "Control de Costos por Región",
      description:
        "El análisis muestra que Ica presenta los costos más altos en distribución, lo que abre la posibilidad de implementar estrategias de optimización específicas para esta región y mejorar la rentabilidad general.",
    },
    {
      title: "Impacto de la Tecnología en la Toma de Decisiones",
      description:
        "La implementación del Data Warehouse y su integración con herramientas de Business Intelligence, como Power BI, ha facilitado la visualización de indicadores clave en tiempo real. Esto permite tomar decisiones estratégicas informadas para mejorar la operación y la experiencia del cliente.",
    },
  ];

  return (
    <div className="bg-[#F3F8FB]">
      <section
        id="conclusiones"
        className="mx-auto max-w-[720px] px-6 pb-28 pt-20"
      >
        <h2 className="text-xl font-bold">Conclusiones del Estudio</h2>
        <p className="mt-2">
          Descubre los hallazgos, logros y propuestas para mejorar la
          distribución del GLP.
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {CONCLUSIONS.map((conclusion, index) => (
            <article
              key={index}
              className="hover:outline-blue rounded bg-white p-8 shadow-md outline-none"
            >
              <h3 className="text-blue mb-2 text-xl font-bold underline">
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
