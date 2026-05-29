function Footer() {
  return (
    <footer className="bg-[#143743] px-5 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <a className="flex items-center gap-3" href="#home">
          <img
            className="h-14 w-14 rounded-2xl object-contain"
            src="/logo.jpeg"
            alt="Amrit Aashray Logo"
          />
          <div>
            <p className="text-lg font-extrabold">Amrit Aashray</p>
            <p className="text-sm text-[#ffd166]">
              Education with Love & Care | Awareness | Women Safety
            </p>
          </div>
        </a>
        <p className="text-sm text-[#d8e7e2]">
          &copy; {new Date().getFullYear()} Amrit Aashray. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
