import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Go Back</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image src="https://media1.tenor.com/m/N57Xg6F8-vYAAAAd/monke.gif" alt="two animals holding hearts and smiling gif" width={570} height={300} className="yay-img" priority />
                    <p id="yay">YERERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
                </section>
            </div>
        </div>
    )
}
