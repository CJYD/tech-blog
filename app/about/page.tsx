import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* About Header */}
        <section className="bg-gray-50">
          <div className="container py-12">
            <div className="inline-block border-2 border-gray-900 px-6 py-3">
              <h1 className="text-2xl font-bold tracking-tight leading-none">ABOUT</h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-gray-50">
          <div className="container py-12">
            <div className="max-w-3xl mx-auto">
            {/* Story */}
            <div className="max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Hey, I&apos;m Christian</h2>
              
              <p className="text-gray-600 mb-4 text-lg">
                I&apos;m an aspiring software developer who&apos;s been fascinated by technology for as long as I can remember. 
                There&apos;s something magical about how code can transform ideas into reality, and I&apos;ve been hooked ever since 
                I wrote my first &quot;Hello, World!&quot; program.
              </p>
              
              <p className="text-gray-600 mb-4 text-lg">
                These days, I&apos;m particularly intrigued by AI and machine learning. The rapid pace of innovation in this 
                space is both exciting and mind-boggling. One day we&apos;re amazed by a chatbot, and the next day it&apos;s helping 
                us write code. I&apos;m constantly learning about new frameworks, algorithms, and applications because honestly, 
                if you&apos;re not learning in tech, you&apos;re falling behind.
              </p>
              
              <p className="text-gray-600 mb-6 text-lg">
                That&apos;s why I started this blog. I want to share what I&apos;ve learned and help others, but I also learn 
                better when I have to explain things. Teaching forces you to really understand something. The tech community 
                has given me so much knowledge for free, so I want to give back in whatever way I can.
              </p>

            </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}