"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import DropdownMenu from "./dropdown-menu"
import { navigationData } from "~/components/footer_components/header/navigation-data"

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setOpenDropdown(null)
        }
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    const handleDropdownToggle = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-gradient-to-r from-[#005380] to-[#0085CC] shadow-2xl backdrop-blur-lg"
                : "bg-gradient-to-r from-[#005380]/90 to-[#0085CC]/90 backdrop-blur-md"
                }`}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0085CC] via-white to-[#0085CC]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                        <div className="p-2 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Kashmir ArtStay</h1>
                            <p className="text-xs text-gray-200 hidden sm:block">Authentic Kashmiri Heritage</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navigationData.map((item, index) => (
                            <DropdownMenu
                                key={item.title}
                                item={item}
                                isOpen={openDropdown === index}
                                onToggle={() => handleDropdownToggle(index)}
                            />
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-white bg-opacity-10 text-white font-semibold rounded-lg hover:bg-opacity-20 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg bg-white bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="py-4 space-y-4 border-t border-white border-opacity-20">
                        {navigationData.map((item) => (
                            <div key={item.title} className="space-y-2">
                                <h3 className="text-white font-semibold px-4">{item.title}</h3>
                                <div className="space-y-1">
                                    {item.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-6 py-2 text-gray-200 hover:text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 rounded-lg mx-4"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="px-4 pt-4 border-t border-white border-opacity-20">
                            <Link
                                href="/contact"
                                className="block w-full text-center px-6 py-3 bg-white bg-opacity-10 text-white font-semibold rounded-lg hover:bg-opacity-20 transition-all duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}