import Image from "next/image";

export default function notFound() {
    return (
        <div className="container">
            <section>
                <p>Page Not Found</p>
                <Image src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9jMDI3bmdkZWpkYzJlZTc2dXRnZ2FqNzZrbHFqYXR2a3E2bWxtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dbupKbo1Jg8mIIsia6/giphy.gif" alt="cute cat crying gif" width={340} height={300} />
            </section>
        </div>
    )
}
