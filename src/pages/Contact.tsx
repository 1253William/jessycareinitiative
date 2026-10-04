import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import VolunteerModal from "@/components/shared/VolunteerModal";

const schema=z.object({name:z.string().trim().min(1,"Please enter your name"),email:z.string().trim().email("Please enter a valid email"),phone:z.string().optional(),subject:z.enum(["General Inquiry","Volunteer","Partnership","Donation","Media"]),message:z.string().trim().min(10,"Please write at least 10 characters"),_gotcha:z.string().optional()});
type Fields=z.infer<typeof schema>;
const endpoint=import.meta.env.VITE_BASIN_ENDPOINT;
export default function Contact() {
  const [sent,setSent]=useState(false),[volOpen,setVolOpen]=useState(false),[partnerOpen,setPartnerOpen]=useState(false);
  const {register,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<Fields>({resolver:zodResolver(schema),defaultValues:{subject:"General Inquiry",_gotcha:""}});
  useEffect(() => {if (import.meta.env.DEV && !endpoint) console.warn("VITE_BASIN_ENDPOINT is not set; contact form cannot be submitted.");},[]);
  const submit=async (values:Fields) => {
    if (!endpoint) {toast.error("Contact form is not available yet. Please try again later.");return;}
    const data=new FormData();Object.entries(values).forEach(([key,value]) => data.append(key,value || ""));
    try {const response=await fetch(endpoint,{method:"POST",body:data,headers:{Accept:"application/json"}});if (!response.ok) throw new Error("Request failed");setSent(true);reset();}
    catch {toast.error("Something went wrong. Please try again or email us directly.");}
  };
  return <Layout><PageHero title="Contact Us" subtitle="We'd love to hear from you. Get in touch today." /><section className="section-padding"><div className="container-narrow grid lg:grid-cols-2 gap-12">
    <div><h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>{sent ? <div role="status" className="border border-border rounded-lg p-8"><h3 className="text-xl font-bold">Thank you — we've received your message and will respond shortly.</h3><Button className="mt-6" onClick={() => setSent(false)}>Send another message</Button></div> : <form onSubmit={handleSubmit(submit)} noValidate className="space-y-4">
      <div><Label htmlFor="contact-name">Full Name</Label><Input id="contact-name" {...register("name")} aria-invalid={!!errors.name} /><p className="text-accent text-sm mt-1" role="alert">{errors.name?.message}</p></div>
      <div><Label htmlFor="contact-email">Email</Label><Input id="contact-email" type="email" {...register("email")} aria-invalid={!!errors.email} /><p className="text-accent text-sm mt-1" role="alert">{errors.email?.message}</p></div>
      <div><Label htmlFor="contact-phone">Phone (optional)</Label><Input id="contact-phone" type="tel" {...register("phone")} /></div>
      <div><Label htmlFor="contact-subject">Subject</Label><select id="contact-subject" {...register("subject")} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{["General Inquiry","Volunteer","Partnership","Donation","Media"].map(subject => <option key={subject}>{subject}</option>)}</select></div>
      <div><Label htmlFor="contact-message">Message</Label><Textarea id="contact-message" rows={5} {...register("message")} aria-invalid={!!errors.message} /><p className="text-accent text-sm mt-1" role="alert">{errors.message?.message}</p></div>
      <div className="sr-only" aria-hidden="true"><Label htmlFor="contact-gotcha">Leave this empty</Label><Input id="contact-gotcha" tabIndex={-1} autoComplete="off" {...register("_gotcha")} /></div>
      <Button type="submit" variant="gradient" disabled={isSubmitting} className="w-full">{isSubmitting ? <><Loader2 className="animate-spin" /> Sending…</> : "Send Message"}</Button>
    </form>}</div>
    <aside className="bg-primary text-primary-foreground rounded-lg p-8 self-start"><h2 className="text-2xl font-bold mb-6">Contact Information</h2><p className="flex items-center gap-3 mb-5"><Mail className="w-5 h-5 text-secondary" /> Email address to be confirmed</p><p className="flex items-center gap-3 mb-5"><Phone className="w-5 h-5 text-secondary" /> Phone number to be confirmed</p><p className="flex items-center gap-3 mb-8"><MapPin className="w-5 h-5 text-secondary" /> Accra, Ghana (address to be confirmed)</p><h3 className="text-xl font-semibold mb-3">Get Involved</h3><div className="flex flex-col gap-3"><Button variant="gradient" onClick={() => setVolOpen(true)}>Volunteer Application</Button><Button variant="outline" className="border-secondary text-primary-foreground bg-primary hover:bg-background hover:text-primary" onClick={() => setPartnerOpen(true)}>Partnership Inquiry</Button></div></aside>
  </div></section><VolunteerModal open={volOpen} onOpenChange={setVolOpen} title="Volunteer Application" /><VolunteerModal open={partnerOpen} onOpenChange={setPartnerOpen} title="Partnership Inquiry" /></Layout>;
}
