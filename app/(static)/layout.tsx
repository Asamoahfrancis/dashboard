import LeftSidePage from "../ui/dashboard/Finance/LeftSidePage";
export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-10  max-w-[1444px] mx-auto gap-4 w-full bg-[#f5f4f9]">
      <section className="col-span-2 shadow-md sticky top-0  h-screen bg-white">
        <LeftSidePage />
      </section>
      <section className="col-span-8  ">{children}</section>
    </main>
  );
}
