import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="LWS Xstream Logo" width="200" height="100" />
    </Link>
  );
}