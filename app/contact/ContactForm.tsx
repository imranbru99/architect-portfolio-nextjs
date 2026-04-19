"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
// FIX: Import the new Sonner toast function
import { toast } from "sonner"; 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more about the project"),
  website: z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const startedAtRef = React.useRef<number>(Date.now());

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  });

  React.useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  const onSubmit = async (values: FormValues) => {
    // Honeypot anti-spam check
    if ((values.website ?? "").trim().length > 0) {
      toast.error("Submission blocked", { description: "Anti-spam check failed." });
      return;
    }

    // Speed anti-spam check
    if (Date.now() - startedAtRef.current < 1200) {
      toast.error("Too fast", { description: "Please wait a moment and try again." });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("https://sub.domain.com/imrandevcontact", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message.");

      form.reset();
      startedAtRef.current = Date.now();
      
      // FIX: Use Sonner's success toast
      toast.success("Message sent!", { description: "Thanks! I’ll reply within 24–48 hours." });
      
    } catch (err) {
      // FIX: Use Sonner's error toast
      toast.error("Could not send", { 
        description: err instanceof Error ? err.message : "Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Hidden Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Input tabIndex={-1} autoComplete="off" {...form.register("website")} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Name</label>
          <Input 
            {...form.register("name")} 
            placeholder="John Doe" 
            className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500 h-12 rounded-xl" 
          />
          {form.formState.errors.name && <p className="text-xs text-red-400">{form.formState.errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Phone (Optional)</label>
          <Input 
            {...form.register("phone")} 
            placeholder="+1 234 567 8900" 
            className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500 h-12 rounded-xl" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Email</label>
        <Input 
          {...form.register("email")} 
          type="email" 
          placeholder="john@example.com" 
          className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500 h-12 rounded-xl" 
        />
        {form.formState.errors.email && <p className="text-xs text-red-400">{form.formState.errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300">Project Details</label>
        <Textarea 
          {...form.register("message")} 
          rows={5} 
          placeholder="Tell me about your project scope, timeline, and goals..." 
          className="bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500 rounded-xl resize-none" 
        />
        {form.formState.errors.message && <p className="text-xs text-red-400">{form.formState.errors.message.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 text-green-500" />
          Protected by anti-spam validation
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all"
        >
          {isSubmitting ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
          ) : (
            <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>
          )}
        </Button>
      </div>
    </form>
  );
}