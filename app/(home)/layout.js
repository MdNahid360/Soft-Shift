import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export default function HomeLayout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
