"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, BookOpen, Award, Play, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/image/rosheAcademy1.png" 
                alt="Roshe Academy Logo" 
                width={40} 
                height={40} 
                priority
                className="mr-2" 
              />
              <span className="text-xl font-bold text-gray-900">
                Roshe <span className="text-black">Academy</span>
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-900 hover:text-purple-600 font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                About
              </a>
              <a href="#courses" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Courses
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Floating Profile Images */}
          <div className="absolute -top-10 -left-10 w-20 h-20 rounded-2xl overflow-hidden transform rotate-12 hidden lg:block">
            <Image
              loading="lazy"
              src="/image/comp.avif"
              alt="Student profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-5 -right-10 w-20 h-20 rounded-2xl overflow-hidden transform -rotate-12 hidden lg:block">
            <Image
              loading="lazy"
              src="/image/comp.avif"
              alt="Student profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-32 -left-20 w-16 h-16 rounded-2xl overflow-hidden transform rotate-45 hidden lg:block">
            <Image
              loading="lazy"
              src="/image/comp.avif" 
              alt="Student profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-40 -right-16 w-16 h-16 rounded-2xl overflow-hidden transform -rotate-45 hidden lg:block">
            <Image
              loading="lazy"
              src="/image/comp.avif"
              alt="Student profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Learn and Grow with
            <br />
            Top{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Online Courses
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover top online courses to upgrade your skills and stay ahead. Learn from experts and enhance your
            expertise at your own pace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors">
              Explore Courses
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-lg transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Image */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden h-80 lg:h-full">
                <Image
                  loading="lazy"
                  src="/image/comp.avif"
                  alt="Online learning workspace"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center Cards */}
            <div className="lg:col-span-1 space-y-8">
              {/* Teachers Card */}
              <div className="bg-orange-300 rounded-2xl p-6 h-40">
                <div className="flex -space-x-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src="/image/comp.avif"
                        alt={`Teacher ${i}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  We have 40+
                  <br />
                  Professional Teachers
                </h3>
              </div>

              {/* Quote Card */}
              <div className="bg-green-300 rounded-2xl p-6 h-40">
                <blockquote className="text-lg font-semibold text-gray-900 mb-4">
                  "Believe in yourself, keep learning, and success will follow."
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">Matthew S.</p>
                  <p className="text-sm text-gray-700">Quote from our teacher</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden h-80 lg:h-full">
                <Image
                  loading="lazy"
                  src="/image/comp.avif"
                  alt="Student learning with tablet"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1K+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10</h3>
              <p className="text-gray-600">Online Courses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Roshe Academy
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide world-class education with expert instructors, interactive content, and flexible learning
                schedules that fit your lifestyle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Instructors</h4>
                    <p className="text-gray-600">Learn from industry professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Learning</h4>
                    <p className="text-gray-600">Study at your own pace with lifetime access to courses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certification</h4>
                    <p className="text-gray-600">Get recognized certificates upon course completion</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/image/comp.avif"
                  alt="Students learning online"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center">
                  <Play className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">1000+ Video Lessons</p>
                    <p className="text-sm text-gray-600">High-quality content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section
        id="courses"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses designed to help you achieve your learning goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Basic Web Development (HTML, CSS, JavaScript & GitHub)", instructor: "Stephen Mayowa", rating: 4.9, students: 2500, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "REACT Framework", instructor: "Mike Chen", rating: 4.8, students: 1800, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Coding with AI", instructor: "Dr. Emily Davis", rating: 4.9, students: 3200, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "UI/UX", instructor: "Alex Rodriguez", rating: 4.7, students: 1500, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Data Analysis with Excel & PowerBi", instructor: "Lisa Wang", rating: 4.8, students: 2100, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Build Websites with Wordpress", instructor: "James Wilson", rating: 4.6, students: 1200, duration: "2 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Graphic Design with Canva", instructor: "Sarah Johnson", rating: 4.9, students: 2500, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "AI 3D ANIMATION", instructor: "Mike Chen", rating: 4.8, students: 1800, duration: "4 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Digital Marketing", instructor: "Dr. Emily Davis", rating: 4.9, students: 3200, duration: "6 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Virtual Assistant", instructor: "Alex Rodriguez", rating: 4.7, students: 1500, duration: "6 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Video Editing with Capcut", instructor: "Lisa Wang", rating: 4.8, students: 2100, duration: "2 weeks", price: "$99", image: "/image/comp.avif" },
              { title: "Project Management", instructor: "James Wilson", rating: 4.6, students: 1200, duration: "2 weeks", price: "$99", image: "/image/comp.avif" },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-purple-600">
                    {course.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <div className="flex items-center mb-3">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 text-sm">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({course.students})</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}

          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full"
            >
              View All Courses
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from thousands of students who have transformed their careers with Roshe Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Martinez",
                role: "Software Developer",
                content:
                  "Roshe Academy completely changed my career trajectory. The courses are well-structured and the instructors are amazing!",
                rating: 5,
                image: "/image/comp.avif",
              },
              {
                name: "David Thompson",
                role: "Digital Marketer",
                content:
                  "I learned more in 3 months than I did in years of self-study. The practical projects really helped me understand the concepts.",
                rating: 5,
                image: "/image/comp.avif",
              },
              {
                name: "Maria Garcia",
                role: "UX Designer",
                content:
                  "The flexibility to learn at my own pace while working full-time was exactly what I needed. Highly recommend!",
                rating: 5,
                image: "/image/comp.avif",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full text-lg"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id="contact"
        className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <Image 
                  src="/image/rosheAcademy1.png" 
                  alt="Roshe Academy Logo" 
                  width={32} 
                  height={32} 
                  className="mr-2" 
                />
                <span className="text-xl font-bold">
                  Roshe <span className="text-purple-400">Academy</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering learners worldwide with high-quality online education and expert instruction.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instructors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Business
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <p className="text-gray-400">
                  <span className="block font-medium text-white">Email:</span>
                  hello@rosheacademy.com
                </p>
                <p className="text-gray-400">
                  <span className="block font-medium text-white">Phone:</span>
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-400">
                  <span className="block font-medium text-white">Address:</span>
                  123 Learning Street, Education City, EC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 Roshe Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
