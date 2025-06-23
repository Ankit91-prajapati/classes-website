import { Landmark, BookOpenText, MountainSnow, Target } from 'lucide-react';

const Section = ({
    Icon,
    title,
    description,
    children,
}) => (
    <section className=" bg-gradient-to-r from-cyan-200 to-blue-300 rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 space-y-3">
        <div className="flex items-center gap-3 mb-2">
            <Icon className="text-blue-600 w-7 h-7 md:w-8 md:h-8" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
        {children && <div className="pt-4">{children}</div>}
    </section>
);

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900">
            <header className="text-center py-14 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
                    About Our Institute
                </h1>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                    Discover our legacy, vision, and impactful journey of educational excellence.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-14 pb-20">
                {/* History & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Section
                        Icon={Landmark}
                        title="Our History"
                        description="Established in 2001, our institute started as a modest learning center powered by a few visionary educators. Guided by passion and purpose, we have grown into a celebrated academic institution known for innovation, inclusivity, and impact. Over the decades, our legacy has been shaped by milestones that reflect our commitment to progress and excellence."
                    />

                    <Section
                        Icon={Target}
                        title="Our Mission"
                        description="We aim to empower individuals through transformative learning. Our mission is to cultivate leadership, critical thinking, and compassion by offering holistic education. We blend academic rigor with experiential learning to prepare students for real-world challenges and meaningful contributions to society."
                    />
                </div>

                {/* Campus & Milestones */}
                <Section
                    Icon={MountainSnow}
                    title="Campus & Milestones"
                    description="From pioneering academic frameworks to hosting international conferences, our milestones are a testament to our vision. We've built a vibrant campus ecosystem with cutting-edge infrastructure and award-winning research hubs."
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <img
                            key="1"
                            src="https://th.bing.com/th/id/OIP.ZEN2RSpbwo0M21NXAs51ngHaET?w=170&h=104&c=7&bgcl=0f2a71&r=0&o=6&dpr=1.5&pid=13.1"
                            alt="Image 1"
                            loading="lazy"
                            className="rounded-lg w-full aspect-video object-cover shadow-sm hover:shadow-md transition"
                        />
                        <img
                            key="1"
                            src="https://th.bing.com/th/id/OIP.ZEN2RSpbwo0M21NXAs51ngHaET?w=170&h=104&c=7&bgcl=0f2a71&r=0&o=6&dpr=1.5&pid=13.1"
                            alt="Image 1"
                            loading="lazy"
                            className="rounded-lg w-full aspect-video object-cover shadow-sm hover:shadow-md transition"
                        />
                      
                    </div>
                </Section>

                {/* Founder's Message */}
                <Section
                    Icon={BookOpenText}
                    title="Founder's Message"
                    description="“Education is the cornerstone of empowerment and transformation. Our vision is to create not just professionals, but compassionate individuals ready to impact the world.”"
                />
            </main>
        </div>
    );
}


