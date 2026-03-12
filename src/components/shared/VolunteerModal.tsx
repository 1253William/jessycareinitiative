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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Thank you! We'll be in touch soon.");
    }, 1000);
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
            <Input id="vol-name" placeholder="Your name" required />
          </div>
          <div>
            <Label htmlFor="vol-email">Email</Label>
            <Input id="vol-email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="vol-phone">Phone</Label>
            <Input id="vol-phone" placeholder="+233 XX XXX XXXX" />
          </div>
          <div>
            <Label htmlFor="vol-message">Why do you want to volunteer?</Label>
            <Textarea id="vol-message" placeholder="Tell us about yourself..." rows={3} />
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
