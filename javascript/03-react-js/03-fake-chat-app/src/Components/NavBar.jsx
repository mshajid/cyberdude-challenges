const NavBar = () => {
    return (
        <div className="bg-[#075e54] py-2 px-5 text-white flex items-center">
            <div className="flex-1">
                <h2 className="text-xl font-semibold tracking-wide">Fake Chat App</h2>
            </div>
            <div className="flex gap-x-2 text-sm">
                <a target="_blank" href="https://github.com/mshajid">GitHub Profile</a>
                <a target="_blank" href="https://github.com/mshajid/cyberdude-challenges">Contribution</a>
            </div>
        </div>
    )
}

export default NavBar;