export default function Navbar() {
  return (
    <div className="shadow">
      <header className="flex justify-between h-[62px] items-center py-2 z-50  max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <span>Task Manager</span>
        <span className="hidden sm:inline">Next.js 15 • Prisma • Shadcn</span>
      </header>
    </div>
  );
}
