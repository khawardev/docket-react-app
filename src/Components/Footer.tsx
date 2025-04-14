const Footer = () => {
    return (
        <div className="select-none flex items-center ">
            <a
                href="https://khawarsultan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1  hover:bg-slate-200 rounded-lg"
            >
                <img
                    src="https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx"
                    alt="Portfolio"
                    width={30}
                    height={100}
                />
            </a>
            <a
                href="https://github.com/khawardev/docket-react-app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-[9px]  hover:bg-slate-200 rounded-lg"
            >
                <img
                    className="sm:block rounded-md"
                    src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                    alt="GitHub Logo"
                    width={20}
                    height={100}
                />
            </a>
        </div>
    );
};

export default Footer;
