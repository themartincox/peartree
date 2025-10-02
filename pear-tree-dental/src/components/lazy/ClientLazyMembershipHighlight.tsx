"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MembershipHighlight = dynamic(() => import("@/components/MembershipHighlight"), { ssr: false });

export default function ClientLazyMembershipHighlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return <div ref={ref}>{visible ? <MembershipHighlight /> : null}</div>;
}

