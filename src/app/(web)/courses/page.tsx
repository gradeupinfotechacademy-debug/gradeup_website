import { Suspense } from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CoursesSection from '@/components/courses/CoursesSection';
import Spinner from '@/components/ui/Spinner';

export const metadata: Metadata = {
  title: 'All Courses & Programs | Gradeup Infotech Academy',
  description:
    'Explore Gradeup Infotech Academy courses in Data Analytics, Data Science, Full Stack Development, Digital Marketing, Gen AI, Agentic AI, Cloud Computing, Cyber Security, and English Speaking & PD.',
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="All Gradeup Courses"
        subtitle="Master Data Science, AI, Full Stack Development, Cloud, Cyber Security, Digital Marketing, and Communication with industry experts."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'All Courses' },
        ]}
      />
      <Suspense
        fallback={
          <div className="py-24 flex justify-center items-center">
            <Spinner size="lg" label="Loading Courses Catalog..." />
          </div>
        }
      >
        <CoursesSection />
      </Suspense>
    </>
  );
}
