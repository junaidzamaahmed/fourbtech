import React from "react";
import Image from "next/image";

const Why_choose_our_service = () => {
    return (
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Why Choose Our UI/UX Services
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600">
                        Trusted By Startups And Enterprises To Deliver Intuitive, Goal-Driven Digital Experiences.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 relative aspect-[1]">
                        <Image
                            src="/UiUxDesigns/why_choose_our_services.png"
                            alt="UI/UX Design Process"
                            fill
                            className="rounded-xl shadow-md object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">User-Centered Approach</h3>
                            <p className="text-gray-600">
                                We Put Your Users At The Heart Of Every Decision. Through Empathy-Driven Research And Behavioral Insights, We Create Interfaces That Feel Natural, Intuitive, And Delightful.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Research-Led Strategy</h3>
                            <p className="text-gray-600">
                                Every Project Begins With Discovery — Analyzing Your Users, Industry, And Competitors To Uncover The Right Design Direction. No Assumptions, Just Insights.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Goal-Driven Design</h3>
                            <p className="text-gray-600">
                                Our Designs Don&apos;t Just Look Good — They&apos;re Built To Perform. Whether It&apos;s Increasing Conversions, Reducing Bounce Rates, Or Enhancing Usability, We Align Design With Business Outcomes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Pixel-Perfect Aesthetics</h3>
                            <p className="text-gray-600">
                                From Typography To Spacing, Color Palettes To Animations — Every Visual Detail Is Carefully Crafted To Match Your Brand Identity And Create A Consistent User Experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">Scalable, Dev-Ready Output</h3>
                            <p className="text-gray-600">
                                We Hand Over Clean, Structured Design Systems With Clear Documentation — Making Developer Collaboration Smooth And Ensuring Your Product Scales Effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why_choose_our_service;
