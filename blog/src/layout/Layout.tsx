interface Props {
  children: React.ReactNode;
  className?: string;
}
const Layout = ({ className, children }: Props) => {
  return <div className={`${className} mx-96 mt-10 `}>{children}</div>;
};

export default Layout;
