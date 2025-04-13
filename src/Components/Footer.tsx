
const Footer = () => {
  return (
      <div className="md:flex items-center whitespace-nowrap md:space-x-7  w-11/12 mx-auto">
          <div className="flex items-center gap-2 md:w-full">
              
              <div className="select-none flex items-center">
                  <p className="sohne_bold font-bold">
                      <span className="text-muted-foreground">By</span>{" "}
                      <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://khawarsultan.vercel.app"
                      >
                          Khawar Sultan
                      </a>
                  </p>
                  <img src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={30} height={100} />
              </div>
              <div className="select-none flex items-center gap-2">
                  <p className="sohne_bold font-bold ">
                      <span className="text-muted-foreground"></span>
                      <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/khawardev/docket-react-app"
                      >
                          Github
                      </a>
                  </p>
                  <img
                      className="sm:block hidden rounded-lg"
                      src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                      alt="GitHub Logo"
                      width={25}
                      height={100}
                  />
              </div>
          </div>
      </div>
  )
}

export default Footer