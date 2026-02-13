import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                S
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Syngene</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Pioneering the future of biotechnology through innovative research and sustainable solutions for a better world.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Our Services</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Research Areas</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">News & Media</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Drug Discovery</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Clinical Development</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Genomic Services</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Bioinformatics</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Manufacturing</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                                <span>123 Innovation Drive, Tech Park, <br />Cambridge, MA 02142</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={20} className="text-blue-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={20} className="text-blue-500 shrink-0" />
                                <span>contact@syngene.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Syngene International. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
