import hero3 from "@/assets/hero-3.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

export type GalleryItem = { id: string; type: "image" | "video"; src: string; poster?: string; alt: string; caption?: string; category?: string; date?: string };
export const gallery: GalleryItem[] = [
  {id:"03",type:"image",src:hero3,alt:"Nurse administering a vaccination in a clinic",caption:"Preventive care"},
  {id:"04",type:"image",src:event1,alt:"Health education during community outreach",caption:"Community education"},
  {id:"05",type:"image",src:event2,alt:"Care for a mother and child at a health event",caption:"Family health"},
];
// Add new images as /public/assets/gallery/gallery-01.jpg through gallery-20.jpg.
// Add videos as /public/assets/gallery/videos/video-01.mp4 with a poster image when supplied.
