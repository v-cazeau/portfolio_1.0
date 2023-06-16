export default function CertCard(cert){
    return (
        <a href={cert.img}>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <img src={cert.img} className="w-full h-56 mx-auto object-cover" alt={cert.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{cert.name}</h1>
                <p className="font-light md:text-lg">Issued by {cert.issued}</p>
                <p className="font-light text-gray-400">{cert.description}</p>

                <p className="font-light text-gray-400">{cert.date}</p>
            </div>
        </div>
        </a>
    )
}
