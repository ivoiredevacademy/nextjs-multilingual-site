import { t } from "i18next";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function About() {

    const  { t } = useTranslation('en', { useSuspense: false })
  return (
      <div>
        <div className="py-20 flex items-center justify-center">
            <div className="w-1/2">
                <h1 className="text-6xl font-bold">{ t('about.title')}</h1>
                <p className="py-10 text-gray-600">
                    { t('about.description')}
                </p>

            </div>
            <div className="w-1/2 px-10 flex justify-center">
                <Image 
                src="/img/team.svg"
                alt=""
                height={400}
                width={400} 
                />
            </div>
        </div>
        <div className="flex flex-col w-3/4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">{ t('about.expertise.title')}</h2>
            <div className="flex">
                <div className="w-1/3 border border-blue-900 p-10 mx-2 text-center">
                    {t('about.expertise.mobile-dev')}
                </div>
                <div className="w-1/3 border border-blue-900 p-10 mx-2 text-center">
                    {t('about.expertise.web-dev')}
                </div>
                <div className="w-1/3 border border-blue-900 p-10 mx-2 text-center">
                    {t('about.expertise.it')}
                </div>
            </div>
        
      </div>
      </div>

  )
}