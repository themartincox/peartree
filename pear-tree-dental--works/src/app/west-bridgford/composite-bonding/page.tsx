import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TestimonialBanner from "@/components/TestimonialBanner";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import {
	MapPin,
	Clock,
	Phone,
	Star,
	CheckCircle,
	Car,
	CalendarDays,
	Shield,
	Heart,
	Crown,
	Sparkles,
	Award,
	Navigation,
	Palette,
	Zap,
	Target,
	Smile,
	Settings
} from "lucide-react";
import practiceInfo from "@/data/practiceInfo";
import { getTreatmentPrice } from "@/data/pricing";

export const metadata: Metadata = {
	title: "Composite Bonding in West Bridgford - Affordable Smile Enhancement | Pear Tree Dental",
	description: "Composite bonding for West Bridgford residents. Affordable same-day smile improvements, gap closure, and tooth reshaping just minutes away. Natural-looking results guaranteed.",
	keywords: [
		"composite bonding West Bridgford",
		"dental bonding West Bridgford",
		"tooth bonding West Bridgford",
		"edge bonding West Bridgford",
		"affordable cosmetic dentistry West Bridgford",
		"same day smile makeover West Bridgford",
		"gap closure West Bridgford"
	],
	openGraph: {
		title: "Composite Bonding in West Bridgford - Affordable Smile Enhancement | Pear Tree Dental",
		description: "Composite bonding for West Bridgford residents. Affordable same-day smile improvements with natural-looking results.",
		url: "https://peartree.dental/west-bridgford/composite-bonding"
	},
	alternates: {
		canonical: "https://peartree.dental/west-bridgford/composite-bonding"
	}
};

export default function WestBridgfordCompositeBondingPage() {
	const wbBondingFAQs = [
		{
			question: "How far is composite bonding treatment from West Bridgford?",
			answer: "Pear Tree Dental is just a short drive from West Bridgford. We're specialists in aesthetic composite bonding with same-day appointments and natural-looking results."
		},
		{
			question: "What can composite bonding fix for West Bridgford patients?",
			answer: "Composite bonding can fix chipped teeth, close gaps, reshape teeth, cover stains, and improve tooth length. It's perfect for minor cosmetic improvements without major treatment."
		},
		{
			question: "How long does composite bonding last?",
			answer: "High-quality composite bonding typically lasts 5-8 years with proper care. We use premium materials and provide comprehensive aftercare to maximise longevity."
		},
		{
			question: "Can composite bonding be done in one visit?",
			answer: "Yes! Most composite bonding treatments are completed in a single appointment lasting 1-3 hours depending on the number of teeth being treated."
		},
		{
			question: "What makes your bonding service special for West Bridgford residents?",
			answer: "We combine artistic skill, premium composite materials, same-day treatment, and natural colour matching. Our bonding is indistinguishable from natural teeth."
		}
	];

	const bondingTreatments = [
		{
			name: "Gap Closure",
			description: "Close small gaps between teeth",
			duration: "1-2 hours",
			teeth: "2-4 teeth",
			price: getTreatmentPrice("Composite Edge Bonding"),
			benefits: ["Instant results", "No drilling required", "Reversible treatment"],
			icon: Target
		},
		{
			name: "Chip Repair",
			description: "Restore chipped or broken teeth",
			duration: "30-60 minutes",
			teeth: "Per tooth",
			price: getTreatmentPrice("Composite Edge Bonding"),
			benefits: ["Same-day repair", "Natural appearance", "Strengthen tooth"],
			icon: Shield
		},
		{
			name: "Shape Enhancement",
			description: "Improve tooth shape and length",
			duration: "2-3 hours",
			teeth: "4-6 teeth",
			price: getTreatmentPrice("Composite Veneers"),
			benefits: ["Perfect symmetry", "Customised shape", "Immediate improvement"],
			icon: Palette
		},
		{
			name: "Edge Bonding",
			description: "Enhance and lengthen front teeth",
			duration: "1-2 hours",
			teeth: "4-8 teeth",
			price: getTreatmentPrice("Composite Edge Bonding"),
			benefits: ["Youthful appearance", "Enhanced smile", "Conservative treatment"],
			icon: Smile
		}
	];

	const advantages = [
		{
			icon: Clock,
			title: "Same-Day Results",
			description: "Complete treatment in one appointment with immediate results"
		},
		{
			icon: Heart,
			title: "Conservative Treatment",
			description: "Minimal tooth preparation required, preserving natural tooth structure"
		},
		{
			icon: Sparkles,
			title: "Natural Appearance",
			description: "Perfect colour matching and texture for invisible repairs"
		},
		{
			icon: Award,
			title: "Affordable Option",
			description: "Cost-effective way to dramatically improve your smile"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-pear-background to-white">
			{/* Structured Data Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "MedicalBusiness",
						"name": "Pear Tree Dental - Composite Bonding in West Bridgford",
						"image": "https://peartree.dental/images/composite-bonding-west-bridgford.jpg",
						"url": "https://peartree.dental/west-bridgford/composite-bonding",
						"telephone": "+44-115-931-2935",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": practiceInfo.address.street,
							"addressLocality": practiceInfo.address.city,
							"addressRegion": practiceInfo.address.county,
							"postalCode": practiceInfo.address.postcode,
							"addressCountry": "UK"
						},
						"areaServed": {
							"@type": "Place",
							"name": "West Bridgford"
						},
						"medicalSpecialty": "Cosmetic Dentistry - Composite Bonding",
						"geo": {
							"@type": "GeoCoordinates",
							"latitude": 52.9193,
							"longitude": -1.1297
						},
						"openingHours": [
							"Mo-Th 08:45-17:00",
							"Fr 08:00-15:30"
						],
						"priceRange": "£120-£200"
					})
				}}
			/>

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-pear-primary to-pear-primary/90 text-white py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<div className="flex justify-center mb-6">
							<Badge className="bg-pear-gold text-white px-4 py-2 text-sm font-semibold">
								<MapPin className="w-4 h-4 mr-2" />
								Serving West Bridgford & Surrounds
							</Badge>
						</div>

						<h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
							Composite Bonding in <span className="text-pear-gold">West Bridgford</span>
						</h1>

						<p className="text-xl sm:text-2xl leading-relaxed opacity-90 mb-4">
							Affordable Same-Day Smile Enhancement Minutes from the City Centre
						</p>

						<div className="bg-white/10 rounded-lg p-4 mb-8 inline-block">
							<p className="text-lg font-medium">
								<Car className="inline w-5 h-5 mr-2" />
								Only minutes from West Bridgford — Same-day results available
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/book">
								<Button size="lg" className="bg-pear-gold hover:bg-pear-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full">
									<Sparkles className="w-5 h-5 mr-2" />
									Book Free Bonding Consultation
								</Button>
							</Link>
							<a href={`tel:${practiceInfo.contact.phone.replace(/\s+/g, "")}`}>
								<Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pear-primary px-8 py-4 text-lg font-semibold rounded-full">
									<Phone className="w-5 h-5 mr-2" />
									Call Now: {practiceInfo.contact.phone}
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Localised Introduction */}
			<section className="py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
								Why West Bridgford Residents Choose Composite Bonding for Smile Enhancement
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								For West Bridgford residents seeking affordable, immediate smile improvements, composite bonding offers
								the perfect solution. Our artistic composite bonding specialists in Burton Joyce provide
								same-day transformations that look completely natural, just minutes from West Bridgford.
							</p>
						</div>

						<div className="grid md:grid-cols-4 gap-6 mb-12">
							{advantages.map((advantage, index) => {
								const IconComponent = advantage.icon;
								return (
									<Card key={index} className="text-center hover:shadow-lg transition-shadow">
										<CardContent className="p-6">
											<IconComponent className="w-12 h-12 text-pear-primary mx-auto mb-4" />
											<h3 className="font-bold text-pear-primary mb-2">{advantage.title}</h3>
											<p className="text-gray-600 text-sm">{advantage.description}</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Treatment Options Section */}
			<section className="py-20 bg-cream/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-6xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-primary mb-6">
								Composite Bonding Treatments for West Bridgford Patients
							</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								From simple chip repairs to comprehensive smile enhancements, our composite bonding
								treatments offer affordable, immediate improvements for every West Bridgford patient's needs.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
							{bondingTreatments.map((treatment, index) => {
								const IconComponent = treatment.icon;
								return (
									<Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-200 hover:border-pear-primary">
										<CardHeader className="text-center pb-4">
											<div className="w-16 h-16 bg-pear-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
												<IconComponent className="w-8 h-8 text-pear-primary" />
											</div>
											<CardTitle className="text-lg text-pear-primary">{treatment.name}</CardTitle>
											<p className="text-gray-600 text-sm">{treatment.description}</p>
										</CardHeader>
										<CardContent className="space-y-4">
											<div className="text-center">
												<p className="text-2xl font-bold text-pear-primary mb-1">{treatment.price}</p>
												<p className="text-sm text-gray-600">{treatment.teeth}</p>
											</div>
											<div className="flex items-center justify-center gap-2">
												<Clock className="w-4 h-4 text-gray-500" />
												<span className="text-sm text-gray-600">{treatment.duration}</span>
											</div>
											<div className="space-y-2">
												{treatment.benefits.map((benefit, idx) => (
													<div key={idx} className="flex items-center gap-2">
														<CheckCircle className="w-4 h-4 text-pear-primary flex-shrink-0" />
														<span className="text-sm text-gray-700">{benefit}</span>
													</div>
												))}
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* ...existing code for process, testimonials, before/after, directions, and CTA... */}
		</div>
	);
}
