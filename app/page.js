
import Image from "next/image";
import Link from "next/link";
import ClipLoader from "react-spinners/ClipLoader";
const gallery = [
  {
    _id: 1,
    title: "Spider-Man",
    imageUrl: "/img1.jpeg",

  },
  {
    _id: 2,
    title: "Spider-Man",
    imageUrl: "/img2.jpeg",

  },
  {
    _id: 3,
    title: "Spider-Man",
    imageUrl: "/img3.jpeg",

  }
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">

      {
        !gallery || gallery.length <= 0 ? (<div className="flex justify-center items-center min-h-[750px] ">
          <ClipLoader color="#ef4444" className="transition-all " />

        </div>) : gallery.length > 0 ? (

          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5">

            {
              gallery.map(item => {
                return (
                  <Link href={`/pin/${item._id}`} className="relative mb-4 group">
                    <Image src={item.imageUrl} alt={item.title} height={300} width={300} priority="false" className="h-auto rounded-lg" />
                    <span className="absolute p-3 font-bold rounded-lg inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-90
                    transition-opacity duration-400  ">
                      <p className="bg-gray-200 w-[50%] rounded-md text-center">{item.title}</p>
                    </span>
                  </Link>
                );
              })
            }
          </div>
        ) : <div className="min-h-[750px] flex justify-center items-center text-red-50 font-semibold">
          No results found for your search
        </div>
      }
    </div >
  );
}
