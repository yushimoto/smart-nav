import Image from 'next/image';
import Link from 'next/link';

const LogoDark = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src='/logos/SN-circle-orange-black_icon-256.png'
        alt='SMARTNAV'
        width={28}
        height={28}
      />
      <Image
        src='/logos/SN-black-text_navbar-lg-400w.png'
        alt='SMARTNAV'
        width={140}
        height={24}
      />
    </Link>
  );
};

export default LogoDark;
