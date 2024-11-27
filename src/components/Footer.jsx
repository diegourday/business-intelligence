export default function Footer() {
  return (
    <div className="bg-[#26292E]">
      <div className="h-[29px] bg-[url('/frame-footer.svg')]" />
      <footer className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="flex items-center justify-center gap-16">
          <img
            src="/bicentennial.svg"
            alt="Bicentennial of Peru"
            className="h-24"
          />
          <div className="h-16 w-[1px] bg-white" />
          <img src="/logo-upsjb.png" alt="Logo UPSJB" className="h-16" />
        </div>
      </footer>
      <div className="h-[29px] bg-[url('/frame-footer.svg')]" />
    </div>
  );
}
