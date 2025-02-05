import Image from "next/image";
import { Inter } from "next/font/google";
import OptOutForm from "../components/OptOutForm"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center mx-auto ${inter.className}`}
    >
      <div className="mt-16 max-w-6xl w-full">
        <OptOutForm 
        />
      </div>
      
    </main>
  );
}
