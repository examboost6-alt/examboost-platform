"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLayout from "@/components/AdminLayout";
import { 
  Users, 
  Activity, 
  TrendingUp,
  Eye,
  Clock,
  MapPin,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Filter,
  Search,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  User,
  BookOpen,
  Target,
  Award,
  Timer,
  Zap,
  Database,
  Wifi,
  Loader2,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabaseClient";

interface VisitorAnalytics {
  totalVisits: number;
  uniqueVisitors: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ page: string; views: number; uniqueVisitors: number }>;
  deviceBreakdown: { desktop: number; mobile: number; tablet: number };
  geographicData: Array<{ country: string; city: string; state: string; visitors: number; percentage: number }>;
  hourlyTraffic: Array<{ hour: number; visits: number; uniqueVisitors: number }>;
  dailyTraffic: Array<{ date: string; visits: number; uniqueVisitors: number; pageViews: number }>;
}

interface UserActivity {
  userId: string;
  userName: string;
  email: string;
  lastSeen: string;
  totalSessions: number;
  totalTimeSpent: number;
  pagesVisited: Array<{ page: string; visits: number; timeSpent: number; lastVisit: string }>;
  deviceInfo: { type: string; browser: string; os: string; location: string };
  registrationDate: string;
  isActive: boolean;
}

interface StudentPerformance {
  userId: string;
  userName: string;
  email: string;
  totalTestsTaken: number;
  averageScore: number;
  bestScore: number;
  worstScore: number;
  totalQuestionsAttempted: number;
  correctAnswers: number;
  accuracy: number;
  timeSpentOnTests: number;
  subjectPerformance: Array<{ subject: string; testsTaken: number; averageScore: number; bestScore: number }>;
  recentTests: Array<{ testId: string; testName: string; score: number; totalQuestions: number; timeTaken: number; date: string; difficulty: string }>;
  weakAreas: Array<{ topic: string; accuracy: number; questionsAttempted: number }>;
  strongAreas: Array<{ topic: string; accuracy: number; questionsAttempted: number }>;
}

export default function AdminAnalytics() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'visitors' | 'users' | 'performance'>('visitors');
  const [visitorData, setVisitorData] = useState<VisitorAnalytics | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivity[]>([]);
  const [studentPerformance, setStudentPerformance] = useState<StudentPerformance[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('7d');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const supabase = getSupabaseClient();

  const fetchAnalyticsData = async () => {
    setLoading(true);
    if (!supabase) return;

    try {
      // Mock data for demonstration - in real implementation, this would fetch from your analytics tables
      const mockVisitorData: VisitorAnalytics = {
        totalVisits: 45678,
        uniqueVisitors: 12345,
        pageViews: 234567,
        bounceRate: 32.5,
        avgSessionDuration: 245, // in seconds
        topPages: [
          { page: '/dashboard', views: 8901, uniqueVisitors: 3456 },
          { page: '/exams/jee', views: 6789, uniqueVisitors: 2345 },
          { page: '/exams/neet-ug', views: 5678, uniqueVisitors: 1890 },
          { page: '/free-mock-tests', views: 4567, uniqueVisitors: 1567 },
          { page: '/pricing', views: 3456, uniqueVisitors: 1234 }
        ],
        deviceBreakdown: { desktop: 55.2, mobile: 38.7, tablet: 6.1 },
        geographicData: [
          { country: 'India', city: 'Delhi', state: 'Delhi', visitors: 3456, percentage: 28.0 },
          { country: 'India', city: 'Mumbai', state: 'Maharashtra', visitors: 2345, percentage: 19.0 },
          { country: 'India', city: 'Bangalore', state: 'Karnataka', visitors: 1876, percentage: 15.2 },
          { country: 'India', city: 'Kolkata', state: 'West Bengal', visitors: 1234, percentage: 10.0 },
          { country: 'India', city: 'Chennai', state: 'Tamil Nadu', visitors: 987, percentage: 8.0 },
          { country: 'India', city: 'Hyderabad', state: 'Telangana', visitors: 876, percentage: 7.1 },
          { country: 'India', city: 'Pune', state: 'Maharashtra', visitors: 765, percentage: 6.2 },
          { country: 'Others', city: 'Various', state: 'Various', visitors: 806, percentage: 6.5 }
        ],
        hourlyTraffic: Array.from({ length: 24 }, (_, i) => ({
          hour: i,
          visits: Math.floor(Math.random() * 500) + 100,
          uniqueVisitors: Math.floor(Math.random() * 200) + 50
        })),
        dailyTraffic: Array.from({ length: 30 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (29 - i));
          return {
            date: date.toISOString().split('T')[0],
            visits: Math.floor(Math.random() * 2000) + 500,
            uniqueVisitors: Math.floor(Math.random() * 800) + 200,
            pageViews: Math.floor(Math.random() * 8000) + 2000
          };
        })
      };

      const mockUserActivity: UserActivity[] = Array.from({ length: 50 }, (_, i) => ({
        userId: `user_${i + 1}`,
        userName: `Student ${i + 1}`,
        email: `student${i + 1}@example.com`,
        lastSeen: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        totalSessions: Math.floor(Math.random() * 50) + 10,
        totalTimeSpent: Math.floor(Math.random() * 10000) + 1000,
        pagesVisited: [
          { page: '/dashboard', visits: Math.floor(Math.random() * 20) + 5, timeSpent: Math.floor(Math.random() * 1000) + 100, lastVisit: new Date().toISOString() },
          { page: '/exams/jee', visits: Math.floor(Math.random() * 15) + 3, timeSpent: Math.floor(Math.random() * 800) + 200, lastVisit: new Date().toISOString() },
          { page: '/test/[testId]', visits: Math.floor(Math.random() * 10) + 2, timeSpent: Math.floor(Math.random() * 2000) + 500, lastVisit: new Date().toISOString() }
        ],
        deviceInfo: {
          type: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)],
          browser: ['Chrome', 'Firefox', 'Safari', 'Edge'][Math.floor(Math.random() * 4)],
          os: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'][Math.floor(Math.random() * 5)],
          location: ['Delhi, India', 'Mumbai, India', 'Bangalore, India', 'Kolkata, India'][Math.floor(Math.random() * 4)]
        },
        registrationDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
        isActive: Math.random() > 0.3
      }));

      const mockStudentPerformance: StudentPerformance[] = Array.from({ length: 30 }, (_, i) => {
        const totalTests = Math.floor(Math.random() * 50) + 10;
        const avgScore = Math.floor(Math.random() * 40) + 40;
        const totalQuestions = Math.floor(Math.random() * 2000) + 500;
        const correctAnswers = Math.floor(totalQuestions * (avgScore / 100));
        
        return {
          userId: `student_${i + 1}`,
          userName: `Student ${i + 1}`,
          email: `student${i + 1}@example.com`,
          totalTestsTaken: totalTests,
          averageScore: avgScore,
          bestScore: Math.floor(Math.random() * 20) + 80,
          worstScore: Math.floor(Math.random() * 30) + 20,
          totalQuestionsAttempted: totalQuestions,
          correctAnswers,
          accuracy: (correctAnswers / totalQuestions) * 100,
          timeSpentOnTests: Math.floor(Math.random() * 50000) + 10000,
          subjectPerformance: [
            { subject: 'Physics', testsTaken: Math.floor(totalTests / 3), averageScore: avgScore + Math.floor(Math.random() * 20) - 10, bestScore: Math.floor(Math.random() * 20) + 80 },
            { subject: 'Chemistry', testsTaken: Math.floor(totalTests / 3), averageScore: avgScore + Math.floor(Math.random() * 20) - 10, bestScore: Math.floor(Math.random() * 20) + 80 },
            { subject: 'Mathematics', testsTaken: Math.floor(totalTests / 3), averageScore: avgScore + Math.floor(Math.random() * 20) - 10, bestScore: Math.floor(Math.random() * 20) + 80 }
          ],
          recentTests: Array.from({ length: 5 }, (_, j) => ({
            testId: `test_${i}_${j}`,
            testName: `Mock Test ${j + 1}`,
            score: Math.floor(Math.random() * 40) + 40,
            totalQuestions: Math.floor(Math.random() * 50) + 50,
            timeTaken: Math.floor(Math.random() * 3600) + 1800,
            date: new Date(Date.now() - j * 24 * 60 * 60 * 1000).toISOString(),
            difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)]
          })),
          weakAreas: [
            { topic: 'Kinematics', accuracy: Math.floor(Math.random() * 40) + 30, questionsAttempted: Math.floor(Math.random() * 50) + 20 },
            { topic: 'Thermodynamics', accuracy: Math.floor(Math.random() * 40) + 30, questionsAttempted: Math.floor(Math.random() * 50) + 20 }
          ],
          strongAreas: [
            { topic: 'Basic Concepts', accuracy: Math.floor(Math.random() * 30) + 70, questionsAttempted: Math.floor(Math.random() * 50) + 20 },
            { topic: 'Problem Solving', accuracy: Math.floor(Math.random() * 30) + 70, questionsAttempted: Math.floor(Math.random() * 50) + 20 }
          ]
        };
      });

      setVisitorData(mockVisitorData);
      setUserActivity(mockUserActivity);
      setStudentPerformance(mockStudentPerformance);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, [dateRange]);

  const toggleRowExpansion = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const filteredUserActivity = userActivity.filter(user => 
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStudentPerformance = studentPerformance.filter(student => 
    student.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 font-semibold">Loading Analytics Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Advanced Analytics Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">Comprehensive insights into visitor behavior, user activity, and student performance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
              />
            </div>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <button
              onClick={fetchAnalyticsData}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-1 bg-white dark:bg-[#1e293b] rounded-lg border border-slate-200 dark:border-slate-700 w-fit">
          {[
            { id: 'visitors', label: 'Visitor Analytics', icon: Eye },
            { id: 'users', label: 'User Activity', icon: Users },
            { id: 'performance', label: 'Student Performance', icon: BarChart3 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'visitors' && visitorData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Visits', value: visitorData.totalVisits.toLocaleString(), icon: Eye, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/10' },
                { label: 'Unique Visitors', value: visitorData.uniqueVisitors.toLocaleString(), icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-500/10' },
                { label: 'Page Views', value: visitorData.pageViews.toLocaleString(), icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-500/10' },
                { label: 'Avg Session Duration', value: `${Math.floor(visitorData.avgSessionDuration / 60)}m ${visitorData.avgSessionDuration % 60}s`, icon: Clock, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-500/10' }
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${metric.bg}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">+12.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Traffic Chart and Geographic Data */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hourly Traffic Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Hourly Traffic Pattern</h3>
                <div className="h-64 flex items-end justify-between gap-1">
                  {visitorData.hourlyTraffic.map((hour, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full bg-primary/20 dark:bg-primary/10 rounded-t relative group cursor-pointer">
                        <div
                          className="w-full bg-primary rounded-t transition-all duration-300 group-hover:bg-primary/80"
                          style={{ height: `${(hour.visits / Math.max(...visitorData.hourlyTraffic.map(h => h.visits))) * 100}%` }}
                        />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {hour.visits} visits
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{i}:00</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Distribution */}
              <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Geographic Distribution
                </h3>
                <div className="space-y-3">
                  {visitorData.geographicData.slice(0, 6).map((location, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-900 dark:text-white">{location.city}</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${location.percentage}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 ml-3">{location.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Pages and Device Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Top Pages</h3>
                <div className="space-y-3">
                  {visitorData.topPages.map((page, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{page.page}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{page.uniqueVisitors} unique visitors</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">{page.views.toLocaleString()}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">views</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Device Breakdown</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Desktop', value: visitorData.deviceBreakdown.desktop, icon: Monitor },
                    { type: 'Mobile', value: visitorData.deviceBreakdown.mobile, icon: Smartphone },
                    { type: 'Tablet', value: visitorData.deviceBreakdown.tablet, icon: Tablet }
                  ].map((device, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <device.icon className="w-5 h-5 text-slate-400" />
                        <span className="font-medium text-slate-900 dark:text-white">{device.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${device.value}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-900 dark:text-white w-12 text-right">{device.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">User Activity Tracking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Detailed activity logs for all registered users</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">User</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Last Seen</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Sessions</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Time Spent</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Device</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Location</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Status</th>
                    <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUserActivity.map((user) => (
                    <tr key={user.userId} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-slate-900 dark:text-white">{user.userName}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-slate-900 dark:text-white">
                          {new Date(user.lastSeen).toLocaleDateString()} {new Date(user.lastSeen).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-slate-900 dark:text-white">{user.totalSessions}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-slate-900 dark:text-white">
                          {Math.floor(user.totalTimeSpent / 3600)}h {Math.floor((user.totalTimeSpent % 3600) / 60)}m
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {user.deviceInfo.type === 'Desktop' && <Monitor className="w-4 h-4 text-slate-400" />}
                          {user.deviceInfo.type === 'Mobile' && <Smartphone className="w-4 h-4 text-slate-400" />}
                          {user.deviceInfo.type === 'Tablet' && <Tablet className="w-4 h-4 text-slate-400" />}
                          <span className="text-sm text-slate-900 dark:text-white">{user.deviceInfo.type}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-slate-900 dark:text-white">{user.deviceInfo.location}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.isActive
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-800 dark:bg-slate-500/20 dark:text-slate-400'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleRowExpansion(user.userId)}
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          {expandedRows.has(user.userId) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'performance' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Tests Taken', value: studentPerformance.reduce((acc, s) => acc + s.totalTestsTaken, 0).toLocaleString(), icon: Target, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/10' },
                { label: 'Average Score', value: `${Math.round(studentPerformance.reduce((acc, s) => acc + s.averageScore, 0) / studentPerformance.length)}%`, icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-500/10' },
                { label: 'Total Questions', value: studentPerformance.reduce((acc, s) => acc + s.totalQuestionsAttempted, 0).toLocaleString(), icon: Database, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-500/10' },
                { label: 'Average Accuracy', value: `${Math.round(studentPerformance.reduce((acc, s) => acc + s.accuracy, 0) / studentPerformance.length)}%`, icon: CheckCircle2, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-500/10' }
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${metric.bg}`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">+8.2%</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Student Performance Table */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Student Performance Details</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Comprehensive performance metrics for all students</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Student</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Tests</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Avg Score</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Best Score</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Accuracy</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Questions</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Time Spent</th>
                      <th className="text-left p-4 font-semibold text-slate-900 dark:text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudentPerformance.map((student) => (
                      <tr key={student.userId} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="p-4">
                          <div>
                            <div className="font-medium text-slate-900 dark:text-white">{student.userName}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{student.email}</div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-slate-900 dark:text-white">{student.totalTestsTaken}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-slate-900 dark:text-white">{student.averageScore}%</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-emerald-600 dark:text-emerald-400">{student.bestScore}%</div>
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-slate-900 dark:text-white">{Math.round(student.accuracy)}%</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-900 dark:text-white">{student.totalQuestionsAttempted.toLocaleString()}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm text-slate-900 dark:text-white">
                            {Math.floor(student.timeSpentOnTests / 3600)}h {Math.floor((student.timeSpentOnTests % 3600) / 60)}m
                          </div>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => toggleRowExpansion(student.userId)}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {expandedRows.has(student.userId) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </AdminLayout>
  );
}
