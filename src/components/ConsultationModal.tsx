import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string;
}

export default function ConsultationModal({ isOpen, onClose, doctorName }: ConsultationModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Booking Consultation:', formData);
    setStep('success');
  };

  const resetAndClose = () => {
    setTimeout(() => {
      onClose();
      setStep('form');
      setFormData({ date: '', time: '', reason: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight">Book Consultation</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">With {doctorName}</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors shadow-sm border border-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {/* Date Selection */}
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-1">Select Date</label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                        <input
                          required
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-1">Select Preferred Time</label>
                      <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold text-slate-900 appearance-none"
                        >
                          <option value="">Choose a slot</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 px-1">Reason for Consultation</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
                        <textarea
                          required
                          placeholder="Please describe your symptoms briefly..."
                          rows={4}
                          value={formData.reason}
                          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-bold text-slate-900 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-slate-900 transition-all shadow-xl shadow-slate-900/10 mt-4 group"
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-24 h-24 bg-primary/20 rounded-[32px] flex items-center justify-center mx-auto mb-8 relative">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-primary/30 rounded-[32px]"
                    />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight mb-4">Booking Confirmed!</h4>
                  <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-xs mx-auto">
                    Your consultation with {doctorName} has been scheduled for {formData.date} at {formData.time}.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-slate-900 transition-all shadow-xl shadow-slate-900/10"
                  >
                    Got It
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
