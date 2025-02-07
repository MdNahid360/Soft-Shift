import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export default function HomeLayout({ children }) {
  return (
    <div>
          <div>
              <aside className="bg-gray-600 text-white p-12">
                  SIDE BAR
              </aside>
        {children}
      </div>
    </div>
  );
}
