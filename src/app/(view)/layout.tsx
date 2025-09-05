import CircularText from "@/components/blocks/TextAnimations/CircularText/CircularText";
import Navs from "@/components/navs";
import { Button } from "@/components/ui/button";
import ThemeChanger from "@/components/ui/theme-changer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="p-12 h-dvh w-dvw">
        {children}
        <Navs />
        <div className="fixed right-[148px] top-12 size-[100px]">
          <div className="relative h-full w-full">
            <CircularText
              text="RAVEN_RAVEN_RAVEN_"
              onHover="speedUp"
              spinDuration={30}
              className="text-foreground!"
            />
            <ThemeChanger />
          </div>
        </div>
      </main>
    </>
  );
}
