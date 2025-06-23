import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
      <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
          Made with ❤️ by{" "}
          <a
            href='https://github.com/SahilTwitZ/Netflix-Clone'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            Ashutosh
          </a>
          . Check out the source code on{" "}
          <a
            href='https://github.com/SahilTwitZ/Netflix-Clone'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1 font-medium underline underline-offset-4'
          >
            GitHub <FaGithub />
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
