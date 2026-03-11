import React from 'react';
import ExamsClient from './ExamsClient';

export const metadata = {
    title: 'All Exams - ExamBoost',
    description: 'Browse all competitive exams test series, syllabus, and study materials.'
};

export default function ExamsListingPage() {
    return <ExamsClient />;
}
