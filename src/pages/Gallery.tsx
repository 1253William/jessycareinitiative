import Layout from "@/components/layout/Layout";
import MediaGrid from "@/components/shared/MediaGrid";
import { gallery } from "@/data/gallery";
export default function Gallery() { return <Layout>
  <section className="section-padding text-center"><div className="container-narrow"><p className="uppercase text-sm font-semibold text-accent mb-4">Our Gallery</p><h1 className="text-4xl md:text-5xl font-heading font-bold">Moments From the Field</h1><p className="mt-4 text-muted-foreground">Community care, education, and outreach in action.</p></div></section>
  <section className="bg-primary py-16 md:py-24 px-4 md:px-8"><div className="max-w-7xl mx-auto"><MediaGrid items={gallery} /></div></section>
</Layout>; }
