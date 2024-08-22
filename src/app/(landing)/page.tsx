'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  SwapOutlined,
  DollarCircleOutlined,
  ProfileOutlined,
  CloudOutlined,
  CodeOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Buy and Sell with Ease',
      description:
        'Effortlessly browse or list items for sale and reach a wide audience.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Barter and Trade',
      description:
        'Exchange goods without money. Perfect for niche markets and unique items.',
      icon: <SwapOutlined />,
    },
    {
      heading: 'Secure Payments',
      description:
        'Integrated with Stripe for secure and seamless financial transactions.',
      icon: <DollarCircleOutlined />,
    },
    {
      heading: 'Customizable Profiles',
      description:
        'Showcase your listings with detailed descriptions and image galleries.',
      icon: <ProfileOutlined />,
    },
    {
      heading: 'Digital Downloads',
      description: 'Sell or trade music, templates, and other digital goods.',
      icon: <CloudOutlined />,
    },
    {
      heading: 'Virtual Assets',
      description: 'Trade web domains, source code, and other virtual assets.',
      icon: <CodeOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Frequent Seller',
      content:
        'This platform has revolutionized the way I sell my items. The barter option is a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Digital Artist',
      content:
        'I love how easy it is to sell my digital art here. The secure payment system gives me peace of mind.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Mike Johnson',
      designation: 'Tech Enthusiast',
      content:
        'Trading virtual assets has never been easier. This app is a must-have for anyone in the tech space.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Music Producer',
      content:
        'Selling my music as digital downloads has been a breeze. Highly recommend this platform!',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Chris Lee',
      designation: 'Entrepreneur',
      content:
        'The customizable profiles help me showcase my listings effectively. Great user experience!',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Sarah Brown',
      designation: 'Template Designer',
      content:
        'I can easily sell my design templates here. The platform is very user-friendly.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'For casual users',
      monthly: 9,
      yearly: 69,
      features: ['List up to 10 items', 'Basic support'],
    },
    {
      title: 'Pro',
      description: 'For frequent users',
      monthly: 29,
      yearly: 249,
      features: ['Unlimited listings', 'Priority support'],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'For businesses',
      monthly: 99,
      yearly: 999,
      features: ['Custom solutions', 'Dedicated support'],
    },
  ]

  const questionAnswers = [
    {
      question: 'How do I list an item?',
      answer: 'Simply click on the "List Item" button and fill in the details.',
    },
    {
      question: 'Is there a fee for transactions?',
      answer:
        'We charge a small fee for each transaction to cover payment processing costs.',
    },
    {
      question: 'Can I trade digital goods?',
      answer: 'Yes, our platform supports both physical and digital goods.',
    },
    {
      question: 'How secure are the payments?',
      answer:
        'All payments are processed through Stripe, ensuring top-notch security.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account in just a few steps.',
    },
    {
      heading: 'List or Browse',
      description: 'Start listing your items or browse the marketplace.',
    },
    {
      heading: 'Make Transactions',
      description: 'Buy, sell, or trade items securely.',
    },
    {
      heading: 'Enjoy the Benefits',
      description:
        'Experience the convenience and flexibility of our platform.',
    },
  ]

  const painPoints = [
    {
      emoji: '💸',
      title: 'Struggling with high fees on traditional platforms?',
    },
    {
      emoji: '🔄',
      title: 'Finding it hard to trade items without involving money?',
    },
    {
      emoji: '🛠️',
      title: 'Need a versatile platform for both physical and digital goods?',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Discover a New Way to Buy, Sell, and Trade"
        subtitle="Unlock endless possibilities with our versatile marketplace."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/agaqUV-metamarket-AKGm"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Facing Challenges in Online Trading?"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Trading Goals with Our Features"
        subtitle="Our platform offers everything you need to succeed."
        features={features}
      />
      <LandingTestimonials
        title="What Our Users Are Saying"
        subtitle="Real stories from satisfied customers."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose the Right Plan for You"
        subtitle="Affordable plans to meet your needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Transform Your Trading Experience?"
        subtitle="Join our community and start trading today."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
