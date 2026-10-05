import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

interface VolunteerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

const VolunteerModal = ({ open, onOpenChange, title = "Volunteer With Us" }: VolunteerModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_BASIN_ENDPOINT;
    if (!endpoint) { toast.error("Applications are not available yet. Please use the Contact page."); return; }
    const form = new FormData(e.currentTarget);
    form.append("subject", title.includes("Partner") ? "Partnership" : "Volunteer");
    setLoading(true);
    try {
      const response = await fetch(endpoint, { method: "POST", body: form, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      onOpenChange(false);
      toast.success("Thank you — we've received your application.");
    } catch { toast.error("Something went wrong. Please try again later."); }
    finally { setLoading(false); }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="vol-name">Full Name</Label>
            <Input id="vol-name" name="name" placeholder="Your name" required />
          </div>
          <div>
            <Label htmlFor="vol-email">Email</Label>
            <Input id="vol-email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="vol-phone">Phone</Label>
            <Input id="vol-phone" name="phone" placeholder="+233 XX XXX XXXX" />
          </div>
          <div>
            <Label htmlFor="vol-message">Why do you want to volunteer?</Label>
            <Textarea id="vol-message" name="message" placeholder="Tell us about yourself..." rows={3} />
          </div>
          <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerModal;
