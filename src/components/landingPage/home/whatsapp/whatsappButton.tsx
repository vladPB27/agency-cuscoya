// components/whatsapp-button.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
    phone: string;
    message: string;
}

export function WhatsAppButton({ phone, message }: Props) {
    return (
        <Link
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full
        bg-green-500 text-white shadow-xl transition-all hover:scale-110 hover:bg-green-600"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={34} />
        </Link>
    );
}