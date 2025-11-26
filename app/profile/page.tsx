'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Save,
  Edit2,
  Lock,
  Globe,
  Shield
} from 'lucide-react'

export default function ProfilePage() {
  const { t, language, setLanguage } = useI18n()
  
  const [isEditing, setIsEditing] = React.useState(false)
  const [profile, setProfile] = React.useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+880 1712-345678',
    address: 'Dhaka, Bangladesh',
    tin: '123456789012',
    dateOfBirth: '1990-01-15',
    occupation: 'Software Engineer'
  })
  
  const handleSaveProfile = () => {
    // Save profile logic here
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'প্রোফাইল সেটিংস' : 'Profile Settings'}
          </h1>
          <p className={`text-xl text-muted-foreground ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনার ব্যক্তিগত তথ্য এবং পছন্দ পরিচালনা করুন' 
              : 'Manage your personal information and preferences'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className={`flex items-center space-x-2 ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      <User className="h-5 w-5" />
                      <span>{language === 'bn' ? 'ব্যক্তিগত তথ্য' : 'Personal Information'}</span>
                    </CardTitle>
                    <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                      {language === 'bn' 
                        ? 'আপনার প্রোফাইল বিস্তারিত আপডেট করুন' 
                        : 'Update your profile details'}
                    </CardDescription>
                  </div>
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit2 className="h-4 w-4 mr-2" />
                      {language === 'bn' ? 'সম্পাদনা' : 'Edit'}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'পূর্ণ নাম' : 'Full Name'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'ইমেইল' : 'Email'}
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'ফোন' : 'Phone'}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'জন্ম তারিখ' : 'Date of Birth'}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="date"
                        value={profile.dateOfBirth}
                        onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'ঠিকানা' : 'Address'}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        value={profile.address}
                        onChange={(e) => setProfile({...profile, address: e.target.value})}
                        disabled={!isEditing}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <Button onClick={handleSaveProfile} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      {language === 'bn' ? 'পরিবর্তন সংরক্ষণ' : 'Save Changes'}
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      {language === 'bn' ? 'বাতিল' : 'Cancel'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <Building className="h-5 w-5" />
                  <span>{language === 'bn' ? 'কর তথ্য' : 'Tax Information'}</span>
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'আপনার কর সম্পর্কিত বিস্তারিত' 
                    : 'Your tax-related details'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'টিআইএন নম্বর' : 'TIN Number'}
                    </label>
                    <Input
                      type="text"
                      value={profile.tin}
                      onChange={(e) => setProfile({...profile, tin: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'পেশা' : 'Occupation'}
                    </label>
                    <Input
                      type="text"
                      value={profile.occupation}
                      onChange={(e) => setProfile({...profile, occupation: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Language Settings */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-sm ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <Globe className="h-4 w-4" />
                  <span>{language === 'bn' ? 'ভাষা সেটিংস' : 'Language Settings'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'পছন্দের ভাষা' : 'Preferred Language'}
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="en">English</option>
                    <option value="bn">বাংলা (Bengali)</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-sm ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <Shield className="h-4 w-4" />
                  <span>{language === 'bn' ? 'নিরাপত্তা' : 'Security'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Lock className="h-4 w-4 mr-2" />
                  {language === 'bn' ? 'পাসওয়ার্ড পরিবর্তন' : 'Change Password'}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  {language === 'bn' ? 'টু-ফ্যাক্টর অথ' : 'Two-Factor Auth'}
                </Button>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card>
              <CardHeader>
                <CardTitle className={`text-sm ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  {language === 'bn' ? 'অ্যাকাউন্ট অ্যাকশন' : 'Account Actions'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  {language === 'bn' ? 'ডেটা এক্সপোর্ট' : 'Export Data'}
                </Button>
                <Button variant="destructive" className="w-full">
                  {language === 'bn' ? 'অ্যাকাউন্ট মুছুন' : 'Delete Account'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
