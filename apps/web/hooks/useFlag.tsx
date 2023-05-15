import { useState } from 'react';

type Props = {
  initialValue?: boolean;
};

export const useFlag = ({ initialValue = false }: Props) => {
  const [flag, setFlag] = useState(initialValue);

  return <div>{initialValue}</div>;
};
