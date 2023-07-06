import { useState } from 'react';

export default function Test() {
  const [time , setTime] = useState ("something in the way");

  return (
  <p>{time}</p>
  )
}


