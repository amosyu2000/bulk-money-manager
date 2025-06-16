'use client';

import { Header } from '@/app/ui/header';
import { isServerUp } from '@/app/lib/utils';
import { Box } from '@mantine/core';

import { useEffect, useState } from 'react';

import { redirect } from 'next/navigation';

export default function Page() {
  const [isManagerUp, setManagerUp] = useState(false);

  useEffect(() => {
    async function foobar() {
      setManagerUp(await isServerUp("http://10.0.0.93:8888"));
    };
    foobar();
  }, []);

  if (isManagerUp) {
    redirect('dashboard/upload');
  } else {
    return (
      <Box>loading...</Box>
    );
  }
}
