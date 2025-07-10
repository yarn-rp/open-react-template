import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Blueprint">
      <Image src="/images/blueprint-logo.svg" alt="Blueprint Logo" height={40} width={160} style={{height:40, width:'auto'}} priority />
    </Link>
  );
}
