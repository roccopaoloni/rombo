export default function Ticker() {
  const text = "URBAN WEAR ❖ NICHE PERFUMERY ❖ EDICIONES LIMITADAS ❖ STREETWEAR BASICS ❖ ATENCIÓN DIRECTA ❖ SARMIENTO 778 BAHÍA BLANCA ❖ ";
  
  return (
    <div className="w-full bg-primary py-3 overflow-hidden border-y border-surface-highest">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <div className="w-1/2 flex items-center text-surface-lowest font-heading font-bold text-xl md:text-2xl tracking-widest">
          {text}
        </div>
        <div className="w-1/2 flex items-center text-surface-lowest font-heading font-bold text-xl md:text-2xl tracking-widest">
          {text}
        </div>
      </div>
    </div>
  );
}
