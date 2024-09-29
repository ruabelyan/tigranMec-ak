import Link from "next/link"
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/router"

export default function Menu() {
    const { t ,i18n} = useTranslation();

    return (
        <>
            <ul className="navigation clearfix">
                <li ><Link href="/">{t("home_key")}</Link>
                </li>
                <li><Link href="/about-us">{t("aboutUs_key")}</Link></li>
                <li ><Link href="/service">{t("services_key")}</Link>
                </li>
                <li ><Link href="/team">{t("staff_key")}</Link>
                </li>
                <li><Link href="/contact">{t("contact_key")}</Link></li>
            </ul>

        </>
    )
}
