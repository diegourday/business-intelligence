export default function Hero() {
  return (
    <section className="flex items-center justify-center">
      <img
        src="/hero.jpeg"
        alt="Hero Image"
        className="h-[418px] w-full object-cover object-center"
      />
      <div className="absolute flex max-w-xl flex-col items-center rounded-2xl bg-white/75 p-6 px-10">
        <h1 className="text-center text-3xl font-bold">
          Análisis de la calidad del aire en Ica (Octubre 2023 - Septiembre
          2024)
        </h1>
      </div>
    </section>
  );
}
