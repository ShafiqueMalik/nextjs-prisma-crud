import { AppButton } from '@/shared/components/forms/AppButton';

export default async function HomePage() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 rounded-b-3xl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Organize Your Work, Boost Your Productivity
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage tasks effortlessly, stay focused, and get more done with our simple Task Manager.
        </p>
        <AppButton href="/tasks" className="flex justify-center mx-auto py-6 px-12">
          Get Started
        </AppButton>
      </div>
    </section>
  );
}
