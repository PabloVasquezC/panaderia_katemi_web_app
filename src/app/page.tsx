import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-[#fff8f0] text-[#3b2f2f]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-2xl">
        <Image
          src="/katemi_logo.png" 
          alt="Panadería Katemi"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold">Bienvenidos a Panadería Katemi</h1>
        <p className="text-lg sm:text-xl text-[#5e4b4b]">
          Pan fresco, hecho con amor y tradición. Descubre nuestros productos artesanales y siente el sabor de lo natural.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="#productos"
            className="bg-[#d19c6f] text-white hover:bg-[#b97d50] rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            Ver productos
          </a>
          <a
            href="#nosotros"
            className="border border-[#d19c6f] text-[#d19c6f] hover:bg-[#fff3e7] rounded-full px-6 py-3 text-sm font-semibold transition"
          >
            Conócenos
          </a>
        </div>
      </main>

      <footer className="row-start-3 text-xs text-[#a08c8c]">
        © {new Date().getFullYear()} Panadería Katemi · Hecho con cariño en Chile
      </footer>
    </div>
  );
}
