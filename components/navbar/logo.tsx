import Image from 'next/image';

export const WTFLogo = () => (
  <Image
    src="/wtficon_up.png"
    alt="WTF Logo"
    width={34}
    height={34}
    priority
  />
);