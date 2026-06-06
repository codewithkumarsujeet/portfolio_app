import Social from '@/components/Ui/social';
import React from 'react';

const FooterToggle: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-600 text-white py-4 font-Oswald"
        >
            <div className="container px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="flex flex-col items-start md:items-center justify-between md:flex-row gap-6">
                    {/* About Section */}
                    <div>
                        <h3 className="text-[1.25rem] font-semibold mb-2">About Me</h3>
                        <p className="text-white text-md">
                            I&apos;m a passionate developer creating modern and responsive webs
                            applications. Let&apos;s connect and build something great!
                        </p>
                    </div>


                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-[1.25rem] font-semibold mb-2">Follow Me</h3>
                        <ul className="flex space-x-4">
                            <Social />
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-4 border-t border-gray-300 pt-2 text-center">
                    <p className="text-gray-200 text-xs">
                        © 2024 Your Name. All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default FooterToggle;
