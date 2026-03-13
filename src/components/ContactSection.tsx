import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sakthidharane16@gmail.com", href: "mailto:sakthidharane16@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6374103029", href: "tel:+916374103029" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sakthidharan-e-", href: "https://linkedin.com/in/sakthidharan-e-" },
    { icon: Github, label: "GitHub", value: "github.com/sakthidharan2006", href: "https://github.com/sakthidharan2006" },
    { icon: MapPin, label: "Location", value: "Sathyamangalam, Tamil Nadu", href: null },
  ];

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// contact</span>
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
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
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
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.25 }}
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
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
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="font-display text-lg font-bold mb-6 tracking-tight">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required className="bg-secondary/50 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-secondary/50 rounded-lg" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="What's this about?" required className="bg-secondary/50 rounded-lg" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="bg-secondary/50 resize-none rounded-lg" />
                </div>

                <Button type="submit" className="w-full btn-gradient rounded-xl py-6 text-sm" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
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
