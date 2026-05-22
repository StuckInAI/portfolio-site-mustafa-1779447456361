import { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import type { ContactForm } from '@/types';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'alex@example.com' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
];

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[#8888aa] mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>
            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-[#8888aa] text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative card */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #6c63ff22, #ff658422)' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl" style={{ background: '#6c63ff' }} />
              <p className="text-white font-semibold mb-1">Open to Freelance</p>
              <p className="text-[#8888aa] text-sm">Currently available for freelance projects and full-time opportunities.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 size={56} className="text-[#6c63ff] mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#8888aa]">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-6 px-6 py-2 bg-[#6c63ff]/10 text-[#6c63ff] rounded-xl text-sm font-medium hover:bg-[#6c63ff]/20 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-[#8888aa] text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Alex Johnson"
                    className="w-full bg-[#16162a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa]/60 focus:outline-none focus:border-[#6c63ff]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#8888aa] text-sm mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@example.com"
                    className="w-full bg-[#16162a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa]/60 focus:outline-none focus:border-[#6c63ff]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[#8888aa] text-sm mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#16162a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8888aa]/60 focus:outline-none focus:border-[#6c63ff]/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-3 bg-[#6c63ff] hover:bg-[#574fd6] disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 glow"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
