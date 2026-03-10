import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.examboost.in';

const routes = [
    '/',
    '/exams',
    '/pricing',
    '/free-mock-tests',
    '/foundation',
    '/faq',
    '/blog',
    '/about',
    '/contact',
    '/login',
    '/signup',
    '/privacy-policy',
    '/terms',
    '/refund',

    '/exams/engineering-entrance',
    '/exams/engineering-entrance/jee',
    '/exams/engineering-entrance/jee/jee-main',
    '/exams/engineering-entrance/jee/jee-advanced',
    '/exams/engineering-entrance/bitsat',
    '/exams/engineering-entrance/viteee',
    '/exams/engineering-entrance/srmjeee',
    '/exams/engineering-entrance/state-engineering-exams',
    '/exams/engineering-entrance/state-engineering-exams/kcet',
    '/exams/engineering-entrance/state-engineering-exams/mht-cet',
    '/exams/engineering-entrance/state-engineering-exams/wbjee',

    '/exams/ssc-exams',
    '/exams/ssc-exams/ssc-cgl',
    '/exams/ssc-exams/ssc-chsl',
    '/exams/ssc-exams/ssc-cpo',
    '/exams/ssc-exams/ssc-mts',

    '/exams/banking',
    '/exams/banking/sbi-po',
    '/exams/banking/sbi-clerk',
    '/exams/banking/ibps-po',
    '/exams/banking/ibps-clerk',

    '/exams/upsc-civil-services',
    '/exams/upsc-civil-services/upsc-cse-prelims',
    '/exams/upsc-civil-services/upsc-cse-mains',
    '/exams/upsc-civil-services/upsc-cds',
    '/exams/upsc-civil-services/upsc-capf',

    '/exams/medical-entrance',
    '/exams/medical-entrance/neet-ug',
    '/exams/medical-entrance/afmc',
    '/exams/medical-entrance/jipmer',
    '/exams/medical-entrance/aiims-nursing',

    '/exams/railways',
    '/exams/railways/rrb-ntpc-cbt-1',
    '/exams/railways/rrb-ntpc-cbt-2',
    '/exams/railways/rrb-group-d',
    '/exams/railways/rrb-alp',

    '/exams/state-psc',
    '/exams/state-psc/uppsc-pcs',
    '/exams/state-psc/bpsc',
    '/exams/state-psc/mpsc',
    '/exams/state-psc/rpsc-ras',

    '/exams/mba',
    '/exams/law',
    '/exams/teaching',
    '/exams/police',
    '/exams/cuet',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return routes.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '/' ? 1 : 0.7,
    }));
}
