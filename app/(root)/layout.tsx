import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Raphael", lastName: "Enyinna" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-4">
          <Image 
            src="/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <MobileNav user={loggedIn} />
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
