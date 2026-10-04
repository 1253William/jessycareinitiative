import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@/data/gallery";

export default function MediaLightbox({ items, index, onClose, onSelect }: { items: GalleryItem[]; index: number | null; onClose: () => void; onSelect: (index: number) => void }) {
  const touch = useRef<number | null>(null);
  const [active, setActive] = useState(index);
  useEffect(() => setActive(index), [index]);
  useEffect(() => {
    if (active === null) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") { event.preventDefault(); onSelect((active + 1) % items.length); }
      if (event.key === "ArrowLeft") { event.preventDefault(); onSelect((active - 1 + items.length) % items.length); }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [active, items.length, onSelect]);
  const item = active === null ? undefined : items[active];
  return <Dialog open={index !== null} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="max-w-none w-screen h-[100dvh] border-0 rounded-none bg-primary/95 p-4 text-primary-foreground flex flex-col items-center justify-center [&>button]:hidden" onTouchStart={e => { touch.current = e.touches[0]?.clientX ?? null; }} onTouchEnd={e => { if (touch.current === null || active === null) return; const delta = e.changedTouches[0]?.clientX - touch.current; if (Math.abs(delta) > 50) onSelect((active + (delta < 0 ? 1 : -1) + items.length) % items.length); touch.current = null; }}>
      <DialogTitle className="sr-only">{item?.caption || item?.alt || "Gallery viewer"}</DialogTitle>
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-primary-foreground hover:text-primary" aria-label="Close viewer" onClick={onClose}><X /></Button>
      {item && <>
        <div className="flex items-center justify-center w-full max-w-6xl gap-2 md:gap-6">
          <Button variant="ghost" size="icon" className="shrink-0 text-primary-foreground hover:text-primary" aria-label="Previous image" onClick={() => onSelect((active - 1 + items.length) % items.length)}><ChevronLeft /></Button>
          {item.type === "video" ? <video key={item.id} src={item.src} poster={item.poster} className="max-w-[calc(100%-6rem)] max-h-[75dvh]" controls autoPlay playsInline preload="metadata" aria-label={item.alt} /> : <img src={item.src} alt={item.alt} className="max-w-[calc(100%-6rem)] max-h-[75dvh] object-contain" />}
          <Button variant="ghost" size="icon" className="shrink-0 text-primary-foreground hover:text-primary" aria-label="Next image" onClick={() => onSelect((active + 1) % items.length)}><ChevronRight /></Button>
        </div>
        <p className="mt-4 text-center text-sm">{item.caption || item.alt} · {active + 1} / {items.length}</p>
      </>}
    </DialogContent>
  </Dialog>;
}
