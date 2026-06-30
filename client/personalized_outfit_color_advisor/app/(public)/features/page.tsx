import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import {
  FaPalette,
  FaCamera,
  FaShirt,
  FaClockRotateLeft,
  FaUser,
  FaShieldHalved,
  FaImage,
  FaStar,
} from "react-icons/fa6";

export default function FeaturesPage() {
  const features = [
    {
      icon: <FaPalette />,
      title: "Personalized Colors",
      desc: "Receive outfit color recommendations tailored to your skin tone and undertone.",
    },
    {
      icon: <FaCamera />,
      title: "Photo Analysis",
      desc: "Upload a clear facial photograph to begin your personalized color analysis.",
    },
    {
      icon: <FaShirt />,
      title: "Occasion-Based Colors",
      desc: "Get color suggestions for college, office, parties, weddings, and more.",
    },
    {
      icon: <FaClockRotateLeft />,
      title: "Analysis History",
      desc: "Access your previous analyses anytime from your personal dashboard.",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure Account",
      desc: "Your account information and analysis history remain protected.",
    },
    {
      icon: <FaImage />,
      title: "Color Palette",
      desc: "View your personalized palette in a simple and easy-to-read format.",
    },
    {
      icon: <FaStar />,
      title: "Easy Experience",
      desc: "A clean and intuitive interface designed for effortless color discovery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDFB] flex flex-col">
      <Navbar />

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-7 lg:px-12 pt-24 pb-20 text-center">

          <h1 className="mt-6 text-5xl md:text-6xl font-serif font-bold leading-tight text-[#2B2B2B]">
            Everything You Need
            <br />
            In One Place
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Personalized Outfit Color Advisor provides all the essential tools
            to help you discover colors that complement your appearance and
            simplify your outfit choices.
          </p>

        </section>

        {/* Feature Cards */}
        <section className="max-w-[1600px] mx-auto px-10 lg:px-12 pb-28">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-[#EFE2D5] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="text-4xl text-[#CC7F5D] mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h2 className="text-2xl font-serif font-bold text-[#2B2B2B] mb-4 leading-tight">
                  {feature.title}
                </h2>

                <p className="text-gray-600 leading-7 text-sm">
                  {feature.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}