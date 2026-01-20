import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, MessageCircle, Laptop } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <MessageCircle size={16} />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-6">
              Let's Build Something <br />
              <span className="text-indigo-600 dark:text-indigo-400">Great Together</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Whether you need a custom app, your office computers fixed, or want to join our coding bootcamp, we are just a message away.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 mb-8">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Laptop size={18} className="text-indigo-600" /> Note on Location:
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                We are a <strong>mobile-first agency</strong>. We do not have a physical walk-in shop. 
                For IT support and training, <strong>we come to your home or office</strong> within Nairobi, 
                or serve you remotely online.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: MessageCircle, 
                  title: "WhatsApp Us (Fastest)", 
                  content: "+254 700 000 000",
                  action: () => window.open('https://wa.me/254700000000', '_blank')
                },
                { 
                  icon: Phone, 
                  title: "Call Us", 
                  content: "+254 700 000 000" 
                },
                { 
                  icon: Mail, 
                  title: "Email Us", 
                  content: "hello@e-daima.com" 
                },
                { 
                  icon: MapPin, 
                  title: "Service Area", 
                  content: "Nairobi & Environs (We come to you)" 
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-4 group p-4 rounded-xl transition-all ${item.action ? 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800' : ''}`}
                  onClick={item.action}
                >
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-slate-300">Full Name</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-slate-300">Email Address</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-900 dark:text-slate-300">What are you interested in?</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a Service...</option>
                  <option value="software">Software / Web / App Development</option>
                  <option value="academy">Academy: Bootcamp or Private Tutor</option>
                  <option value="support">On-Site IT Support / Repair</option>
                  <option value="design">Graphic Design / Branding</option>
                  <option value="gov">E-Government / Cyber Services</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-slate-300">Message</label>
                <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell us more about your project or learning goals..."></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-lg" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              >
                {formStatus === 'submitting' ? (
                  <><Loader2 size={20} className="mr-2 animate-spin" /> Sending...</>
                ) : formStatus === 'success' ? (
                  <><CheckCircle size={20} className="mr-2" /> Message Sent Successfully!</>
                ) : (
                  <><Send size={20} className="mr-2" /> Send Message</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;