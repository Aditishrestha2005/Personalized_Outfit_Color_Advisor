"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FBF6F0] scroll-mt-24">
     <div className="max-w-[1500px] mx-auto px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 bg-[#CC7F5D]/10 rounded-2xl flex items-center justify-center font-serif text-[#CC7F5D] text-lg font-bold">Skin Match</div>
          <div className="h-64 bg-[#CC7F5D] rounded-2xl flex items-center justify-center text-white font-serif text-lg font-bold mt-8">Color Harmony</div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-[#2B2B2B]">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Clothing colors sit directly against your face, which means the wrong hue can instantly wash you out or clash with your look. We believe finding the colors that naturally complement your face shouldn't require booking an expensive, hours-long consultation session with a personal styling expert.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Personalized Outfit Color Advisor bridges the gap between traditional seasonal color theory and modern image analysis, providing a straightforward tool that decodes your undertones in seconds.
          </p>
          <div className="pt-4 border-t border-[#F3E7DE] flex gap-8">
       
          </div>
        </div>

      </div>
    </section>
  );
}