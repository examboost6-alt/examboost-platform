"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLayout from "@/components/AdminLayout";
import { 
  Activity, 
  Users, 
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  TrendingUp,
  TrendingDown,
  Eye,
  MousePointer,
  Wifi,
  Server,
  Database,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Filter,
  Download,
  Zap,
  BarChart3,
  LineChart,
  MapPin,
  Calendar,
  User,
  Loader2,
  Play,
  Pause,
  Settings
} from "lucide-react";

interface RealTimeEvent {
  id: string;
  timestamp: string;
  eventType: 'page_view' | 'user_login' | 'test_start' | 'test_complete' | 'purchase' | 'error';
  userId: string;
  userName: string;
  userEmail: string;
  details: {
    page?: string;
    testId?: string;
    testName?: string;
    score?: number;
    amount?: number;
    product?: string;
    errorMessage?: string;
    device?: string;
    location?: string;
    ip?: string;
    userAgent?: string;
  };
}

interface LiveMetrics {
  onlineUsers: number;
  activeTests: number;
  pageViewsPerMinute: number;
  errorRate: number;
  avgResponseTime: number;
  serverLoad: number;
  databaseConnections: number;
  bandwidthUsage: number;
}

interface GeographicHeatmap {
  country: string;
  city: string;
  state: string;
  users: number;
  activity: number;
  coordinates: { lat: number; lng: number };
}

export default function AdminRealTime() {
  const [isLive, setIsLive] = useState(true);
  const [events, setEvents] = useState<RealTimeEvent[]>([]);
  const [metrics, setMetrics] = useState<LiveMetrics>({
    onlineUsers: 0,
    activeTests: 0,
    pageViewsPerMinute: 0,
    errorRate: 0,
    avgResponseTime: 0,
    serverLoad: 0,
    databaseConnections: 0,
    bandwidthUsage: 0
  });
  const [heatmap, setHeatmap] = useState<GeographicHeatmap[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventFilter, setEventFilter] = useState<string>('all');

  // Mock real-time data generation
  const generateMockEvent = (): RealTimeEvent => {
    const eventTypes: RealTimeEvent['eventType'][] = ['page_view', 'user_login', 'test_start', 'test_complete', 'purchase', 'error'];
    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    const userId = `user_${Math.floor(Math.random() * 1000)}`;
    
    const baseEvent = {
      id: `event_${Date.now()}_${Math.random()}`,
      timestamp: new Date().toISOString(),
      eventType,
      userId,
      userName: `Student ${Math.floor(Math.random() * 100)}`,
      userEmail: `student${Math.floor(Math.random() * 100)}@example.com`,
    };

    const details: any = {
      device: ['Desktop', 'Mobile', 'Tablet'][Math.floor(Math.random() * 3)],
      location: ['Delhi, India', 'Mumbai, India', 'Bangalore, India', 'Kolkata, India', 'Chennai, India'][Math.floor(Math.random() * 5)],
      ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    };

    switch (eventType) {
      case 'page_view':
        details.page = ['/dashboard', '/exams/jee', '/exams/neet-ug', '/test/[testId]', '/pricing'][Math.floor(Math.random() * 5)];
        break;
      case 'test_start':
        details.testId = `test_${Math.floor(Math.random() * 1000)}`;
        details.testName = `Mock Test ${Math.floor(Math.random() * 50) + 1}`;
        break;
      case 'test_complete':
        details.testId = `test_${Math.floor(Math.random() * 1000)}`;
        details.testName = `Mock Test ${Math.floor(Math.random() * 50) + 1}`;
        details.score = Math.floor(Math.random() * 100);
        break;
      case 'purchase':
        details.amount = Math.floor(Math.random() * 5000) + 500;
        details.product = ['JEE Main Series', 'NEET Series', 'JEE Advanced Series'][Math.floor(Math.random() * 3)];
        break;
      case 'error':
        details.errorMessage = ['Database connection failed', 'API timeout', 'Invalid user input', 'Server error'][Math.floor(Math.random() * 4)];
        break;
    }

    return { ...baseEvent, details };
  };

  const generateMockMetrics = (): LiveMetrics => ({
    onlineUsers: Math.floor(Math.random() * 500) + 100,
    activeTests: Math.floor(Math.random() * 50) + 10,
    pageViewsPerMinute: Math.floor(Math.random() * 200) + 50,
    errorRate: Math.random() * 5,
    avgResponseTime: Math.floor(Math.random() * 200) + 50,
    serverLoad: Math.random() * 80 + 10,
    databaseConnections: Math.floor(Math.random() * 100) + 20,
    bandwidthUsage: Math.floor(Math.random() * 1000) + 200
  });

  const generateMockHeatmap = (): GeographicHeatmap[] => [
    { country: 'India', city: 'Delhi', state: 'Delhi', users: 234, activity: 89, coordinates: { lat: 28.6139, lng: 77.2090 } },
    { country: 'India', city: 'Mumbai', state: 'Maharashtra', users: 189, activity: 67, coordinates: { lat: 19.0760, lng: 72.8777 } },
    { country: 'India', city: 'Bangalore', state: 'Karnataka', users: 156, activity: 45, coordinates: { lat: 12.9716, lng: 77.5946 } },
    { country: 'India', city: 'Kolkata', state: 'West Bengal', users: 123, activity: 34, coordinates: { lat: 22.5726, lng: 88.3639 } },
    { country: 'India', city: 'Chennai', state: 'Tamil Nadu', users: 98, activity: 28, coordinates: { lat: 13.0827, lng: 80.2707 } },
    { country: 'India', city: 'Hyderabad', state: 'Telangana', users: 87, activity: 23, coordinates: { lat: 17.3850, lng: 78.4867 } },
    { country: 'India', city: 'Pune', state: 'Maharashtra', users: 76, activity: 19, coordinates: { lat: 18.5204, lng: 73.8567 } },
    { country: 'India', city: 'Jaipur', state: 'Rajasthan', users: 65, activity: 15, coordinates: { lat: 26.9124, lng: 75.7873 } }
  ];

  useEffect(() => {
    // Initial load
    setMetrics(generateMockMetrics());
    setHeatmap(generateMockHeatmap());
    
    // Generate initial events
    const initialEvents = Array.from({ length: 20 }, () => generateMockEvent());
    setEvents(initialEvents);
    setLoading(false);

    let interval: NodeJS.Timeout;
    
    if (isLive) {
      interval = setInterval(() => {
        // Add new event
        const newEvent = generateMockEvent();
        setEvents(prev => [newEvent, ...prev.slice(0, 49)]);
        
        // Update metrics
        setMetrics(generateMockMetrics());
        
        // Update heatmap occasionally
        if (Math.random() > 0.7) {
          setHeatmap(generateMockHeatmap());
        }
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLive]);

  const filteredEvents = events.filter(event => 
    eventFilter === 'all' || event.eventType === eventFilter
  );

  const getEventIcon = (eventType: RealTimeEvent['eventType']) => {
    switch (eventType) {
      case 'page_view': return <Eye className="w-4 h-4" />;
      case 'user_login': return <User className="w-4 h-4" />;
      case 'test_start': return <Play className="w-4 h-4" />;
      case 'test_complete': return <CheckCircle2 className="w-4 h-4" />;
      case 'purchase': return <TrendingUp className="w-4 h-4" />;
      case 'error': return <XCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getEventColor = (eventType: RealTimeEvent['eventType']) => {
    switch (eventType) {
      case 'page_view': return 'text-blue-600 bg-blue-100 dark:bg-blue-500/20 dark:text-blue-400';
      case 'user_login': return 'text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400';
      case 'test_start': return 'text-purple-600 bg-purple-100 dark:bg-purple-500/20 dark:text-purple-400';
      case 'test_complete': return 'text-green-600 bg-green-100 dark:bg-green-500/20 dark:text-green-400';
      case 'purchase': return 'text-orange-600 bg-orange-100 dark:bg-orange-500/20 dark:text-orange-400';
      case 'error': return 'text-red-600 bg-red-100 dark:bg-red-500/20 dark:text-red-400';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-500/20 dark:text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 font-semibold">Initializing Real-time Monitoring...</p>
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
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
              Real-time Monitoring Dashboard
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                isLive ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-slate-100 text-slate-800 dark:bg-slate-500/20 dark:text-slate-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                {isLive ? 'LIVE' : 'PAUSED'}
              </div>
            </h1>
            <p className="text-slate-600 dark:text-slate-400">Live monitoring of user activity, system performance, and geographic distribution</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                isLive 
                  ? 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/30' 
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-500/30'
              }`}
            >
              {isLive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isLive ? 'Pause' : 'Resume'}
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button className="px-4 py-2 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Online Users', value: metrics.onlineUsers, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/10', trend: 'up' },
          { label: 'Active Tests', value: metrics.activeTests, icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-500/10', trend: 'up' },
          { label: 'Page Views/min', value: metrics.pageViewsPerMinute, icon: Eye, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-500/10', trend: 'up' },
          { label: 'Error Rate', value: `${metrics.errorRate.toFixed(1)}%`, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-500/10', trend: 'down' }
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
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                12%
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">System Performance</h3>
          <div className="space-y-4">
            {[
              { label: 'Server Load', value: metrics.serverLoad, unit: '%', max: 100, color: 'bg-blue-500' },
              { label: 'Database Connections', value: metrics.databaseConnections, unit: '', max: 200, color: 'bg-green-500' },
              { label: 'Bandwidth Usage', value: metrics.bandwidthUsage, unit: 'MB/s', max: 2000, color: 'bg-purple-500' },
              { label: 'Avg Response Time', value: metrics.avgResponseTime, unit: 'ms', max: 500, color: 'bg-orange-500' }
            ].map((perf, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{perf.label}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {perf.value}{perf.unit}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`${perf.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${(perf.value / perf.max) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Geographic Activity
          </h3>
          <div className="space-y-3">
            {heatmap.slice(0, 6).map((location, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{location.city}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">{location.users} users</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{location.activity}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">active</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Events Feed */}
      <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Live Event Stream</h3>
            <div className="flex items-center gap-3">
              <select
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
                className="px-3 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All Events</option>
                <option value="page_view">Page Views</option>
                <option value="user_login">User Logins</option>
                <option value="test_start">Test Starts</option>
                <option value="test_complete">Test Completions</option>
                <option value="purchase">Purchases</option>
                <option value="error">Errors</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto max-h-96 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800 sticky top-0">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">Time</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">Event</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">User</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">Details</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">Device</th>
                <th className="text-left p-4 font-semibold text-slate-900 dark:text-white text-sm">Location</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filteredEvents.map((event, index) => (
                  <motion.tr
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <td className="p-4">
                      <div className="text-sm text-slate-900 dark:text-white">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${getEventColor(event.eventType)}`}>
                        {getEventIcon(event.eventType)}
                        {event.eventType.replace('_', ' ').toUpperCase()}
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-white">{event.userName}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">{event.userEmail}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-slate-900 dark:text-white">
                        {event.eventType === 'page_view' && event.details.page}
                        {event.eventType === 'test_start' && `Started: ${event.details.testName}`}
                        {event.eventType === 'test_complete' && `Completed: ${event.details.testName} (${event.details.score}%)`}
                        {event.eventType === 'purchase' && `Purchased: ${event.details.product} (Rs.${event.details.amount})`}
                        {event.eventType === 'error' && event.details.errorMessage}
                        {event.eventType === 'user_login' && 'User logged in'}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {event.details.device === 'Desktop' && <Monitor className="w-4 h-4 text-slate-400" />}
                        {event.details.device === 'Mobile' && <Smartphone className="w-4 h-4 text-slate-400" />}
                        {event.details.device === 'Tablet' && <Tablet className="w-4 h-4 text-slate-400" />}
                        <span className="text-sm text-slate-900 dark:text-white">{event.details.device}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-slate-900 dark:text-white">{event.details.location}</div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </AdminLayout>
  );
}
