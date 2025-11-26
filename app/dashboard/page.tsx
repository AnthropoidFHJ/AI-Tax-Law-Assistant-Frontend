'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { DashboardCard, StatsCard } from '@/components/DashboardCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3,
  TrendingUp,
  FileText,
  Calendar,
  DollarSign,
  PieChart,
  Download,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Edit,
  
} from 'lucide-react'

export default function DashboardPage() {
  const { t } = useI18n()
  const router = useRouter()

  const stats = [
    {
      title: t('dashboard.income'),
      value: '৳ 8,50,000',
      icon: DollarSign,
      trend: { value: 12, isPositive: true },
      color: 'green' as const
    },
    {
      title: t('dashboard.tax'),
      value: '৳ 45,000',
      icon: PieChart,
      trend: { value: 5, isPositive: false },
      color: 'red' as const
    }
  ]

  const userData = {
    name: 'Md. Rahman Ahmed',
    mobile: '+880 1712-345678',
    email: 'rahman.ahmed@email.com',
    address: 'House 42, Road 5, Dhanmondi, Dhaka-1205',
    tin: '123456789012',
    nid: '1990123456789',
    dateOfBirth: '1990-05-15',
    occupation: 'Software Engineer'
  }

  const taxAdvice = [
    {
      title: 'Maximize Your Tax Savings',
      description: 'You can save up to ৳15,000 more by investing in approved savings schemes',
      action: 'Learn More',
      icon: TrendingUp
    },
    {
      title: 'Upcoming Deadline',
      description: 'Tax return submission deadline is approaching. File by November 30, 2024',
      action: 'File Now',
      icon: Calendar
    },
    {
      title: 'Document Reminder',
      description: 'Keep your salary certificate and bank statements ready for next year',
      action: 'Upload',
      icon: FileText
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {t('dashboard.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome back! Here&apos;s your tax overview.
              </p>
            </div>
            <Button className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color={stat.color}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col h-full">
            {/* My Data */}
            <Card className="flex-1">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>My Data</span>
                    </CardTitle>
                    <CardDescription>
                      Your personal information
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => router.push('/profile')}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mobile Number</p>
                      <p className="font-medium">{userData.mobile}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{userData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TIN Number</p>
                      <p className="font-medium">{userData.tin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">NID Number</p>
                      <p className="font-medium">{userData.nid}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">{new Date(userData.dateOfBirth).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Occupation</p>
                      <p className="font-medium">{userData.occupation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col h-full">
            {/* Tax Advice */}
            <Card className="flex-1 mb-6 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>{t('dashboard.advice')}</span>
                </CardTitle>
                <CardDescription>
                  Personalized tax tips and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="h-full flex flex-col justify-around">
                  {taxAdvice.map((advice, index) => {
                  const Icon = advice.icon
                  return (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">{advice.title}</h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {advice.description}
                          </p>
                          <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                            {advice.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => router.push('/workspace')}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  File New Return
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant="outline"
                  onClick={() => {
                    // Download the most recent tax file
                    const link = document.createElement('a')
                    link.href = '/tax-files/recent-tax-return.pdf'
                    link.download = 'recent-tax-return.pdf'
                    link.click()
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Forms
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}