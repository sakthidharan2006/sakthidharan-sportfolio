import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { contactInfo } from "@/data";


export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const subject = (formData.get("subject") as string).trim();
    const message = (formData.get("message") as string).trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    if (name.length > 100 || email.length > 255 || subject.length > 200 || message.length > 2000) {
      toast({ title: "Input too long", description: "Please shorten your message.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_messages")
        .insert({ name, email, subject, message });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Contact form error:", err);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// contact.transmit</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 tracking-tight">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 text-sm">
              I'm always excited to connect with fellow developers, potential collaborators,
              and recruiters. Whether you have a question or just want to say hi,
              my inbox is always open!
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 4 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="relative flex items-center gap-4 p-4 rounded-[1.75rem] bg-card/50 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all group overflow-hidden"
                      style={{ boxShadow: "0 6px 20px -10px hsl(var(--primary)/0.12), inset 0 1px 0 hsl(var(--primary)/0.06)" }}
                    >
                      <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-primary/40" />
                      <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-primary/40" />
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 group-hover:border-primary/50 transition-colors"
                        animate={
                          index % 5 === 0 ? { y: [0, -4, 0] } :
                          index % 5 === 1 ? { y: [0, -3, 0] } :
                          index % 5 === 2 ? { scale: [1, 1.15, 1] } :
                          index % 5 === 3 ? { x: [-3, 3, -3] } :
                          { x: [0, 2, -2, 0] }
                        }
                        transition={{
                          duration: index % 5 === 0 ? 2 : index % 5 === 1 ? 1.5 : index % 5 === 2 ? 2 : index % 5 === 3 ? 1.8 : 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                        whileHover={{ scale: 1.25 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                      </motion.div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-mono text-primary uppercase tracking-widest">// {item.label}</p>
                        <p className="text-sm font-medium font-mono group-hover:text-primary transition-colors truncate">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="relative flex items-center gap-4 p-4 rounded-[1.75rem] bg-card/50 backdrop-blur-xl border border-border/40 overflow-hidden"
                      style={{ boxShadow: "0 6px 20px -10px hsl(var(--primary)/0.12), inset 0 1px 0 hsl(var(--primary)/0.06)" }}
                    >
                      <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-primary/40" />
                      <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-primary/40" />
                      <motion.div
                        className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.25 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-[10px] font-mono text-primary uppercase tracking-widest">// {item.label}</p>
                        <p className="text-sm font-medium font-mono">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltCard>
            <form onSubmit={handleSubmit} className="relative bg-card/50 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 border border-border/40 overflow-hidden"
              style={{ boxShadow: "0 12px 40px -12px hsl(var(--primary)/0.18), inset 0 1px 0 hsl(var(--primary)/0.08)" }}
            >
              {/* HUD top bar */}
              <div className="flex items-center justify-between -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 px-6 md:px-8 py-2.5 border-b border-border/40 bg-background/30">
                <div className="flex items-center gap-2">
                  <Send className="w-3 h-3 text-primary" />
                  <span className="font-mono text-[10px] text-muted-foreground/80 tracking-wider uppercase">transmit.message</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.span className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="font-mono text-[9px] text-accent uppercase tracking-widest">READY</span>
                </div>
              </div>

              {/* Corner brackets */}
              <span className="absolute top-12 left-2 w-2.5 h-2.5 border-t border-l border-primary/40" />
              <span className="absolute top-12 right-2 w-2.5 h-2.5 border-t border-r border-primary/40" />
              <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-primary/40" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-primary/40" />

              <div className="space-y-4 relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-2">
                      // name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required className="bg-background/40 border-border/50 focus:border-primary/60 rounded-lg font-mono text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-2">
                      // email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-background/40 border-border/50 focus:border-primary/60 rounded-lg font-mono text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-2">
                    // subject
                  </label>
                  <Input id="subject" name="subject" placeholder="What's this about?" required className="bg-background/40 border-border/50 focus:border-primary/60 rounded-lg font-mono text-sm" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-mono text-primary uppercase tracking-widest mb-2">
                    // message
                  </label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="bg-background/40 border-border/50 focus:border-primary/60 resize-none rounded-lg font-mono text-sm" />
                </div>

                <Button type="submit" className="w-full btn-gradient rounded-lg py-6 text-sm font-mono" disabled={isSubmitting}>
                  {isSubmitting ? "Transmitting..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      ./send_message
                    </>
                  )}
                </Button>
              </div>
            </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
