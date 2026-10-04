import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {label:"Home",path:"/"},
  {label:"About Us",children:[{label:"Who We Are",path:"/about/who-we-are"},{label:"What We Do",path:"/about/what-we-do"}]},
  {label:"Our Projects",children:[{label:"Projects",path:"/projects"},{label:"Gallery",path:"/projects/gallery"}]},
  {label:"Events",path:"/events"},
  {label:"Donate",path:"/donate"},
  {label:"Contact Us",path:"/contact"},
];
export default function Header() {
  const [open,setOpen]=useState(false);
  const [drop,setDrop]=useState<string | null>(null);
  const {pathname}=useLocation();
  const active=(path:string) => pathname === path || (path === "/events" && pathname.startsWith("/events/"));
  return <header className="fixed inset-x-0 top-0 z-40 bg-background border-b border-border shadow-sm">
    <div className="container-narrow px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
      <Link to="/" aria-label="The Jessicare Initiative home" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
        <img src="/brand/logo-full.png" alt="The Jessicare Initiative" className="hidden sm:block h-12 w-auto max-w-[190px] object-contain" />
        <img src="/brand/logo-icon.png" alt="" className="sm:hidden h-10 w-10 object-contain" />
      </Link>
      <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">{navigation.map(item => item.children ? <div key={item.label} className="relative group" onMouseEnter={() => setDrop(item.label)} onMouseLeave={() => setDrop(null)}>
        <Button variant="ghost" className={cn("gap-1", item.children.some(child => active(child.path)) && "text-accent underline underline-offset-8")} aria-expanded={drop === item.label} onClick={() => setDrop(drop === item.label ? null : item.label)}>{item.label}<ChevronDown className="w-4 h-4" /></Button>
        <div className={cn("absolute top-full left-0 min-w-48 bg-background border border-border rounded-md shadow-md py-2",drop === item.label ? "block" : "hidden group-hover:block")}>
          {item.children.map(child => <Link key={child.path} to={child.path} onClick={() => setDrop(null)} className={cn("block px-4 py-2 text-sm hover:text-accent hover:bg-muted",active(child.path) && "text-accent underline underline-offset-4")}>{child.label}</Link>)}
        </div>
      </div> : <Link key={item.path} to={item.path} className={cn("px-3 py-2 text-sm font-medium hover:text-accent",active(item.path) && "text-accent underline underline-offset-8")}>{item.label}</Link>)}</nav>
      <div className="flex items-center gap-2"><Button asChild variant="gradient" size="sm" className="hidden md:inline-flex"><Link to="/donate">Donate Now</Link></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav className="lg:hidden bg-background border-t border-border max-h-[calc(100dvh-4rem)] overflow-y-auto animate-in slide-in-from-right duration-200 px-4 pb-6" aria-label="Mobile navigation">{navigation.map(item => item.children ? <div key={item.label} className="border-b border-border"><Button variant="ghost" className="w-full justify-between" aria-expanded={drop === item.label} onClick={() => setDrop(drop === item.label ? null : item.label)}>{item.label}<ChevronDown className="w-4 h-4" /></Button>{drop === item.label && item.children.map(child => <Link key={child.path} className={cn("block px-6 py-3 text-sm",active(child.path) && "text-accent underline")} to={child.path} onClick={() => setOpen(false)}>{child.label}</Link>)}</div> : <Link key={item.path} className={cn("block px-4 py-3 border-b border-border",active(item.path) && "text-accent underline")} to={item.path} onClick={() => setOpen(false)}>{item.label}</Link>)}<Button asChild variant="gradient" className="w-full mt-4"><Link to="/donate" onClick={() => setOpen(false)}>Donate Now</Link></Button></nav>}
  </header>;
}
