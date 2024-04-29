interface Props {
  text: string;
  className?: string;
  href?: string;
  onclick?: () => void;
}

const Button = ({ text, className, href, onclick }: Props) => {
  return (
    <a href={href || "/"}>
      <div
        className={`my-5 py-4 px-8 text-center  cursor-pointer rounded-2xl  w-full text-2xl ${className}`}
        onClick={onclick}
      >
        {text}
      </div>
    </a>
  );
};

export default Button;
