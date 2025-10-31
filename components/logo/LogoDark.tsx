import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/img_placeholder/logo-dark.png";

const LogoDark = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='Smart Nav' width='200' height='24' />
    </Link>
  );
};

export default LogoDark;
