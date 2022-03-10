import Link from "next/link";
import { useTranslation  } from "react-i18next";

export default function Navbar() {
    
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    const handleLangChange = (event) => i18n.changeLanguage(event.target.value)

    return (
        <div className="border border-b border-gray-200">
            <div className="container flex justify-between my-4">
                <span>Logo</span>

                <div>
                    <Link href="/" ><a className="pl-10 inline-flex">{ t('menu.home')}</a></Link>
                    <Link href="/about" ><a className="pl-10 inline-flex">{ t('menu.about')}</a></Link>
                    <div className="pl-10 inline-flex">
                        <select className="p-2" onChange={handleLangChange}>
                            <option value='en' selected>EN</option>
                            <option value='fr'>FR</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}