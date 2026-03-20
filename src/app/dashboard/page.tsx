"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { getSupabaseClient } from "@/lib/supabaseClient";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  PlayCircle,
  FileText,
  Video,
  Wallet,
  Bell,
  User,
  Zap,
  Activity,
  History,
  MessageCircle,
  Calendar,
  Sparkles,
  Search,
  ChevronRight,
  Menu,
  X,
  Settings,
  HelpCircle,
  Flame,
  CheckCircle,
  Trophy,
  Home,
} from "lucide-react";

const mockPackages = [
  // Engineering
  { id: 'mock-eng-1', title: 'Shikhar JEE Main 2026 Test Series', tags: ['Engineering', '₹1299'], exam: 'Engineering', description: 'Experience the real NTA interface with 15 Premium Full-Length Mock Tests exclusively for JEE Main preparation.', features: ['15 Premium Full Mocks', 'Advanced Accuracy Analytics', 'AI Generated Chapter-wise Questions', 'Rank Prediction'], imageUrl: '/shikhar-jee.png' },
  { id: 'mock-eng-2', title: 'Vijay IIT Advance 2026 Test Series', tags: ['Engineering', '₹1999'], exam: 'Engineering', description: '35+ Tests + Unlimited Practice. Exclusively designed for IIT JEE Advanced 2026 aspirants.', features: ['25 Full JEE Advanced Mocks', '10 Previous Year Papers', 'Unlimited Chapter Wise Tests', 'Unlimited Custom Mock Generator'], imageUrl: '/vijay-jee.png' },
  { id: 'mock-eng-3', title: 'BITSAT Super-15 Series', tags: ['Engineering', '₹599'], exam: 'Engineering', description: 'Specifically mapped to BITSAT marking scheme. Focus on speed, LR and English.', features: ['15 Full Mocks', 'Speed Analytics', 'LR & English Module', 'Memory Based Papers'] },
  { id: 'mock-eng-4', title: 'MHT-CET / State Engineering Mastery', tags: ['Engineering', '₹499'], exam: 'Engineering', description: 'The absolute state-level engineering test pack covering local syllabus guidelines strictly.', features: ['20 State Specific Mocks', 'Board Book Alignment', 'Performance Tracking', 'Doubt Support'] },
  
  // Medical
  { id: 'mock-med-1', title: 'ExamBoost NEET Shourya Test Series 2026', tags: ['Medical', '₹1499'], exam: 'Medical', description: '20 Premium Tests + AI Practice. Build your accuracy with tests simulating the latest NEET UG exam pattern.', features: ['15 Full NEET Mock Tests', '5 Intensive Tests', '10 Official Previous Year Papers', 'Unlimited Custom Mock Generator'], imageUrl: '/shourya-neet.png' },
  { id: 'mock-med-2', title: 'NEET Conqueror: Part & Full Syllabus', tags: ['Medical', '₹799'], exam: 'Medical', description: 'Break down your prep. 40 Part-Syllabus and 15 Full-Syllabus high-yield mock tests.', features: ['15 Full Syllabus Mocks', '40 Part Syllabus Tests', 'Expert Mentorship', 'Detailed Explanations'] },
  { id: 'mock-med-3', title: 'Nursing Target Batch (AIIMS & State)', tags: ['Medical', '₹499'], exam: 'Medical', description: 'The only test series you need for B.Sc Nursing. Complete syllabus coverage.', features: ['25 Topic Tests', 'General Knowledge Section', 'Aptitude Practice', 'Live Doubt Resolution'] },
  { id: 'mock-med-4', title: 'Medical Premium (NEET + AIIMS GK)', tags: ['Medical', '₹699'], exam: 'Medical', description: 'Complete medical entrance package combining NEET syllabus and extra AIIMS modules.', features: ['English Proficiency Tests', 'Logic & Aptitude', '15 Full-Length Mocks', 'Past 10 Years Analysis'] },

  // Banking
  { id: 'mock-bank-1', title: 'SBI PO Champions Test Series', tags: ['Banking', '₹599'], exam: 'Banking', description: 'Includes 20 Prelims and 10 Mains Mock Tests based on latest IBPS/SBI trends.', features: ['20 Pre & 10 Mains Mocks', 'Latest Descriptive Papers', 'Banking Awareness Module', 'Interview Guide'] },
  { id: 'mock-bank-2', title: 'IBPS Clerk Selection Pack', tags: ['Banking', '₹499'], exam: 'Banking', description: 'Crack clerk exams with 30 Prelims mocks & highly repeated puzzle patterns.', features: ['30 Prelims Mocks', 'Speed Math Practice', 'Memory Based Papers', 'Detailed Solutions'] },
  { id: 'mock-bank-3', title: 'RBI Grade B Officer Elite Package', tags: ['Banking', '₹899'], exam: 'Banking', description: 'Exclusive Phase 1 and Phase 2 mocks with specialized ESI & FM coverage.', features: ['ESI & FM Notes', 'Management Modules', '15 Phase 1 Mocks', 'Current Affairs Weekly Analysis'] },
  { id: 'mock-bank-4', title: 'RRB PO/Clerk Gramin Bank Series', tags: ['Banking', '₹499'], exam: 'Banking', description: 'Rural bank target with computer awareness and Hindi language mocks.', features: ['Computer Awareness Tests', 'Hindi Language Mocks', 'State-wise Cutoffs Tracker', 'Bilingual Papers'] },

  // CUET
  { id: 'mock-cuet-1', title: 'CUET UG Science Domain Expert', tags: ['CUET', '₹499'], exam: 'CUET', description: '20 Mocks per domain subject (Physics, Chemistry, Maths/Bio) as per NTA.', features: ['Domain Specific Practice', 'NCERT Synced', 'Computer Based Test UI', 'Detailed Answer Key'] },
  { id: 'mock-cuet-2', title: 'CUET Commerce Top College Pack', tags: ['CUET', '₹499'], exam: 'CUET', description: 'Target SRCC with advanced Accounts, Business Studies & Economics mocks.', features: ['Latest NTA Pattern', 'Case Study Based Questions', 'Speed Analytics', 'Video Solutions'] },
  { id: 'mock-cuet-3', title: 'CUET Humanities & Arts Mastery', tags: ['CUET', '₹499'], exam: 'CUET', description: 'History, Geography, Pol. Science. 15 Full mocks per subject.', features: ['Timeline/Map Based Questions', 'Deep Subject Analysis', '15 Full Mocks per Subject', 'Doubt Forum'] },
  { id: 'mock-cuet-4', title: 'CUET General Test + English/Hindi', tags: ['CUET', '₹499'], exam: 'CUET', description: 'Crack the general test easily. 30 Mocks for GT and 20 for Language.', features: ['Daily Vocab Tests', 'Current Affairs PDFs', '30 Full General Tests', 'Grammar Modules'] },

  // Law
  { id: 'mock-law-1', title: 'CLAT NLSIU Achievers Batch', tags: ['Law', '₹899'], exam: 'Law', description: '35 Full-Length mocks matching actual CLAT rigorous reading comprehension standard.', features: ['35 Full Mock Tests', 'Legal Reasoning Deep Dive', 'Current Affairs & GK Compendium', 'Passage Based Mocks'] },
  { id: 'mock-law-2', title: 'AILET NLU Delhi Target Series', tags: ['Law', '₹799'], exam: 'Law', description: 'Focus on higher logical complexity and speed. 20 Full length AILET mocks.', features: ['Speed & Accuracy Analytics', 'Logical Reasoning Hacks', 'English Comprehensive Tests', 'Previous Papers'] },
  { id: 'mock-law-3', title: 'MH-CET Law (5 Years/3 Years) Pro', tags: ['Law', '₹499'], exam: 'Law', description: 'State specific legal aptitude tests for GLC Mumbai & ILS Pune.', features: ['General Legal Knowledge', 'Static GK', 'Bilingual Tests', 'Regional Focus'] },
  { id: 'mock-law-4', title: 'LSAT India Logic & Analytics Pack', tags: ['Law', '₹999'], exam: 'Law', description: 'Pure logic and analytical breakdown tests identical to original LSAT.', features: ['Analytical Reasoning Drills', 'Critical Read & Understand', 'Exam Simulation UI', 'Personalized Feedback'] },

  // MBA
  { id: 'mock-mba-1', title: 'CAT 99 Percentile IIM Booster', tags: ['MBA', '₹1499'], exam: 'MBA', description: '30 Full-Length CAT Mocks verified by IIM Alumni. Most realistic DILR.', features: ['30 Pro Mocks', 'Detailed VARC Analysis', 'DILR Sets Variations', 'Top IIM Mentors'] },
  { id: 'mock-mba-2', title: 'XAT XLRI Decision Making Pro', tags: ['MBA', '₹1299'], exam: 'MBA', description: 'Master XAT with 15 Mocks focusing heavily on Decision Making.', features: ['Decision Making Cases', 'Advanced GK', 'Essay Writing Practice', 'Percentile Predictor'] },
  { id: 'mock-mba-3', title: 'NMAT/SNAP Maximize Speed Series', tags: ['MBA', '₹999'], exam: 'MBA', description: '20 Adaptive Mocks for NMAT & 15 Speed Mocks for SNAP.', features: ['Adaptive Test Simulation', 'Speed Vocab', 'Quick DI Practice', 'Sectional Timers'] },
  { id: 'mock-mba-4', title: 'CMAT & MAH-CET JBIMS Pack', tags: ['MBA', '₹699'], exam: 'MBA', description: 'Crack secondary MBA entering exams with 25 Full-Length mocks.', features: ['Innovation & Entrepreneurship Section', 'General Awareness Updates', 'Static GK', '25 Full Mocks'] },

  // Police
  { id: 'mock-pol-1', title: 'UP Police Constable Khaki Batch', tags: ['Police', '₹499'], exam: 'Police', description: '25 Full Mock Tests with specially curated UP State GK & Hindi.', features: ['UP GK Focused', 'Hindi Grammar', 'Reasoning Mocks', '25 Full Tests'] },
  { id: 'mock-pol-2', title: 'Delhi Police SI (CPO) Target', tags: ['Police', '₹599'], exam: 'Police', description: '20 Tier-1 and 15 Tier-2 English exclusive mocks for CPO aspirants.', features: ['Tier 1 & Tier 2 English', 'General Awareness', 'Physical Standard Guide', 'Prev Papers'] },
  { id: 'mock-pol-3', title: 'Bihar Police Daroga Selection', tags: ['Police', '₹499'], exam: 'Police', description: 'Crack Bihar SI with 30 bilingual mocks based on recent trends.', features: ['Bihar Specific GK', 'Current Events', 'Quick Mathematics', '30 Full Tests'] },
  { id: 'mock-pol-4', title: 'Rajasthan Police Guaranteed Prep', tags: ['Police', '₹499'], exam: 'Police', description: '20 Mocks covering deep Rajasthan History, Culture & Police Acts.', features: ['Raj GK Weightage', 'Women & Child Crime Laws', 'State Current Affairs', '20 Full Mocks'] },

  // Railways
  { id: 'mock-rail-1', title: 'RRB NTPC CBT-1 & CBT-2 Mahapack', tags: ['Railways', '₹599'], exam: 'Railways', description: '40 CBT-1 and 20 CBT-2 Mocks. Best in class General Science coverage.', features: ['60 Total Full Tests', 'General Awareness Exhaustive', 'General Science Module', 'Speed Analytics'] },
  { id: 'mock-rail-2', title: 'RRB Group D Sure Selection', tags: ['Railways', '₹499'], exam: 'Railways', description: '50 Mock tests focused strictly on Group D level mathematics and science.', features: ['Basic Science Focus', 'Maths Short Tricks', 'Current Affairs PDFs', '50 Full Tests'] },
  { id: 'mock-rail-3', title: 'RRB ALP Loco Pilot Tech Pack', tags: ['Railways', '₹599'], exam: 'Railways', description: 'Unique package bringing 20 Trade specific technical mocks.', features: ['Trade Specific Mocks', 'Engineering Drawing', 'Basic Electrics/Mechanics', 'CBT 1 + CBT 2'] },
  { id: 'mock-rail-4', title: 'RRB JE Technical Mastery', tags: ['Railways', '₹699'], exam: 'Railways', description: 'Crack Railway JE with 30 CBT-1 and 15 Branch Specific CBT-2 mocks.', features: ['Civil/Mech/Electrical Domain Tests', 'Non-Tech CBT 1 Mocks', 'Exam UI Experience', 'Detailed Solutions'] },

  // SSC
  { id: 'mock-ssc-1', title: 'SSC CGL Tier 1 & 2 Officers Batch', tags: ['SSC', '₹799'], exam: 'SSC', description: '40 Tier-1 & 20 Tier-2 mocks based perfectly on TCS updated pattern.', features: ['Tier 2 New Pattern', 'Computer Knowledge Module', 'Advanced Maths Mocks', 'English Comprehension'] },
  { id: 'mock-ssc-2', title: 'SSC CHSL 10+2 LDC Pack', tags: ['SSC', '₹599'], exam: 'SSC', description: '30 Full length CHSL mocks guaranteed to boost typing and objective score.', features: ['Speed Typing Software Link', 'Vocabulary Building', '30 Full Mocks', 'All India Ranking'] },
  { id: 'mock-ssc-3', title: 'SSC MTS Havaldar Series', tags: ['SSC', '₹499'], exam: 'SSC', description: 'Simple, accurate and exam-oriented 50 Mocks for MTS.', features: ['Descriptive Guidance', 'General English', 'Simple Maths', '50 Exams Sets'] },
  { id: 'mock-ssc-4', title: 'SSC GD Constable Fauzi Batch', tags: ['SSC', '₹499'], exam: 'SSC', description: '40 bilingual mocks for GD Constable focusing fully on time management.', features: ['Hindi/English optional tests', 'GS & Current Affairs', 'Elementary Math', 'State Wise Cutoff Analysis'] },

  // State PSC
  { id: 'mock-psc-1', title: 'UPPSC Prelims & Mains Adhikari', tags: ['State PSC', '₹1299'], exam: 'State PSC', description: '20 Prelims GS, 10 CSAT and 15 Mains Mock papers with expert evaluation.', features: ['UP Specific GK', 'CSAT Practice', 'Mains Answer Writing Appraisals', '20 Full Prelims Mocks'] },
  { id: 'mock-psc-2', title: 'BPSC Prelims Success Series', tags: ['State PSC', '₹1299'], exam: 'State PSC', description: '25 Full length Bihar PCS Prelims mock with 5 Option style queries.', features: ['Bihar Economy/Geography', 'History deep dive', 'Option specific mocks', 'Previous 20 yrs papers'] },
  { id: 'mock-psc-3', title: 'MPPSC Pre+Mains Sankalp Batch', tags: ['State PSC', '₹1299'], exam: 'State PSC', description: 'Includes exclusive Ethics and MP Specific GS Mock Tests.', features: ['MP GK Special', 'Information Technology', 'Ethics/Aptitude Papers', 'Interview prep'] },
  { id: 'mock-psc-4', title: 'RPSC RAS Complete State Pack', tags: ['State PSC', '₹1299'], exam: 'State PSC', description: 'Deep focus on Rajasthan Economy, Geography and History. 25 Mocks.', features: ['Rajasthan Rich Culture/History', 'Public Administration', 'Detailed Solutions', 'Current Updates'] },

  // Teaching
  { id: 'mock-teach-1', title: 'CTET Paper 1 & 2 Gurukul Batch', tags: ['Teaching', '₹499'], exam: 'Teaching', description: '30 Full Length CTET sets with top quality Pedagogy (CDP) questions.', features: ['CDP Expert Mocks', 'Maths & EVS', 'Social Science / Science Mocks', 'Language 1 & 2'] },
  { id: 'mock-teach-2', title: 'KVS/NVS PRT TGT PGT Series', tags: ['Teaching', '₹599'], exam: 'Teaching', description: '20 Central Teaching Mocks heavily focused on Subject Domain.', features: ['Subject Specific Domain', 'Teaching Aptitude', 'Reasoning & Computer', 'Interview Prep'] },
  { id: 'mock-teach-3', title: 'DSSSB PRT/TGT Delhi Target', tags: ['Teaching', '₹499'], exam: 'Teaching', description: '25 Full Set mocks designed specially along DSSSB strict time limits.', features: ['Post Specific Subject Mocks', 'Part A Comprehensive', 'High Quality UI', 'Previous Years solved'] },
  { id: 'mock-teach-4', title: 'State TETs (UPTET/REET/HTET)', tags: ['Teaching', '₹499'], exam: 'Teaching', description: 'Local TET examinations mock pack featuring 20 regional level tests.', features: ['State Specific CDP', 'Regional Languages', 'Maths Methodology', '20 Full Section Tests'] },

  // UPSC Civil Services
  { id: 'mock-upsc-1', title: 'UPSC IAS Prelims 2026 Visionary', tags: ['UPSC', '₹1999'], exam: 'UPSC', description: '35 GS Full Tests & 15 CSAT sets. Highest quality closely matching UPSC standard.', features: ['35 GS Full Tests', '15 CSAT Sets', 'Current Affairs Align', 'Economic Survey & Budget'] },
  { id: 'mock-upsc-2', title: 'UPSC Mains Answer Writing Pro', tags: ['UPSC', '₹2999'], exam: 'UPSC', description: '20 Full Length Mains evaluations by ex-Babus and top faculties.', features: ['Expert Evaluation', 'Model Answers', 'GS I-IV Coverage', 'Essay Practice'] },
  { id: 'mock-upsc-3', title: 'UPSC Optional Excellence Mocks', tags: ['UPSC', '₹2499'], exam: 'UPSC', description: '10 exclusive test papers for top scoring optional subjects.', features: ['Paper 1 & Paper 2', 'Previous Year mapping', 'Detailed Feedback', 'Mentor calls'] },
  { id: 'mock-upsc-4', title: 'UPSC NCERT Build-up Foundation', tags: ['UPSC', '₹999'], exam: 'UPSC', description: 'Strengthen base with 30 Mock Tests sourced purely from Class 6-12 NCERTs.', features: ['Class 6-12 NCERT Tests', 'History & Geo focus', 'Subject-wise modules', 'Self assessment tools'] }
];

// --- Real Data Setup ---
export default function StudentDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const [studentInfo, setStudentInfo] = useState<any>({
    name: "Student", targetExam: "Not Set", progress: 0, avatarUrl: null,
    stats: { testsAttempted: 0, accuracy: 0, rank: 0, timeSpent: "0h" }
  });
  const [myTestSeries, setMyTestSeries] = useState<any[]>([]);
  const [freeTests, setFreeTests] = useState<any[]>([]);
  const [recommendedTests, setRecommendedTests] = useState<any[]>([]);
  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [testAnalysisHighlights, setTestAnalysisHighlights] = useState<any>({
    correct: 0, wrong: 0, skipped: 0, strongTopics: [], weakTopics: [],
  });
  const [walletPurchases, setWalletPurchases] = useState<any[]>([]);
  const [leaderboardRows, setLeaderboardRows] = useState<any[]>([]);
  const [lastAttempt, setLastAttempt] = useState<any | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', targetExam: '', email: '' });
  const [editingLoading, setEditingLoading] = useState(false);
  const [editPhotoFile, setEditPhotoFile] = useState<File | null>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }: { data: any }) => {
      if (!data.session) {
        router.replace('/login');
      } else {
        const uid = data.session.user.id;
        setUserId(uid);
        supabase
          .from('profiles')
          .select('admission_completed')
          .eq('id', uid)
          .maybeSingle()
          .then(({ data: profileRow }: { data: any }) => {
            const admissionCompleted = Boolean(profileRow?.admission_completed);
            if (!admissionCompleted) {
              router.replace('/onboarding');
              return;
            }
            fetchDashboardData(uid);
          });
      }
    });

    const fetchDashboardData = async (uid: string) => {
      setLoading(true);
      let isDemo = false;
      try {
        const { data: authUser } = await supabase.auth.getUser();
        setUserEmail(authUser.user?.email || '');
        // Grant all access to every user per user request
        isDemo = true;
      } catch {
        setUserEmail('');
      }

      const getPublicAvatarUrl = (photoPath: string | undefined) => {
        if (!photoPath) return null;
        try {
          const { data } = supabase.storage.from('student-photos').getPublicUrl(photoPath);
          return data?.publicUrl || null;
        } catch {
          return null;
        }
      };

      const { data: profileData } = await supabase.from('profiles').select('*').eq('id', uid).maybeSingle();
      const profile = profileData as any;
      if (profile) {
        setStudentInfo((prev: any) => ({
          ...prev,
          name: profile.full_name || 'Student',
          targetExam: profile.target_exam || 'Not Set',
          avatarUrl: getPublicAvatarUrl(profile.photo_path),
        }));
      }

      const { data: userTestsData } = await supabase
        .from('user_tests')
        .select('*')
        .eq('user_id', uid)
        .order('created_at', { ascending: false });
      const userTests = (userTestsData as any[]) || [];

      const testsAttempted = userTests.length;
      const avgAccuracy = (() => {
        const rows = userTests.filter((r: any) => typeof r.accuracy === 'number');
        if (rows.length === 0) return 0;
        const sum = rows.reduce((acc: number, r: any) => acc + (r.accuracy || 0), 0);
        return Math.round(sum / rows.length);
      })();

      const totalSeconds = userTests.reduce((acc: number, r: any) => acc + (Number(r.time_taken_seconds) || 0), 0);
      const timeSpentHours = Math.round((totalSeconds / 3600) * 10) / 10;
      const timeSpent = timeSpentHours > 0 ? `${timeSpentHours}h` : '0h';

      setStudentInfo((prev: any) => ({
        ...prev,
        stats: {
          ...prev.stats,
          testsAttempted,
          accuracy: avgAccuracy,
          timeSpent,
        },
      }));

      setLastAttempt(userTests[0] || null);

      const { data: purchasesData } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', uid)
        .order('created_at', { ascending: false });
      const purchases = (purchasesData as any[]) || [];

      const seriesIds = purchases.map((p: any) => p.series_id).filter(Boolean);
      if (isDemo) {
        mockPackages.forEach((m) => {
          if (!seriesIds.includes(m.id)) seriesIds.push(m.id);
        });
        const { data: allActiveSeries } = await supabase.from('test_series').select('id').eq('is_active', true);
        if (allActiveSeries) {
          allActiveSeries.forEach((s: any) => {
            if (!seriesIds.includes(s.id)) seriesIds.push(s.id);
          });
        }
      }
      let seriesById = new Map<string, any>();
      if (seriesIds.length > 0) {
        let purchasedSeries: any[] = [];
        
        // Fetch from DB
        const dbSeriesIds = seriesIds.filter((id: string) => !id.startsWith('mock-'));
        if (dbSeriesIds.length > 0) {
          const { data: purchasedSeriesData } = await supabase
            .from('test_series')
            .select('*')
            .in('id', dbSeriesIds);
          if (purchasedSeriesData) purchasedSeries = [...purchasedSeriesData];
        }

        // Merge with local mocks
        const localMockIds = seriesIds.filter((id: string) => id.startsWith('mock-'));
        localMockIds.forEach((id: string) => {
          const mock = mockPackages.find(m => m.id === id);
          if (mock) {
            purchasedSeries.push({
              id: mock.id,
              title: mock.title,
              total_tests: mock.title.includes('Shikhar') ? 15 : mock.title.includes('Vijay') ? 35 : 40, // rough heuristic or parsed
              price_inr: parseInt(mock.tags[1].replace(/[^0-9]/g, '')) || 0,
              category: mock.tags[0],
              exam: mock.exam
            });
          }
        });

        purchasedSeries.forEach((s: any) => seriesById.set(String(s.id), s));

        setMyTestSeries(
          purchasedSeries.map((s: any) => {
            const totalTests = Number(s.total_tests) || 0;
            const attempted = userTests.filter((t: any) => String(t.series_id) === String(s.id)).length;
            const progress = totalTests > 0 ? Math.round((attempted / totalTests) * 100) : 0;
            return {
              id: s.id,
              name: s.title,
              progress,
              totalTests,
              attempted,
              priceInr: s.price_inr ?? null,
              category: s.category ?? null,
              exam: s.exam ?? null,
            };
          })
        );
      } else {
        setMyTestSeries([]);
      }

      setWalletPurchases(
        purchases.map((p: any) => {
          const series = seriesById.get(String(p.series_id));
          return {
            id: p.id,
            created_at: p.created_at,
            amount: p.amount,
            title: series?.title || 'Test Series',
            status: p.status || null,
          };
        })
      );

      const { data: allSeriesData } = await supabase
        .from('test_series')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(100);
      const allSeries = (allSeriesData as any[]) || [];
      setRecommendedTests(
        allSeries.map((s: any) => ({
          id: s.id,
          title: s.title,
          reason: s.exam ? `${s.exam} Package` : 'Premium Package',
          tags: [s.exam || s.category || 'Trending', `₹${s.price_inr ?? 0}`],
        }))
      );

      try {
        const { data: freeData } = await supabase
          .from('tests')
          .select('*')
          .eq('is_free', true)
          .order('created_at', { ascending: false })
          .limit(12);
        const rows = (freeData as any[]) || [];
        if (rows.length > 0) {
          setFreeTests(
            rows.map((t: any) => ({
              id: t.id,
              title: t.title || 'Free Test',
              type: t.exam || 'Free',
              time: t.duration_minutes ? `${t.duration_minutes} mins` : '—',
              questions: t.total_questions ?? t.questions_count ?? 0,
            }))
          );
        } else {
          const { data: freeSeriesData } = await supabase
            .from('test_series')
            .select('*')
            .eq('is_active', true)
            .eq('price_inr', 0)
            .order('created_at', { ascending: false })
            .limit(12);
          const freeSeries = (freeSeriesData as any[]) || [];
          setFreeTests(
            freeSeries.map((s: any) => ({
              id: s.id,
              title: s.title || 'Free Test Series',
              type: s.exam || s.category || 'Free',
              time: s.duration_minutes ? `${s.duration_minutes} mins` : '—',
              questions: s.total_questions ?? s.total_tests ?? 0,
            }))
          );
        }
      } catch {
        try {
          const { data: freeSeriesData } = await supabase
            .from('test_series')
            .select('*')
            .eq('is_active', true)
            .eq('price_inr', 0)
            .order('created_at', { ascending: false })
            .limit(12);
          const freeSeries = (freeSeriesData as any[]) || [];
          setFreeTests(
            freeSeries.map((s: any) => ({
              id: s.id,
              title: s.title || 'Free Test Series',
              type: s.exam || s.category || 'Free',
              time: s.duration_minutes ? `${s.duration_minutes} mins` : '—',
              questions: s.total_questions ?? s.total_tests ?? 0,
            }))
          );
        } catch {
          setFreeTests([]);
        }
      }

      const { data: topUsersData } = await supabase
        .from('user_tests')
        .select('user_id, score')
        .order('score', { ascending: false })
        .limit(20);
      const topRows = (topUsersData as any[]) || [];
      const uniqueUserIds: string[] = Array.from(new Set(topRows.map((r: any) => r.user_id).filter(Boolean)));
      let namesById = new Map<string, string>();
      let photoById = new Map<string, string>();
      if (uniqueUserIds.length > 0) {
        const { data: topProfiles } = await supabase
          .from('profiles')
          .select('id, full_name, photo_path')
          .in('id', uniqueUserIds);
        (topProfiles as any[] | null)?.forEach((p: any) => {
          namesById.set(String(p.id), p.full_name || 'Student');
          if (p.photo_path) photoById.set(String(p.id), String(p.photo_path));
        });
      }

      const rows = topRows.map((r: any, idx: number) => {
        const id = String(r.user_id);
        const avatarUrl = getPublicAvatarUrl(photoById.get(id));
        return {
          rank: idx + 1,
          user_id: id,
          name: namesById.get(id) || 'Student',
          avatarUrl,
          score: typeof r.score === 'number' ? r.score : Number(r.score) || 0,
          isMe: id === uid,
        };
      });
      const myRank = rows.find((r: any) => r.isMe)?.rank || 0;
      setStudentInfo((prev: any) => ({ ...prev, stats: { ...prev.stats, rank: myRank } }));
      setLeaderboardRows(rows);

      const computed = (() => {
        const correct = userTests.reduce((acc: number, r: any) => acc + (Number(r.correct) || 0), 0);
        const wrong = userTests.reduce((acc: number, r: any) => acc + (Number(r.wrong) || 0), 0);
        const skipped = userTests.reduce((acc: number, r: any) => acc + (Number(r.skipped) || 0), 0);
        return { correct, wrong, skipped };
      })();
      setTestAnalysisHighlights((prev: any) => ({
        ...prev,
        correct: computed.correct,
        wrong: computed.wrong,
        skipped: computed.skipped,
      }));

      try {
        const { data: notifData } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', uid)
          .order('created_at', { ascending: false })
          .limit(20);
        setNotifications((notifData as any[]) || []);
      } catch {
        setNotifications([]);
      }

      const bySubject = new Map<string, { attempts: number; accuracySum: number }>();
      userTests.forEach((r: any) => {
        const subject = String(r.subject || r.section || r.exam || 'Overall');
        const acc = typeof r.accuracy === 'number' ? r.accuracy : Number(r.accuracy) || 0;
        const curr = bySubject.get(subject) || { attempts: 0, accuracySum: 0 };
        bySubject.set(subject, { attempts: curr.attempts + 1, accuracySum: curr.accuracySum + acc });
      });
      const perf = Array.from(bySubject.entries())
        .map(([subject, v]) => ({
          subject,
          accuracy: v.attempts > 0 ? Math.round(v.accuracySum / v.attempts) : 0,
          score: null,
        }))
        .filter((r) => r.subject !== 'Overall')
        .slice(0, 6);
      setPerformanceData(perf);

      setLoading(false);
    };
  }, [router]);

  const initiatePayment = async (seriesId: number, amount: number) => {
    if (!userId) {
       alert('Please login first');
       return;
    }
    try {
       const res = await fetch('/api/razorpay/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, seriesId })
       });
       const data = await res.json();
       if (!data.success) { alert('Order creation failed'); return; }

       if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
         alert("Razorpay Key is missing in environment variables. Please add NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local");
         return;
       }

       const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.order.amount,
          currency: data.order.currency,
          name: 'ExamBoost',
          description: 'Test Series Purchase',
          order_id: data.order.id,
          handler: async function (response: any) {
             const verifyRes = await fetch('/api/razorpay/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   razorpay_order_id: response.razorpay_order_id,
                   razorpay_payment_id: response.razorpay_payment_id,
                   razorpay_signature: response.razorpay_signature,
                   userId, seriesId, amount
                })
             });
             const verifyData = await verifyRes.json();
             if (verifyData.success) {
                alert('Payment successful! Series added to your dashboard.');
                window.location.reload();
             } else {
                alert('Payment verification failed.');
             }
          },
          prefill: {
             name: studentInfo.name,
             email: userEmail || 'student@example.com',
          },
          theme: { color: '#2563eb' }
       };

       const rzp = new (window as any).Razorpay(options);
       rzp.open();
    } catch (e) {
       console.error(e);
       alert('Something went wrong setting up razorpay.');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
        setSidebarOpen(false);
      } else {
        setIsMobile(false);
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuGroups = [
    {
      title: "Main Menu",
      items: [
        { id: "overview", label: "Dashboard", icon: LayoutDashboard },
        { id: "courses", label: "Explore Courses", icon: Sparkles },
      ]
    },
    {
      title: "Learning & Tests",
      items: [
        { id: "my-tests", label: "My Test Series", icon: BookOpen },
        { id: "free-tests", label: "Free Tests", icon: Zap },
        { id: "analysis", label: "Test Analysis", icon: BarChart3 },
      ]
    },
    {
      title: "Performance",
      items: [
        { id: "performance", label: "My Performance", icon: TrendingUp },
        { id: "leaderboard", label: "Leaderboard", icon: Award },
      ]
    },
    {
      title: "Settings",
      items: [
        { id: "wallet", label: "Wallet & Purchases", icon: Wallet },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "profile", label: "Profile", icon: User },
        { id: "settings", label: "Settings", icon: Settings },
      ]
    }
  ];

  const quickActions = [
    { title: "Start Free Test", icon: PlayCircle, color: "text-blue-600", bg: "bg-blue-100", action: () => setActiveTab("free-tests") },
    { title: "Buy Test Series", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100", action: () => setActiveTab("recommended") },
    { title: "Previous Tests", icon: History, color: "text-orange-600", bg: "bg-orange-100", action: () => setActiveTab("my-tests") },
    { title: "Leaderboard", icon: Award, color: "text-yellow-600", bg: "bg-yellow-100", action: () => setActiveTab("leaderboard") },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "my-tests":
        return <MyTestsModule />;
      case "free-tests":
        return <FreeTestsModule />;
      case "performance":
        return <PerformanceModule />;
      case "leaderboard":
        return <LeaderboardModule />;
      case "analysis":
        return <TestAnalysisModule />;
      case "courses":
        return <AllCoursesModule />;
      case "wallet":
        return <WalletModule />;
      case "notifications":
        return <NotificationsModule />;
      case "profile":
        return <ProfileModule />;
      case "settings":
        return <SettingsModule />;
      default:
        return <DashboardOverview />;
    }
  };

  const handleEditProfileSave = async () => {
    setEditingLoading(true);
    const supabase = getSupabaseClient();
    if (!supabase) {
      setEditingLoading(false);
      return;
    }

    let emailChanged = false;
    if (editForm.email !== userEmail) {
      const { error } = await supabase.auth.updateUser({ email: editForm.email });
      if (error) {
        alert("Error updating email: " + error.message);
        setEditingLoading(false);
        return;
      }
      emailChanged = true;
    }

    let newAvatarUrl = studentInfo.avatarUrl;

    const updatePayload: any = {
      id: userId,
      full_name: editForm.name,
      target_exam: editForm.targetExam,
    };

    if (editPhotoFile) {
      const formData = new FormData();
      formData.append('photoFile', editPhotoFile);
      formData.append('updatePayload', JSON.stringify(updatePayload));

      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token;
      
      const res = await fetch('/api/student/update-photo', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      const resData = await res.json();
      if (!res.ok) {
        alert("Error updating profile and photo: " + (resData.error || 'Unknown error'));
        setEditingLoading(false);
        return;
      }

      newAvatarUrl = resData.publicUrl || newAvatarUrl;
    } else {
      const { error: profileError } = await supabase.from('profiles').update(updatePayload).eq('id', userId);
      if (profileError) {
        alert('Error updating profile details: ' + profileError.message);
        setEditingLoading(false);
        return;
      }
    }

    setStudentInfo((prev: any) => ({ ...prev, name: editForm.name, targetExam: editForm.targetExam, avatarUrl: newAvatarUrl }));

    if (emailChanged) {
      alert('Profile updated! A verification link has been sent to your new email. Please click the link in your email inbox to confirm the change.');
    } else {
      alert('Profile updated successfully!');
    }
    setIsEditingProfile(false);
    setEditPhotoFile(null);
    setEditingLoading(false);
  };

  // --- Sub-Components for Different Modules ---

  const DashboardOverview = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Banner */}
      <div className="bg-slate-900 w-full rounded-3xl p-8 md:p-10 text-white relative flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl shadow-slate-900/10 overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex-1 w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-5 border border-white/10 text-slate-200 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-400" /> Top 5% Learner
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">Welcome back, {studentInfo.name.split(' ')[0]}!</h1>
          <p className="text-slate-400 mb-8 font-medium text-sm md:text-base max-w-lg leading-relaxed">You're making incredible progress. Keep up the momentum to secure your top rank in upcoming exams.</p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => setActiveTab('my-tests')}
              className="bg-white text-slate-900 px-7 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <PlayCircle className="w-5 h-5" /> {lastAttempt ? 'Resume Last Test' : 'Start a Test'}
            </button>
            <button className="bg-slate-800/80 backdrop-blur-md border border-slate-700 hover:bg-slate-700 text-white px-7 py-3 rounded-xl font-bold text-sm transition-colors inline-flex items-center gap-2">
              <Target className="w-5 h-5" /> Daily Goals
            </button>
          </div>
        </div>

        {/* Daily Mini Widget */}
        <div className="relative z-10 shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full md:w-auto flex flex-row items-center justify-center md:flex-col gap-5 min-w-[180px] shadow-2xl">
           <div className="text-center">
             <div className="w-14 h-14 mx-auto bg-slate-800/80 rounded-full flex items-center justify-center mb-3 border border-slate-700">
                <Flame className="w-7 h-7 text-amber-400" />
             </div>
             <p className="font-black text-3xl tracking-tighter">14</p>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block mt-1">Day Streak</p>
           </div>
           
           <div className="w-px h-16 bg-slate-700 md:hidden block"></div>
           <div className="h-px w-full bg-slate-700 hidden md:block my-2"></div>
           
           <div className="text-center w-full">
              <div className="flex items-center justify-center gap-1.5 mb-2 mt-1">
                 <CheckCircle className="w-4 h-4 text-emerald-400" />
                 <span className="font-bold text-sm text-white">2h / 3h</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Today's Goal</p>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: `66%` }}></div>
              </div>
           </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "Tests Attempted", value: studentInfo.stats.testsAttempted, icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50" },
          { label: "Avg. Accuracy", value: `${studentInfo.stats.accuracy}%`, icon: Target, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "All India Rank", value: `#${studentInfo.stats.rank}`, icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Time Spent", value: studentInfo.stats.timeSpent, icon: Clock, color: "text-rose-600", bg: "bg-rose-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-2">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
            </div>
            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-7 h-7" />
            </div>
          </div>
        ))}
      </div>

      {/* Basic Layout Split */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mt-4">
         
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-6 md:space-y-8">
           <div>
             <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
               <Zap className="w-5 h-5 text-indigo-500" /> Actions Hub
             </h2>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={action.action}
                    className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm hover:border-slate-300 hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-4 group"
                  >
                    <div className={`p-3.5 rounded-2xl bg-slate-50 text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xs text-slate-700 uppercase tracking-wide group-hover:text-indigo-700 transition-colors">{action.title}</span>
                  </button>
                ))}
             </div>
           </div>

           {/* My Active Test Series */}
           <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 md:p-8">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-lg font-bold text-slate-900 tracking-tight">Active Test Series</h2>
               <button onClick={() => setActiveTab("my-tests")} className="text-sm text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-0.5 transition-colors">
                 View All <ChevronRight className="w-4 h-4 ml-0.5" />
               </button>
             </div>
             <div className="space-y-4">
              {myTestSeries.length === 0 ? (
                <div className="p-6 text-center rounded-2xl bg-[#F8F9FA] border border-slate-200/60 text-sm text-slate-500 font-medium">
                  No purchased series yet. Explore components to enroll.
                </div>
              ) : (
                myTestSeries.slice(0, 2).map((ts) => (
                  <div key={ts.id} className="p-5 bg-white border border-slate-200/60 rounded-2xl hover:border-slate-300 hover:shadow-sm transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors">{ts.name}</h3>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md inline-block">Active</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('my-tests')}
                        className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        Open Series
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end text-xs text-slate-500 uppercase tracking-wider font-bold mb-2.5">
                      <span>{ts.attempted}/{ts.totalTests} Complete</span>
                      <span className="text-slate-900">{ts.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${ts.progress}%` }}></div>
                    </div>
                  </div>
                ))
              )}
             </div>
           </div>
         </div>

         {/* Right Sidebar Column */}
         <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                <Sparkles className="w-5 h-5 text-indigo-500" /> Featured Courses
              </h2>
              <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm p-6 space-y-5">
                {recommendedTests.slice(0, 4).map((test) => (
                  <div key={test.id} onClick={() => setActiveTab('courses')} className="group cursor-pointer">
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex-shrink-0 overflow-hidden relative">
                         <img src={`https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&sat=-100`} alt="" className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight truncate mb-1">{test.title}</h3>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{test.tags[1] || 'Premium'}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="h-px w-full bg-slate-100 mt-5 last:hidden"></div>
                  </div>
                ))}
                
                <button onClick={() => setActiveTab('courses')} className="w-full text-center py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-sm rounded-xl transition-colors border border-slate-200">
                  Browse All Courses
                </button>
              </div>
            </div>
         </div>

      </div>
    </div>
  );

  const MyTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <h1 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-4 flex items-center gap-2">
         <BookOpen className="w-6 h-6 text-slate-500" /> My Test Series
       </h1>
       <p className="text-sm text-slate-500 font-medium -mt-4">Track progress for test series you have actively enrolled in or purchased.</p>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTestSeries.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6 text-slate-700 font-semibold col-span-full text-center">
              No purchased test series found.
              <div className="mt-4">
                <button onClick={() => setActiveTab('recommended')} className="bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-6 rounded-lg font-bold transition-colors">Browse Recommended Packs</button>
              </div>
            </div>
          ) : myTestSeries.map((ts) => (
            <div key={ts.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow transition-shadow overflow-hidden flex flex-col justify-between">
               <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 text-slate-800">{ts.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 font-medium">{ts.totalTests} Total Tests • {ts.attempted} Attempted</p>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${ts.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-right text-slate-600 font-bold mb-6">{ts.progress}% Completed</p>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link href={`/series/${ts.id}`} className="block w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-center mt-2 rounded-lg font-bold transition-colors outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">Open Series Dashboard</Link>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2 rounded-lg font-semibold text-sm transition-colors">Analysis</button>
                      <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-2 rounded-lg font-semibold text-sm transition-colors">Results</button>
                    </div>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );

  const FreeTestsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Zap className="w-6 h-6 text-slate-500"/> Free Content</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Unlock free practice tests curated for high-performing students.</p>
        </div>
        <span className="bg-emerald-100/50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg text-sm font-bold w-max">Practice Mode Active</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {freeTests.length === 0 ? (
          <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm text-neutral-700 font-semibold">
            No free tests available right now.
          </div>
        ) : freeTests.map(test => (
          <div key={test.id} className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">{test.type}</span>
              <div className="flex items-center text-neutral-500 text-sm gap-1">
                <Clock className="w-4 h-4" /> {test.time}
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{test.title}</h3>
            <p className="text-neutral-500 text-sm mb-5">{test.questions} Questions • All India Ranking</p>
            <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 rounded-lg transition-colors">
              Attempt Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const PerformanceModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-4 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-slate-500"/> My Performance</h1>
        <p className="text-sm text-slate-500 font-medium mt-2">Comprehensive analytics and metrics to measure your exam readiness.</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
          <Activity className="w-8 h-8 text-slate-700 mb-2"/>
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Accuracy</span>
          <span className="text-2xl font-bold text-slate-800">{studentInfo.stats.accuracy}%</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
          <Award className="w-8 h-8 text-amber-500 mb-2"/>
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Rank</span>
          <span className="text-2xl font-bold text-slate-800">#{studentInfo.stats.rank}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
          <Target className="w-8 h-8 text-emerald-500 mb-2"/>
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Avg Score</span>
          <span className="text-2xl font-bold text-slate-800">124.5</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
          <Clock className="w-8 h-8 text-orange-500 mb-2"/>
          <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-1">Time/Q</span>
          <span className="text-2xl font-bold text-slate-800">42s</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
         <div className="bg-white p-6 rounded-xl border border-slate-200">
           <h3 className="font-bold text-lg mb-1 text-slate-800">Subject Wise Accuracy</h3>
           <p className="text-xs text-slate-500 font-medium mb-6">Identifies your strongest and weakest academic domains.</p>
           {performanceData.length === 0 ? (
             <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600 font-semibold">
               Attempt at least one test to see subject-wise performance.
             </div>
           ) : (
             <div className="space-y-4">
                {performanceData.map(d => (
                  <div key={d.subject}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-neutral-700">{d.subject}</span>
                      <span className="font-bold text-neutral-900">{d.accuracy}%</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-2">
                      <div className={`h-2 rounded-full ${d.accuracy > 80 ? 'bg-green-500' : d.accuracy > 70 ? 'bg-blue-500' : 'bg-orange-500'}`} style={{ width: `${d.accuracy}%` }}></div>
                    </div>
                  </div>
                ))}
             </div>
           )}
         </div>

         <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-1 text-slate-800 flex items-center gap-2"><Target className="w-5 h-5 text-red-500"/> Weak Topics to Improve</h3>
            <p className="text-xs text-slate-500 font-medium mb-6">AI generated focus zones based on recent test mistakes.</p>
            {(testAnalysisHighlights.weakTopics?.length || 0) === 0 ? (
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600 font-semibold">
                No weak topics detected yet.
              </div>
            ) : (
              <ul className="space-y-3">
                {testAnalysisHighlights.weakTopics?.map((topic: string, i: number) => (
                  <li key={i} className="flex items-center justify-between p-3 bg-red-50 text-red-800 rounded-lg text-sm font-medium">
                    {topic}
                    <button className="px-3 py-1 bg-white text-red-600 rounded text-xs font-bold hover:bg-red-100">Practice</button>
                  </li>
                ))}
              </ul>
            )}
         </div>
      </div>
    </div>
  );

  const LeaderboardModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Award className="w-6 h-6 text-slate-500"/> Global Leaderboard</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Check where you stand amongst your peers in India.</p>
        </div>
        <span className="bg-amber-100/50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 w-max"><Award className="w-4 h-4"/> Gamification Active</span>
      </div>
      
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
        <div className="flex border-b bg-slate-50 min-w-[500px]">
          <button className="px-6 py-3 font-semibold text-blue-600 border-b-2 border-blue-600">Weekly Rank</button>
          <button className="px-6 py-3 font-semibold text-neutral-500 hover:text-neutral-700">All India Rank</button>
          <button className="px-6 py-3 font-semibold text-neutral-500 hover:text-neutral-700">Top Students</button>
        </div>
        
        <div className="p-0">
          {leaderboardRows.length === 0 ? (
            <div className="p-6 text-neutral-700 font-semibold">Leaderboard data is not available yet.</div>
          ) : leaderboardRows.map((user: any, i: number) => (
            <div key={i} className={`flex items-center p-4 border-b last:border-0 ${user.isMe ? 'bg-blue-50 border-blue-100' : 'hover:bg-neutral-50'}`}>
               <div className="w-12 text-center font-bold text-lg text-neutral-500">#{user.rank}</div>
               <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold mx-4 overflow-hidden shrink-0">
                 {user.avatarUrl ? (
                   <img src={user.avatarUrl} alt={`${user.name || 'Student'} photo`} className="w-full h-full object-cover" />
                 ) : (
                   <span>{user.name?.charAt(0) || 'S'}</span>
                 )}
               </div>
               <div className="flex-1">
                 <div className="flex items-center justify-between">
                   <div>
                     <div className="font-bold text-neutral-800 flex items-center gap-2">
                       <span>{user.name}</span>
                       {user.isMe && <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded ml-2">You</span>}
                     </div>
                   </div>
                   <div className="font-bold text-neutral-800 mr-4">{user.score}</div>
                 </div>
               </div>
               <div className="w-8 flex justify-center">
                 <div className="w-3 h-0.5 bg-neutral-300"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TestAnalysisModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 border-b pb-4 flex items-center gap-2"><BarChart3 className="w-6 h-6 text-slate-500"/> Test Analysis</h1>
        <p className="text-sm text-slate-500 font-medium -mt-4">In-depth statistical breakdown of your test attempts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center hover:border-emerald-300 transition-colors">
          <div className="w-20 h-20 rounded-full bg-emerald-50 flex flex-col items-center justify-center mb-4 text-emerald-600 border border-emerald-100">
            <span className="text-2xl font-bold">{testAnalysisHighlights.correct}</span>
          </div>
          <h3 className="font-bold text-slate-700">Correct</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center hover:border-red-300 transition-colors">
          <div className="w-20 h-20 rounded-full bg-red-50 flex flex-col items-center justify-center mb-4 text-red-600 border border-red-100">
            <span className="text-2xl font-bold">{testAnalysisHighlights.wrong}</span>
          </div>
          <h3 className="font-bold text-slate-700">Wrong</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center hover:border-slate-300 transition-colors">
          <div className="w-20 h-20 rounded-full bg-slate-50 flex flex-col items-center justify-center mb-4 text-slate-600 border border-slate-200">
            <span className="text-2xl font-bold">{testAnalysisHighlights.skipped}</span>
          </div>
          <h3 className="font-bold text-slate-700">Skipped</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 mt-6">
        <h3 className="text-lg font-bold mb-4">Topic-wise Analysis (Recent SSC CGL Test)</h3>
        {(studentInfo.stats.testsAttempted || 0) === 0 ? (
          <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 font-semibold">
            Attempt a test to unlock detailed analysis.
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {['Quantitative Aptitude', 'General Intelligence', 'English Language', 'General Awareness'].map(subject => (
                <div key={subject} className="flex flex-col gap-2">
                  <div className="flex justify-between font-medium text-sm text-neutral-700">
                    <span>{subject}</span>
                    <span>Summary</span>
                  </div>
                  <div className="flex h-3 rounded-full overflow-hidden">
                    <div className="bg-green-500" style={{ width: '60%' }} title="Correct"></div>
                    <div className="bg-red-500" style={{ width: '20%' }} title="Wrong"></div>
                    <div className="bg-neutral-300" style={{ width: '20%' }} title="Skipped"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4 text-xs font-medium text-neutral-500 justify-center">
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Correct</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Wrong</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 bg-neutral-300 rounded-sm"></div> Skipped</span>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const AllCoursesModule = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedExam, setSelectedExam] = useState("All");
    const [selectedCourse, setSelectedCourse] = useState<any>(null); // For detail modal


    const combinedData = recommendedTests.map(t => ({
      ...t, 
      exam: t.tags?.[0] || 'Other', 
      description: t.reason,
      features: ['Full Length Subject Mocks', 'Detailed Performance Analysis', 'All India Benchmarking']
    }));
    
    // Inject mocks if not present in DB to guarantee visual richness
    const merged = [...combinedData];
    mockPackages.forEach(m => {
      // Very basic collision checks
      if (!merged.find(db => db.title.toLowerCase().includes(m.exam.toLowerCase()) && db.tags?.[0] === m.exam)) {
        merged.push({ id: m.id, title: m.title, tags: m.tags, exam: m.exam, reason: m.description, description: m.description, features: m.features, imageUrl: (m as any).imageUrl });
      }
    });

    const exams = ["All", "Engineering", "Medical", "Banking", "CUET", "Law", "MBA", "Police", "Railways", "SSC", "State PSC", "Teaching", "UPSC"];

    const filtered = merged.filter(test => {
      const matchSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (test.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchExam = selectedExam === "All" || test.exam === selectedExam || test.tags?.includes(selectedExam);
      return matchSearch && matchExam;
    });

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200/60 pb-5 gap-6">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
              <Sparkles className="w-8 h-8 text-indigo-500" /> Explore Courses
            </h1>
            <p className="text-slate-500 font-medium mt-2 text-sm md:text-base mb-6">Discover premium test series curated by top educators across India for all major exams.</p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 max-w-md focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow rounded-xl shadow-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search for test series like 'JEE Main' or 'NEET UG'..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {exams.map(exam => (
            <button
              key={exam}
              onClick={() => setSelectedExam(exam)}
              className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${selectedExam === exam ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 border-indigo-600' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
            >
              {exam}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4"><Search className="w-10 h-10 text-slate-400" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">No courses found</h3>
              <p className="text-slate-500 font-medium max-w-sm">We couldn't find any courses matching your search. Try adjusting your query or selected exam filter.</p>
            </div>
          ) : filtered.map((test, i) => (
            <div key={test.id} className="bg-white rounded-2xl border border-slate-200/60 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 group flex flex-col overflow-hidden">
              <Link href={`/series/${test.id}`} className="relative h-44 w-full bg-slate-100 overflow-hidden block">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-100 group-hover:scale-105 transition-transform duration-700"></div>
                <img 
                  src={(test as any).imageUrl || `https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sat=-50`} 
                  alt={test.title}
                  onError={(e) => { e.currentTarget.style.opacity = '0.5'; }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 justify-between w-full px-4 flex">
                  <span className="bg-white/95 backdrop-blur-sm text-indigo-700 text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {test.tags?.[0] || 'Premium'}
                  </span>
                  <span className="bg-emerald-500 text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {test.tags?.[1] || '₹499'}
                  </span>
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2 text-slate-900 tracking-tight leading-snug line-clamp-2">{test.title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2 leading-relaxed">{test.description || test.reason}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-center">
                  <Link 
                    href={`/series/${test.id}`}
                    className={`w-full text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-sm ${myTestSeries.some(s => s.id === test.id) ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'}`}
                  >
                    {myTestSeries.some(s => s.id === test.id) ? 'Open Series' : 'Enroll Now'} <ChevronRight className="w-4 h-4"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Details Modal */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-slate-900/60 backdrop-blur-sm p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
              >
                {/* Modal Header inside image */}
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden shrink-0">
                  <img 
                    src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&sat=-50`} 
                    alt={selectedCourse.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-70" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  <button 
                    onClick={() => setSelectedCourse(null)} 
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-indigo-500 text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm mb-3">
                      {selectedCourse.tags?.[0] || 'Premium Series'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">{selectedCourse.title}</h2>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 md:p-8 overflow-y-auto bg-slate-50 flex-1">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm mb-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">About Test Series</h3>
                    <p className="text-slate-700 font-medium leading-relaxed">{selectedCourse.description || selectedCourse.reason}</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {selectedCourse.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-700">{feature}</span>
                        </li>
                      )) || (
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-700">Everything needed to ace your exam.</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="text-center sm:text-left">
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-0.5">Package Price</p>
                    <div className="text-3xl font-black text-slate-900">{selectedCourse.tags?.[1] || '₹499'}</div>
                  </div>
                  {myTestSeries.some(s => s.id === selectedCourse.id) ? (
                    <Link href={`/series/${selectedCourse.id}`} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 font-bold py-3.5 px-10 rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95">
                      Open Series <ChevronRight className="w-5 h-5"/>
                    </Link>
                  ) : (
                    <button 
                      onClick={() => {
                        initiatePayment(selectedCourse.id, parseInt((selectedCourse.tags?.[1] || '').replace('₹','') || '499'));
                        setSelectedCourse(null);
                      }} 
                      className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 font-bold py-3.5 px-10 rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
                    >
                      Enroll Now <ChevronRight className="w-5 h-5"/>
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const WalletModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Wallet & Purchases</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 col-span-1 md:col-span-2">
          <h3 className="text-neutral-400 font-medium mb-1">Active Subscription</h3>
          <h2 className="text-3xl font-bold mb-4">Examboost Pro Max</h2>
          <div className="flex gap-8 border-t border-neutral-700 pt-4 mt-4">
             <div>
               <p className="text-xs text-neutral-400">Valid Till</p>
               <p className="font-semibold">24 Dec 2026</p>
             </div>
             <div>
               <p className="text-xs text-neutral-400">Auto-Renew</p>
               <p className="font-semibold text-green-400">Enabled</p>
             </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6 flex flex-col justify-center gap-4">
           <button className="w-full font-semibold border-2 border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors">Upgrade Plan</button>
           <button className="w-full font-semibold text-neutral-600 bg-neutral-100 py-3 rounded-lg hover:bg-neutral-200 transition-colors">View Invoices</button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mt-6">
         <div className="p-4 border-b bg-neutral-50 font-bold text-neutral-700">Recent Purchases</div>
         {walletPurchases.length === 0 ? (
           <div className="p-6 text-neutral-700 font-semibold">No purchases found.</div>
         ) : walletPurchases.slice(0, 10).map((p: any) => (
           <div key={p.id} className="p-4 flex items-center justify-between border-b last:border-0 hover:bg-neutral-50">
             <div>
               <h4 className="font-semibold text-neutral-800">{p.title}</h4>
               <p className="text-xs text-neutral-500">{p.created_at ? new Date(p.created_at).toLocaleDateString() : ''}</p>
             </div>
             <span className="font-bold text-neutral-800">₹{Number(p.amount) || 0}</span>
           </div>
         ))}
      </div>
    </div>
  );

  const NotificationsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <h1 className="text-2xl font-bold text-neutral-800 border-b pb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="p-6 bg-white rounded-xl border border-neutral-200 shadow-sm text-neutral-700 font-semibold">No notifications.</div>
        ) : notifications.map((n: any) => (
          <div key={n.id || `${n.created_at}-${n.title}`} className="flex gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-100 text-blue-600">
              <Bell className="w-5 h-5"/>
            </div>
            <div>
              <h4 className="font-bold text-neutral-800">{n.title || 'Notification'}</h4>
              <p className="text-sm text-neutral-600 mt-0.5">{n.message || n.body || ''}</p>
              <span className="text-xs text-neutral-400 mt-2 block">{n.created_at ? new Date(n.created_at).toLocaleString() : ''}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileModule = () => (
    <>
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div className="border-b pb-4">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><User className="w-6 h-6 text-slate-500"/> My Profile</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Manage your account and exam preferences.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 space-y-4 text-center md:text-left">
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center relative overflow-hidden">
            <div className="w-24 h-24 bg-slate-100 text-slate-400 border border-slate-200 rounded-full flex items-center justify-center text-4xl font-bold mb-4 overflow-hidden">
              {studentInfo.avatarUrl ? (
                <img src={studentInfo.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                studentInfo.name.charAt(0)
              )}
            </div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">{studentInfo.name}</h2>
            <p className="text-slate-500 font-medium text-sm mb-4">{userEmail || '—'}</p>
            <span className="inline-flex bg-slate-900 border border-slate-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Verified Profile</span>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hidden md:block">
            <h3 className="font-bold text-slate-800 mb-4 tracking-tight">Active Features</h3>
            <ul className="space-y-3 text-sm font-semibold text-slate-600">
              <li className="flex items-center gap-2"><HelpCircle className="w-4 h-4 text-slate-400"/> Doubt Solving (24/7)</li>
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-slate-400"/> Discussion Forum</li>
              <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-slate-400"/> Daily Current Affairs</li>
              <li className="flex items-center gap-2"><Target className="w-4 h-4 text-slate-400"/> Rank Predictor</li>
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400"/> Exam Calendar</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-6 text-slate-800 flex items-center gap-2"><Settings className="w-5 h-5 text-slate-500"/> Preferences</h3>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Target Exam</label>
                <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">{studentInfo.targetExam}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Language</label>
                  <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">English</div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">State Zone</label>
                  <div className="font-medium text-slate-800 bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg">General</div>
                </div>
              </div>
              <button 
                onClick={() => {
                  setEditForm({ name: studentInfo.name, targetExam: studentInfo.targetExam, email: userEmail });
                  setEditPhotoFile(null);
                  setIsEditingProfile(true);
                }}
                className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg font-bold mt-4 hover:border-slate-300 hover:bg-slate-50 transition-colors w-full sm:w-auto"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {isEditingProfile && (
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">Edit Profile</h3>
            <button onClick={() => setIsEditingProfile(false)} className="text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5"/>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center text-slate-400 font-bold mb-3">
                 {editPhotoFile ? (
                   <img src={URL.createObjectURL(editPhotoFile)} alt="Preview" className="w-full h-full object-cover" />
                 ) : studentInfo.avatarUrl ? (
                   <img src={studentInfo.avatarUrl} alt="Current" className="w-full h-full object-cover" />
                 ) : (
                   studentInfo.name.charAt(0)
                 )}
              </div>
              <label className="cursor-pointer text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors border border-indigo-100">
                Change Photo
                <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setEditPhotoFile(e.target.files[0]);
                  }
                }} />
              </label>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Full Name</label>
              <input 
                type="text" 
                value={editForm.name} 
                onChange={e => setEditForm({...editForm, name: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Email (Requires Verification Link)</label>
              <input 
                type="email" 
                value={editForm.email} 
                onChange={e => setEditForm({...editForm, email: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Target Exam</label>
              <input 
                type="text" 
                value={editForm.targetExam} 
                onChange={e => setEditForm({...editForm, targetExam: e.target.value})}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-700 font-medium"
              />
            </div>
          </div>
          <div className="p-6 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
            <button onClick={() => setIsEditingProfile(false)} className="px-5 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
            <button onClick={handleEditProfileSave} disabled={editingLoading} className="px-5 py-2 rounded-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center gap-2">
              {editingLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );

  const SettingsModule = () => (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      <div className="border-b pb-4">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2"><Settings className="w-6 h-6 text-slate-500"/> Account Settings</h1>
        <p className="text-sm text-slate-500 font-medium mt-1">Manage your notification preferences, theme, and security.</p>
      </div>
      
      <div className="space-y-6">
        {/* Notifications Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">Email Notifications</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Receive test results and announcements via email.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">SMS Alerts</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Get important updates about live classes on SMS.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Display Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Display & Appearance</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-700 text-sm">Dark Mode</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Toggle dark theme for late night studies.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h3 className="font-bold text-lg mb-4 text-slate-800 border-b border-slate-100 pb-2">Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-700 text-sm">Change Password</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Update your account password regularly.</p>
              </div>
              <button 
                onClick={() => alert("Change password feature will send a reset link to your email.")}
                className="bg-white border text-sm border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                Update
              </button>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <p className="font-bold text-red-600 text-sm">Delete Account</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Permanently delete your account and data.</p>
              </div>
              <button 
                onClick={() => alert("Please contact support to delete your account.")}
                className="bg-red-50 border text-sm border-red-200 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans flex text-slate-900 selection:bg-blue-200">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? "17rem" : "0rem" }}
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 bg-white border-r border-slate-200/60 overflow-y-auto no-scrollbar lg:transition-all lg:duration-300 ${!sidebarOpen && !isMobile ? 'border-r-0' : ''}`}
        style={{ transform: (isMobile && !sidebarOpen) ? 'translateX(-100%)' : 'translateX(0)' }}
      >
        <div className="p-6 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
          <span className="text-2xl font-black text-slate-800 tracking-tight w-full flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center rotate-3">
              <span className="text-white text-lg font-bold -rotate-3">E</span>
            </div>
            ExamBoost
          </span>
          {isMobile && (
            <button aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-slate-500" />
            </button>
          )}
        </div>

        <nav className="px-4 pb-8 space-y-1">
          {menuGroups.map((group, groupIdx) => (
            <div key={groupIdx} className={groupIdx > 0 ? "pt-4" : ""}>
              <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 mt-2 whitespace-nowrap overflow-hidden">
                {group.title}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); if(isMobile) setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl font-medium transition-all tooltip-trigger overflow-hidden whitespace-nowrap ${
                      activeTab === item.id 
                        ? "bg-indigo-50/80 text-indigo-700 font-bold" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className={`w-[20px] h-[20px] shrink-0 ${activeTab === item.id ? "text-indigo-600" : "text-slate-400"}`} />
                    <span className={`text-sm tracking-tight ${activeTab === item.id ? 'font-bold' : ''}`}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden w-full lg:max-w-[calc(100vw-17rem)] transition-all duration-300 pt-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-4 md:px-8 py-3.5 flex items-center justify-between supports-[backdrop-filter]:bg-white/50">
           <div className="flex items-center gap-4 text-slate-800">
             <button aria-label="Toggle sidebar" onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
               <Menu className="w-5 h-5 text-slate-600" />
             </button>
             
             <div className="hidden md:flex relative group">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search courses, tests..." 
                  className="pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 border rounded-full w-72 text-sm font-medium outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
             </div>
           </div>
           
           <div className="flex items-center gap-2.5 md:gap-4">
             <button aria-label="Go to Home" className="relative p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => router.push('/')}>
               <Home className="w-5 h-5" />
             </button>
             <button aria-label="Open notifications" className="relative p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => setActiveTab('notifications')}>
               <Bell className="w-5 h-5" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button aria-label="Open settings" className="hidden md:flex p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-full transition-colors" onClick={() => setActiveTab('settings')}>
               <Settings className="w-5 h-5" />
             </button>
             <div className="w-px h-6 bg-slate-200 hidden md:block mx-1"></div>
             <button 
                onClick={() => setActiveTab('profile')}
                className="flex items-center gap-2.5 hover:bg-slate-100 p-1.5 pr-4 rounded-full transition-colors border border-transparent hover:border-slate-200"
             >
               <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm z-10 overflow-hidden shrink-0">
                 {studentInfo.avatarUrl ? (
                   <img src={studentInfo.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                 ) : (
                   (studentInfo.name || 'S').charAt(0)
                 )}
               </div>
               <span className="font-semibold text-sm text-slate-700 hidden md:block">{studentInfo.name}</span>
             </button>
           </div>
        </header>

        {/* Dynamic Inner Content */}
        <div className="p-4 md:p-8 flex-1 w-full max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

    </div>
  );
}

// Reusable dummy globe icon component for Profile
const Globe = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);
