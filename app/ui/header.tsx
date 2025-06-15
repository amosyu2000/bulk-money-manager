import { MoneyManagerLogo } from '@/app/ui/money-manager-logo';
import {
  Box,
  Group,
  Title,
} from '@mantine/core';

export function Header() {
  return (
    <Box className="border-b">
      <Group p="md" gap="sm">
        <MoneyManagerLogo />
        <Title order={3} lts={-1.5}>Bulk Money Manager</Title>
      </Group>
    </Box>
  );
}
