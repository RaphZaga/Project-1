import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  const loggedIn = await getLoggedInUser ();

  if (!loggedIn) redirect('/sign-in')

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
