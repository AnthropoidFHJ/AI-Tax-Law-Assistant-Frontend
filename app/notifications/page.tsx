'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Bell,
  Mail,
  MessageSquare,
  Calendar,
  Newspaper,
  Save
} from 'lucide-react'

export default function NotificationSettingsPage() {
  const { language } = useI18n()
  
  const [preferences, setPreferences] = React.useState({
    emailNotifications: true,
    smsNotifications: false,
    taxReminders: true,
    newsletterSubscription: true
  })

  const handleSave = () => {
    // Save notification preferences logic here
    console.log('Saving preferences:', preferences)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'বিজ্ঞপ্তি সেটিংস' : 'Notification Settings'}
          </h1>
          <p className={`text-xl text-muted-foreground ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনি কীভাবে বিজ্ঞপ্তি পেতে চান তা পরিচালনা করুন' 
              : 'Manage how you want to receive notifications'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className={`flex items-center space-x-2 ${
              language === 'bn' ? 'bangla-text' : ''
            }`}>
              <Bell className="h-5 w-5" />
              <span>{language === 'bn' ? 'বিজ্ঞপ্তি পছন্দ' : 'Notification Preferences'}</span>
            </CardTitle>
            <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
              {language === 'bn' 
                ? 'আপনি কীভাবে বিজ্ঞপ্তি পেতে চান তা চয়ন করুন' 
                : 'Choose how you want to receive notifications'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'ইমেইল বিজ্ঞপ্তি' : 'Email Notifications'}
                  </label>
                  <p className={`text-sm text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? 'ইমেইলের মাধ্যমে আপডেট পান' 
                      : 'Receive updates via email'}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.emailNotifications}
                onChange={(e) => setPreferences({...preferences, emailNotifications: e.target.checked})}
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'এসএমএস বিজ্ঞপ্তি' : 'SMS Notifications'}
                  </label>
                  <p className={`text-sm text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? 'এসএমএসের মাধ্যমে আপডেট পান' 
                      : 'Receive updates via SMS'}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.smsNotifications}
                onChange={(e) => setPreferences({...preferences, smsNotifications: e.target.checked})}
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'কর অনুস্মারক' : 'Tax Reminders'}
                  </label>
                  <p className={`text-sm text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? 'সময়সীমা এবং গুরুত্বপূর্ণ তারিখ' 
                      : 'Deadlines and important dates'}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.taxReminders}
                onChange={(e) => setPreferences({...preferences, taxReminders: e.target.checked})}
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Newspaper className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'নিউজলেটার' : 'Newsletter'}
                  </label>
                  <p className={`text-sm text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? 'কর টিপস এবং আপডেট পান' 
                      : 'Get tax tips and updates'}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.newsletterSubscription}
                onChange={(e) => setPreferences({...preferences, newsletterSubscription: e.target.checked})}
                className="h-5 w-5 rounded border-gray-300"
              />
            </div>

            <div className="pt-4">
              <Button onClick={handleSave} className="w-full">
                <Save className="h-4 w-4 mr-2" />
                {language === 'bn' ? 'পরিবর্তন সংরক্ষণ' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
