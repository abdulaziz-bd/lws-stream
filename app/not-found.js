import { cookies } from "next/headers";
import Link from "next/link";
import { getDictionary } from "./[lang]/dictionaries";

export default async function NotFound() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("locale")?.value || "en";

  const dictionary = await getDictionary(lang);
  return (
    <div className="text-center mt-[100px]">
      <div className="grid grid-rows-2 text-center p-8 bg-white rounded-lg shadow-lg text-black mb-[50px]">
        <h2>{dictionary?.page_not_found}</h2>
        <p>{dictionary?.page_not_found_details}</p>
      </div>

      <Link
        href="/"
        className="inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {dictionary?.return_home}
      </Link>
    </div>
  );
}
