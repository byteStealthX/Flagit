import React from 'react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Footer } from '@/components/ui/footer';
import Globe from '@/components/ui/globe';
import { PricingSection } from '@/components/ui/pricing';
import { ImageUploadField } from '@/components/ui/image-uploader';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Typewriter } from '@/components/ui/typewriter-text';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ToggleTheme } from '@/components/ui/toggle-theme';
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';
import FlipCard from '@/components/ui/flip-card';
import { Home, Search, Settings, User } from 'lucide-react';


const ComponentShowcase = () => {
    const [image, setImage] = React.useState();

    const pricingPlans = [
        {
            name: "Starter",
            price: "50",
            yearlyPrice: "40",
            period: "month",
            features: [
                "Up to 10 projects",
                "Basic analytics",
                "48-hour support",
                "Limited API access",
            ],
            description: "Perfect for individuals",
            buttonText: "Start Free",
            href: "#",
        },
        {
            name: "Professional",
            price: "99",
            yearlyPrice: "79",
            period: "month",
            features: [
                "Unlimited projects",
                "Advanced analytics",
                "24-hour support",
                "Full API access",
            ],
            description: "Ideal for teams",
            buttonText: "Get Started",
            href: "#",
            isPopular: true,
        },
        {
            name: "Enterprise",
            price: "299",
            yearlyPrice: "239",
            period: "month",
            features: [
                "Everything in Pro",
                "Custom integrations",
                "Dedicated manager",
                "Advanced security",
            ],
            description: "For large organizations",
            buttonText: "Contact Sales",
            href: "#",
        },
    ];

    const testimonials = [
        {
            author: {
                name: "Emma Thompson",
                handle: "@emmaai",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "This platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
            href: "#"
        },
        {
            author: {
                name: "David Park",
                handle: "@davidtech",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "The API integration is flawless. We've reduced development time by 60%.",
            href: "#"
        },
        {
            author: {
                name: "Sofia Rodriguez",
                handle: "@sofiaml",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "Finally, a tool that understands context! The accuracy is impressive."
        }
    ];

    return (
        <div className="min-h-screen bg-bg-900 text-textPrimary">
            {/* Hero Section with Typewriter */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <BeamsBackground intensity="strong" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-accentCyan via-accentCyan400 to-accentBlue bg-clip-text text-transparent">
                        Premium UI Components
                    </h1>
                    <div className="text-2xl mb-8">
                        <Typewriter
                            text={["Build Amazing UIs", "20+ Components", "Production Ready", "TrueTrace Design System"]}
                            speed={100}
                            loop={true}
                            className="text-textSecondary"
                        />
                    </div>
                    <div className="mt-8">
                        <ToggleTheme />
                    </div>
                </div>
            </section>

            {/* Glowing Effect Demo */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Glowing Effect Cards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="relative rounded-xl border border-glassBorder p-6 bg-panel backdrop-blur-xl">
                                <GlowingEffect disabled={false} glow={true} proximity={64} />
                                <h3 className="text-xl font-semibold mb-2">Feature {i}</h3>
                                <p className="text-textSecondary">Hover to see the glowing border effect in action.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dock Component */}
            <section className="py-24 px-4 bg-bg-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">macOS-Style Dock</h2>
                    <div className="flex justify-center">
                        <Dock>
                            <DockItem className='aspect-square rounded-full bg-gradient-to-br from-accentCyan to-accentBlue'>
                                <DockLabel>Home</DockLabel>
                                <DockIcon>
                                    <Home className='h-full w-full text-white' />
                                </DockIcon>
                            </DockItem>
                            <DockItem className='aspect-square rounded-full bg-gradient-to-br from-accentBlue to-purple-500'>
                                <DockLabel>Search</DockLabel>
                                <DockIcon>
                                    <Search className='h-full w-full text-white' />
                                </DockIcon>
                            </DockItem>
                            <DockItem className='aspect-square rounded-full bg-gradient-to-br from-purple-500 to-pink-500'>
                                <DockLabel>Settings</DockLabel>
                                <DockIcon>
                                    <Settings className='h-full w-full text-white' />
                                </DockIcon>
                            </DockItem>
                            <DockItem className='aspect-square rounded-full bg-gradient-to-br from-pink-500 to-accentCyan'>
                                <DockLabel>Profile</DockLabel>
                                <DockIcon>
                                    <User className='h-full w-full text-white' />
                                </DockIcon>
                            </DockItem>
                        </Dock>
                    </div>
                </div>
            </section>

            {/* Globe Component */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Animated Globe</h2>
                    <Globe />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24">
                <PricingSection
                    plans={pricingPlans}
                    title="Simple, Transparent Pricing"
                    description="Choose the plan that's right for you"
                />
            </section>

            {/* Testimonials with Marquee */}
            <section className="py-24 bg-bg-800">
                <TestimonialsSection
                    title="Trusted by developers worldwide"
                    description="Join thousands building the future"
                    testimonials={testimonials}
                />
            </section>

            {/* Infinite Slider */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Partner Logos</h2>
                    <InfiniteSlider speed={40} speedOnHover={20}>
                        {['Nvidia', 'GitHub', 'OpenAI', 'Nike', 'Laravel'].map((name) => (
                            <div key={name} className="flex items-center justify-center px-8">
                                <span className="text-2xl font-bold text-textSecondary">{name}</span>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>
            </section>

            {/* Flip Card */}
            <section className="py-24 px-4 bg-bg-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">3D Flip Card Login</h2>
                    <div className="flex justify-center">
                        <FlipCard
                            frontTitle="Welcome Back 👋"
                            frontDescription="Click to login"
                            backTitle="Login Form"
                            backDescription="Enter your credentials"
                            fields={[
                                { name: "email", type: "email", label: "Email", placeholder: "you@example.com" },
                                { name: "password", type: "password", label: "Password", placeholder: "••••••••" },
                            ]}
                            onLogin={async (data) => {
                                console.log('Login:', data);
                                return true;
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Image Uploader */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">Image Uploader</h2>
                    <div className="flex justify-center">
                        <ImageUploadField
                            value={image}
                            onChange={setImage}
                            className="w-64"
                        />
                    </div>
                </div>
            </section>

            {/* Container Scroll Animation */}
            <section className="py-24 bg-bg-800">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-white">
                                Unleash the power of <br />
                                <span className="text-5xl md:text-6xl font-bold mt-1 leading-none bg-gradient-to-r from-accentCyan to-accentBlue bg-clip-text text-transparent">
                                    Scroll Animations
                                </span>
                            </h1>
                        </>
                    }
                >
                    <div className="w-full h-full bg-gradient-to-br from-accentCyan/20 to-accentBlue/20 rounded-2xl flex items-center justify-center">
                        <p className="text-4xl font-bold text-white">Your Content Here</p>
                    </div>
                </ContainerScroll>
            </section>

            {/* Footer */}
            <Footer
                logoSrc="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=256&h=256&fit=crop"
                companyName="TrueTrace"
                description="Empowering truth with intelligent misinformation detection."
                onSubscribe={async (email) => {
                    console.log('Subscribe:', email);
                    return true;
                }}
            />
        </div>
    );
};

export default ComponentShowcase;
