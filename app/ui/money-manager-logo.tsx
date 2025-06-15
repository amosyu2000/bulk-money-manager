import NextImage from 'next/image';
import { Image } from '@mantine/core';
import Icon from '@/app/icon.png';

export function MoneyManagerLogo() {
  return (
    <Image component={NextImage} w={32} h={32} src={Icon} alt="money manager logo" />
  );
}
