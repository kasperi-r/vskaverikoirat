import Image from "next/image";
import dogs from "../public/dogs.jpg";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-xl mt-6 mb-6">Varsinais-Suomen Kaverikoirat</h1>
        <Image
          src={dogs}
          alt="Kaverikoirat"
        />
      </div>
    </main>
  );
}
