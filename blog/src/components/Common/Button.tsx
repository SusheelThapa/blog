interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <a href="/addblog">
      <div className="my-5 bg-gray-700 text-white py-4 px-8 text-center hover:text-black hover:bg-gray-100 cursor-pointer rounded-2xl  w-full text-4xl">
        {text}
      </div>
    </a>
  );
};

export default Button;
