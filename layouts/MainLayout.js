import EnquireNowButton from "@/components/global/EnquireNowButton";
import Navbar from "@/components/global/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <EnquireNowButton /> */}
    </div>
  );
}
