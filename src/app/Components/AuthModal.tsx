"use client";
import { useRouter } from "next/navigation";
export default function AuthModalLayout({ children }: { children: React.ReactNode }) {
      const router = useRouter();

      return (
            <div
                  className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm "
                  onClick={() => router.back()}
            >

                  <div
                        className="relative w-full max-w-122 bg-white rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                  >
                        {children}
                  </div>
            </div>
      );
}