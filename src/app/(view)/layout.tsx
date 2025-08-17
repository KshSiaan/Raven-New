import CircularText from "@/components/blocks/TextAnimations/CircularText/CircularText";
import Navs from "@/components/navs";

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
            <div className="size-[100px] rounded-full bg-foreground absolute left-full top-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"></div>
          </div>
        </div>
      </main>
    </>
  );
}
