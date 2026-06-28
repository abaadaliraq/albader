import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الرؤية الاستراتيجية | الجسر الثقافي العراقي الصيني",
  description:
    "الرؤية الاستراتيجية لمبادرة تنظيم الوفود الصينية في العراق، وتحويل الزيارات إلى تجربة ثقافية وسياحية واقتصادية قابلة للمتابعة.",
};

export default function VisionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
