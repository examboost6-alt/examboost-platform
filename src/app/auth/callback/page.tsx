import AuthCallbackClient from './AuthCallbackClient';

export const metadata = {
    title: 'Signing you in - ExamBoost',
    description: 'Completing sign in.'
};

export default function AuthCallbackPage() {
    return <AuthCallbackClient />;
}
