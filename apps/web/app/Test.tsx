'use client';

import { Button } from '@packages/ui/src/stories/Button';

export default function Test() {
  return (
    <Button
      primary
      label="HELLO"
      onClick={() => {
        alert('sdf');
      }}
    />
  );
}
