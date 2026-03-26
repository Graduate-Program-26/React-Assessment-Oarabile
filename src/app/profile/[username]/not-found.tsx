import Image from "next/image";
export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Image
          src="/No-data-rafiki.svg"
          className="w-64 md:w-96 lg:w-[500px]"
          alt="page has not been found"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-4">User Not Found</h2>
      </div>
    </div>
  );
}
