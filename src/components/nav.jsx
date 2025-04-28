import { BsWhatsapp, BsLinkedin, BsSnapchat, BsFacebook, BsTelegram, BsTelephoneFill } from "react-icons/bs";


export default function Nav() {
    return (
        <nav className="p-2 flex  bg-gray-600 sticky top-0 z-40">
            <p className="p-1.5"><BsWhatsapp /></p>
            <p className="p-1.5"><BsLinkedin /></p>
            <p className="p-1.5"><BsSnapchat /></p>
            <p className="p-1.5"><BsFacebook /></p>
            <p className="p-1.5"><BsTelegram /></p>
            <p className="p-2 flex"><BsTelephoneFill /><a href="#">056 1746 799</a></p>
        </nav>
    )
} 