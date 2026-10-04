import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@/data/gallery";
import MediaLightbox from "./MediaLightbox";

export default function MediaGrid({items}: {items: GalleryItem[]}) {
  const [filter,setFilter] = useState<"all" | "image" | "video">("all");
  const [visible,setVisible] = useState(20);
  const [selected,setSelected] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const filtered = items.filter(item => filter === "all" || item.type === filter);
  const shown = filtered.slice(0,visible);
  return <>
    <div className="flex gap-2 mb-8" aria-label="Gallery filters">{([ ["all","All"],["image","Photos"],["video","Videos"] ] as const).map(([value,label]) => <Button key={value} size="sm" variant={filter === value ? "gradient" : "outline"} className={filter === value ? "" : "bg-primary/10 border-secondary/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"} onClick={() => {setFilter(value);setVisible(20);}} aria-pressed={filter === value}>{label}</Button>)}</div>
    {shown.length === 0 ? <p className="text-primary-foreground/80 py-16 text-center">No videos yet. Check back soon.</p> : <div className="gallery-frame"><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-primary p-1">{shown.map((item,i) => <motion.div key={item.id} initial={reduced ? false : {opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:reduced ? 0 : Math.min(i,10)*0.04}}><Button variant="ghost" className="relative w-full h-auto p-0 aspect-[4/3] overflow-hidden rounded-md group bg-secondary/20 hover:bg-secondary/20" onClick={() => setSelected(i)} aria-label={`Open ${item.alt}`}>
      <img src={item.poster || item.src} alt={item.alt} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03] group-hover:brightness-110" />
      {item.type === "video" && <span className="absolute inset-0 flex items-center justify-center"><span className="rounded-full bg-background p-3 text-accent"><Play fill="currentColor" /></span></span>}
    </Button></motion.div>)}</div></div>}
    {visible < filtered.length && <div className="text-center mt-8"><Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={() => setVisible(v => v+10)}>Load more</Button></div>}
    <MediaLightbox items={shown} index={selected} onSelect={setSelected} onClose={() => setSelected(null)} />
  </>;
}
