"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const formSchema = z.object({
  name: z.string().min(2, { message: "Enter your Name" }),
  email: z.string().email({ message: "Enter Email" }),
  message: z.string().min(10, { message: "Enter Message" }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Message sent! I'll get back to you soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-32 bg-bg overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 flex items-center justify-center">
        <h2 className="text-[25vw] font-display font-light text-text-1 select-none">HELLO</h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 mb-4"
          >
            <div className="w-[1px] h-12 bg-emerald-sig" />
            <span className="font-mono text-xs tracking-[0.4em] text-text-2 uppercase">
              Let's Build Something
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display text-text-1">Together</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 border border-border bg-bg-surface/50 backdrop-blur-xl rounded-[2rem] shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative group">
                <input
                  {...register("name")}
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-border'} py-4 px-0 text-text-1 focus:border-emerald-sig transition-colors outline-none font-body text-xl peer placeholder:opacity-0`}
                  autoComplete="off"
                  placeholder="Name"
                />
                <label className="absolute top-4 left-0 text-text-3 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-sig peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Your Name</label>
                {errors.name && <p className="text-xs text-red-500 mt-1 uppercase tracking-widest">{errors.name.message}</p>}
              </div>

              <div className="relative group">
                <input
                  {...register("email")}
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-border'} py-4 px-0 text-text-1 focus:border-emerald-sig transition-colors outline-none font-body text-xl peer placeholder:opacity-0`}
                  autoComplete="off"
                  placeholder="Email"
                />
                <label className="absolute top-4 left-0 text-text-3 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-sig peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Your Email Address</label>
                {errors.email && <p className="text-xs text-red-500 mt-1 uppercase tracking-widest">{errors.email.message}</p>}
              </div>
            </div>

            <div className="relative group">
              <textarea
                {...register("message")}
                rows={4}
                className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-border'} py-4 px-0 text-text-1 focus:border-emerald-sig transition-colors outline-none font-body text-xl peer placeholder:opacity-0 resize-none`}
                autoComplete="off"
                placeholder="Message"
              />
              <label className="absolute top-4 left-0 text-text-3 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-sig peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">What's on your mind?</label>
              {errors.message && <p className="text-xs text-red-500 mt-1 uppercase tracking-widest">{errors.message.message}</p>}
            </div>

            <MagneticButton className="w-full">
              <button
                disabled={isSubmitting}
                className="w-full py-6 bg-emerald-sig text-bg font-semibold rounded-full hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </MagneticButton>
          </form>
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-8">
          <div className="flex gap-6">
            {[
              {
                Icon: GithubIcon,
                link: "https://github.com/nehafiaz",
                label: "GitHub",
                title: "View my code",
              },
              {
                Icon: LinkedinIcon,
                link: "https://linkedin.com/in/nehafiaz",
                label: "LinkedIn",
                title: "Connect with me",
              },
              {
                Icon: () => <Mail size={22} />,
                link: "mailto:nehafiaz@example.com",
                label: "Email",
                title: "Drop me a mail",
              },
              {
                Icon: InstagramIcon,
                link: "https://instagram.com/nehafiaz",
                label: "Instagram",
                title: "Follow me",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target={social.link.startsWith("http") ? "_blank" : undefined}
                rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                title={social.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                whileHover={{ y: -4, scale: 1.08 }}
                className="group flex flex-col items-center gap-2"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl border border-border/60 bg-bg-surface/70 backdrop-blur-sm text-text-2 group-hover:border-emerald-sig group-hover:text-emerald-sig group-hover:shadow-[0_0_20px_-4px_var(--emerald)] transition-all duration-300">
                  <social.Icon />
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-text-3 uppercase group-hover:text-emerald-sig transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4 py-4 px-8 border border-border/50 rounded-full bg-bg-surface/50 backdrop-blur-md">
            <div className="w-2 h-2 bg-emerald-sig rounded-full animate-pulse" />
            <span className="font-mono text-xs text-text-3 tracking-widest uppercase">Currently open to opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
