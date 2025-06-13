import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const BackButton = () =>
{
  const router = useRouter();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="absolute left-[120px] top-[100px]">
      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => router.push(`/ENTER`)}
        className={`w-full cursor-pointer outline-[2px] rounded-[10px] px-[10px]
          ${isHovering ? "outline-transparent text-gray-950 bg-white" : ""}
        `}
      >
        &#11164; BACK
      </button>
    </div>
  )
}

export default BackButton