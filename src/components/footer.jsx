import { BsWhatsapp, BsLinkedin, BsSnapchat, BsFacebook, BsTelegram, BsTelephoneFill } from "react-icons/bs";



export default function Footer() {
    return (
        <footer className="bg-zinc-900 flex">
             <p className="p-1.5"><BsWhatsapp /></p>
            <p className="p-1.5"><BsLinkedin /></p>
            <p className="p-1.5"><BsSnapchat /></p>
            <p className="p-1.5"><BsFacebook /></p>
            <p className="p-1.5"><BsTelegram /></p>
            <p className="p-2 flex"><BsTelephoneFill /><a href="#">056 1746 799</a></p>

            <div className="flex justify-end text-white" >All Rights Resreved&copy;</div>
        </footer>
    )
}