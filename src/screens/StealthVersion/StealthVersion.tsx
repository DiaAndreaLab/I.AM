import {
  ChevronRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CustomCursor } from "../../components/ui/CustomCursor";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const StealthVersion = (): JSX.Element => {
  const [expandedItem, setExpandedItem] = useState<number | null>(0);
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageScroll = imageScrollRef.current;
    const textScroll = textScrollRef.current;

    if (!imageScroll || !textScroll) return;

    const handleScroll = () => {
      const scrollPercentage = imageScroll.scrollLeft / (imageScroll.scrollWidth - imageScroll.clientWidth);
      const maxTextScroll = textScroll.scrollWidth - textScroll.clientWidth;
      textScroll.scrollLeft = scrollPercentage * maxTextScroll;
    };

    imageScroll.addEventListener('scroll', handleScroll);
    return () => imageScroll.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { title: "Introduction", active: true },
    { title: "Pain point", active: false },
    { title: "Solution", active: false },
    { title: "Platforms", active: false },
  ];

  // Feature items data
  const featureItems = [
    {
      title: "Simple frontend integration",
      description:
        "Corporations and software companies are integrating Almefy via a self serving platform, delivering a frictions-less frontend and convenient platform management.",
    },
    {
      title: "Simple platform management",
      description: "Manage your platform settings and configurations with ease through our intuitive dashboard interface.",
    },
    {
      title: "Simple application enablement",
      description: "Enable and configure applications quickly with our streamlined process and comprehensive documentation.",
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <CustomCursor />
      <div className="bg-white overflow-hidden w-full max-w-[1280px] relative px-4 md:px-8 lg:px-12">
        {/* Header/Navigation */}
        <header className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <img className="w-[77px] h-6" alt="I.AM Logo" src="/group-3349.png" />

          <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`h-[21px] p-0 whitespace-nowrap ${item.active ? "font-bold" : "font-light"} text-[#191a1f] text-sm md:text-base`}
              >
                {item.title}
              </Button>
            ))}
          </nav>

          <Button className="bg-[#191a1f] text-white rounded-[50px] h-14 px-4 w-full md:w-auto">
            Get Early Access
          </Button>
        </header>

        {/* Hero Section */}
        <section className="relative mt-20 md:mt-[165px] mx-auto text-center max-w-[854px]">
          <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] top-0 left-1/2 -translate-x-1/2 rounded-full [background:linear-gradient(180deg,rgba(242,39,67,1)_0%,rgba(243,116,50,1)_100%)]" />
          <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] top-[60px] md:top-[117px] left-1/2 -translate-x-1/2 rounded-full -rotate-180 blur-[50px] [background:linear-gradient(180deg,rgba(245,245,245,1)_0%,rgba(243,116,50,1)_100%)]" />
          <div className="absolute w-[150px] h-[150px] md:w-[225px] md:h-[225px] top-[150px] md:top-[244px] left-1/2 -translate-x-1/2 rounded-full shadow-[0px_4px_200px_#ffffff] [background:linear-gradient(180deg,rgba(173,191,253,1)_0%,rgba(173,191,253,1)_100%)]" />
          <div className="absolute w-[200px] h-[200px] md:w-[357px] md:h-[357px] top-40 md:top-60 left-1/2 -translate-x-1/2 rounded-full blur-[50px] [background:linear-gradient(180deg,rgba(173,191,253,1)_0%,rgba(255,255,255,1)_100%)]" />

          <div className="relative z-10 pt-20 md:pt-36">
            <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[96px] tracking-[1.23px] text-[#191a1f]">
              <span className="font-medium [font-family:'Montserrat',Helvetica]">
                Rise of true{" "}
              </span>
              <span className="[font-family:'Chromate-Regular',Helvetica]">
                Passwordless.
              </span>
            </h1>

            <p className="mt-6 mx-auto max-w-[649px] text-[#191a1f] text-sm md:text-base tracking-[-0.58px] leading-6 [font-family:'Montserrat',Helvetica] px-4">
              Passwords are lost, stolen, forgotten.
              <br />
              That&apos;s why software companies try to hide them in keychains
              and behind passcodes. <br />
              Not us. With Almefy corporations go truly passwordless.
            </p>
          </div>
        </section>

        {/* Pain Points Section */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mt-20 md:mt-[200px] overflow-hidden">
          <div
            ref={textScrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 md:px-8 lg:px-12 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <section className="flex-shrink-0 snap-center w-[85vw] md:w-[878px]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-[282px] [font-family:'Montserrat',Helvetica] text-[#191a1f] text-4xl md:text-[56px] tracking-[1.68px] leading-tight md:leading-[56px]">
                  <span className="font-medium tracking-[0.94px]">It's a struggle.</span>
                </div>
                <p className="w-full md:w-[375px] text-[#191a1f] text-sm md:text-base tracking-[-0.58px] leading-6 [font-family:'Montserrat',Helvetica]">
                  Passwords are the weakest link in security. They are bad for user
                  experience. And still: Today less than 10% of authentication is
                  passwordless.
                </p>
              </div>
            </section>

            <section className="flex-shrink-0 snap-center w-[85vw] md:w-[878px]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-[282px] [font-family:'Montserrat',Helvetica] text-[#191a1f] text-4xl md:text-[56px] tracking-[1.68px] leading-tight md:leading-[56px]">
                  <span className="font-medium tracking-[0.94px]">High risk and cost.</span>
                </div>
                <p className="w-full md:w-[375px] text-[#191a1f] text-sm md:text-base tracking-[-0.58px] leading-6 [font-family:'Montserrat',Helvetica]">
                  Traditional password-based authentication systems are costly to maintain and pose significant security risks to organizations.
                </p>
              </div>
            </section>

            <section className="flex-shrink-0 snap-center w-[85vw] md:w-[878px]">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-full md:w-[282px] [font-family:'Montserrat',Helvetica] text-[#191a1f] text-4xl md:text-[56px] tracking-[1.68px] leading-tight md:leading-[56px]">
                  <span className="font-medium tracking-[0.94px]">Time for change.</span>
                </div>
                <p className="w-full md:w-[375px] text-[#191a1f] text-sm md:text-base tracking-[-0.58px] leading-6 [font-family:'Montserrat',Helvetica]">
                  The future of authentication is passwordless, offering enhanced security and improved user experience.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Full-width Scroll Section */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mt-8 md:mt-[60px] overflow-hidden">
          <div 
            ref={imageScrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 md:px-8 lg:px-12 scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="w-[85vw] md:w-[878px] h-[300px] md:h-[528px] bg-[#d2d3d8] rounded-[25px] md:rounded-[50px] relative overflow-hidden flex-shrink-0 snap-center">
              <img
                className="w-full h-full object-cover"
                alt="Authentication illustration"
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=2000&h=1000"
              />
              <img
                className="absolute right-[-330px] top-0 w-[330px] h-[528px] hidden md:block"
                alt="Authentication illustration"
                src="/rectangle-305.svg"
              />
            </div>
            <div className="w-[85vw] md:w-[878px] h-[300px] md:h-[528px] bg-[#d2d3d8] rounded-[25px] md:rounded-[50px] relative overflow-hidden flex-shrink-0 snap-center">
              <img
                className="w-full h-full object-cover"
                alt="Authentication illustration"
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000&h=1000"
              />
            </div>
            <div className="w-[85vw] md:w-[878px] h-[300px] md:h-[528px] bg-[#d2d3d8] rounded-[25px] md:rounded-[50px] relative overflow-hidden flex-shrink-0 snap-center">
              <img
                className="w-full h-full object-cover"
                alt="Authentication illustration"
                src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?auto=format&fit=crop&q=80&w=2000&h=1000"
              />
            </div>
          </div>
        </div>

        {/* Big Change Section */}
        <section className="flex flex-col lg:flex-row mt-12 md:mt-[80px]">
          <div className="w-full lg:w-[542px]">
            <h2 className="w-full lg:w-[419px] [font-family:'Montserrat',Helvetica] text-[#191a1f] text-4xl md:text-[56px] tracking-[1.68px] leading-tight md:leading-[56px]">
              <span className="font-medium tracking-[0.94px]">
                Big change
                <br />
              </span>
              <span className="[font-family:'Chromate-Regular',Helvetica] tracking-[0.94px]">
                made easy.
              </span>
            </h2>

            <div className="mt-8 md:mt-[48px]">
              {featureItems.map((item, index) => (
                <div key={index} className="mb-8">
                  <button 
                    onClick={() => toggleItem(index)}
                    className="w-full"
                  >
                    <div className="flex justify-between items-center cursor-pointer">
                      <h3 className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-xl md:text-2xl leading-[21px]">
                        {item.title}
                      </h3>
                      <ChevronRightIcon 
                        className={`w-6 h-6 transform transition-transform duration-300 ${
                          expandedItem === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      expandedItem === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.description && (
                      <p className="mt-4 text-[#191a1f] text-sm md:text-base leading-6 [font-family:'Montserrat',Helvetica]">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <Separator className="mt-6 bg-[#191a1f]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:ml-[85px] w-full lg:w-[711px] h-[300px] md:h-[528px] bg-[#f2ead4] rounded-[25px] md:rounded-[50px] relative overflow-hidden">
            <img
              className="absolute w-full md:w-[640px] h-full object-cover"
              alt="Platform interface"
              src="/homepage-1---organization-page-1.png"
            />
          </div>
        </section>

        {/* CTA Section */}
        <Card className="mt-12 md:mt-[80px] bg-[#191a1f] rounded-[15px] text-white">
          <CardContent className="p-6 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-[515px] h-[300px] md:h-[398px] relative">
                <div className="absolute w-[280px] md:w-[378px] h-12 md:h-14 top-[53px] left-[19px] rotate-[-16.70deg] bg-[#3547ec] rounded-[50px] flex items-center px-4">
                  <span className="[font-family:'Montserrat',Helvetica] text-white text-sm md:text-base">
                    Current solutions are just hiding passwords
                  </span>
                </div>

                <div className="absolute w-[300px] md:w-[387px] h-[300px] md:h-[387px]">
                  <div className="absolute w-[200px] md:w-[274px] h-[200px] md:h-[274px] top-[57px] left-[57px] -rotate-45">
                    <div className="relative w-[150px] md:w-[194px] h-[150px] md:h-[194px] top-10 left-10 -rotate-45">
                      <div className="absolute w-[180px] md:w-[218px] h-12 md:h-14 top-[69px] -left-3 bg-[#d1d2d7] rounded-[50px] rotate-45 flex items-center justify-center">
                        <span className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base">
                          Increase productivity
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[160px] md:w-[199px] h-12 md:h-14 top-[300px] left-[47px] bg-[#f37432] rounded-[50px] flex items-center justify-center px-4">
                    <span className="[font-family:'Montserrat',Helvetica] text-white text-sm md:text-base whitespace-nowrap">
                      50% workforce
                    </span>
                  </div>

                  <div className="absolute w-[130px] md:w-[158px] h-12 md:h-14 top-[211px] left-[266px] bg-[#adbffd] rounded-[50px] flex items-center px-4">
                    <span className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base">
                      It&apos;s the safe way
                    </span>
                  </div>

                  <div className="absolute w-[130px] md:w-[161px] h-[80px] md:h-[93px] top-[95px] left-[341px] rotate-[30deg]">
                    <div className="absolute w-[120px] md:w-[152px] h-12 md:h-14 top-[19px] left-[5px] bg-[#f2ead4] rounded-[50px] rotate-[-15deg] flex items-center justify-center">
                      <span className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base">
                        Game changer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute w-[130px] md:w-[161px] h-[80px] md:h-[93px] top-[95px] left-[341px] rotate-[30deg]">
                  <div className="absolute w-[120px] md:w-[152px] h-12 md:h-14 top-[19px] left-[5px] bg-[#f2ead4] rounded-[50px] rotate-[-15deg] flex items-center justify-center">
                    <span className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base">
                      Game changer
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:ml-[40px] flex flex-col w-full lg:w-[526px] gap-6">
                <div>
                  <h2 className="[font-family:'Montserrat',Helvetica] text-4xl md:text-[56px] leading-tight md:leading-[56px]">
                    <span className="[font-family:'Montserrat',Helvetica]">Follow our progress</span>
                  </h2>

                  <p className="mt-6 text-sm md:text-base leading-6 [font-family:'Montserrat',Helvetica]">
                    We are already integrating Almefy with initial customers and
                    are working together with security software developers to
                    incorporate Almefy into their offerings. <br />
                    <br />
                    To gain early access to our solution, contact us here.
                  </p>
                </div>

                <div className="relative mt-6 w-full">
                  <div className="relative w-full h-16 bg-white rounded-[50px] flex items-center">
                    <Input
                      className="h-16 pl-4 border-none text-[#191a1f] text-sm md:text-base [font-family:'Montserrat',Helvetica] rounded-[50px]"
                      placeholder="Type your email here"
                    />
                    <Button className="absolute right-1 top-1 bg-[#191a1f] text-white h-14 rounded-[50px] px-4 hidden md:block">
                      Get Early Access
                    </Button>
                    <Button className="absolute right-1 top-1 bg-[#191a1f] text-white h-14 rounded-[50px] px-4 md:hidden w-[calc(100%-8px)]">
                      Get Access
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 md:mt-[80px] pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-4">
                <img
                  className="w-[77px] h-6"
                  alt="I.AM Logo"
                  src="/group-3350.png"
                />
                <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#191a1f] text-sm md:text-base">
                  Rise of true passwordless.
                </span>
              </div>
              <p className="mt-4 [font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base">
                2025 I.AM GmbH. All rights reserved
              </p>
            </div>

            <div className="flex gap-8 md:gap-14">
              <div>
                <h3 className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base leading-[31px]">
                  Email
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-bold text-[#191a1f] text-sm md:text-base leading-[31px]">
                  i.am@support.com
                </p>
              </div>

              <div>
                <h3 className="[font-family:'Montserrat',Helvetica] text-[#191a1f] text-sm md:text-base leading-[31px]">
                  Social
                </h3>
                <div className="flex items-center">
                  <p className="[font-family:'Montserrat',Helvetica] font-bold text-[#191a1f] text-sm md:text-base leading-[31px]">
                    Linkedin
                  </p>
                  <ExternalLinkIcon className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};