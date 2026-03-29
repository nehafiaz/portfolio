"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Code, User, Mail, Send } from "lucide-react";
import MagneticButton from "../shared/MagneticButton";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(10, { message: "Message is too short" }),
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
            <div className="flex gap-12">
               {[
                 { icon: Code, link: "#" },
                 { icon: User, link: "#" },
                 { icon: Send, link: "#" },
                 { icon: Mail, link: "mailto:hello@neha.com" },
               ].map((social, i) => (
                 <a key={i} href={social.link} className="text-text-3 hover:text-emerald-sig transition-all hover:scale-125">
                   <social.icon size={28} />
                 </a>
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
