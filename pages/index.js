import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation('en', { useSuspense: false });

  return (
    <div className="py-20 flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold">{ t('home.welcome') }</h1>
        <p className="py-10">
          { t('home.description')}
        </p>
        <Link href="/about">
          <a className="px-6 py-4 bg-blue-500 text-white">{ t('home.learn') }</a>
        </Link>
      </div>
      <div className="w-1/2 px-10 flex justify-center">
        <Image 
          src="/img/company-launch.svg"
          alt=""
          height={400}
          width={400} 
        />
      </div>
    </div>
  )
}
