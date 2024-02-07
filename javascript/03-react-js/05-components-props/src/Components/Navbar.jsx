import { FaGithub } from "react-icons/fa";


const Navbar =()=> {
    return (
        <div className="bg-violet-500 py-4 px-5 flex items-center justify-between mb-10">
            <div className="flex flex-col gap-x-2">
                <h2 className="text-3xl text-violet-950 font-black">Kai-UI Block</h2>
                <span className="text-sm text-white">Simple UI component that make you faster development</span>
            </div>
            <div>
                <a target="_blank" href="https://www.github.com" className=""><FaGithub className="text-4xl text-white hover:text-black transition-all"/></a>               
            </div>
        </div>
    )
}

export default Navbar;