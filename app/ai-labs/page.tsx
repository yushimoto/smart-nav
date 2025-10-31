import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import BlogSection from "@/components/BlogSection";

function About() {
	return (
		<>
			<Header_01 />
			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb">
					{/* Section Spacer */}
					<div className="breadcrumb-wrapper">
						{/* Section Container */}
						<div className="global-container">
							<div className="breadcrumb-block">
								<h1 className="breadcrumb-title">Research & Innovation</h1>
								<ul className="breadcrumb-nav">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>AI Labs</li>
								</ul>
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Breadcrumb Section End :::... */}
				{/*...::: About Us Section Start :::... */}
				<section id="about-hero-section">
					{/* Section Spacer */}
					<div className="mb-20 lg:mb-24">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
									<h2>Our Research Philosophy</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* About Hero Image */}
							<div
								className="jos overflow-hidden rounded-3xl"
								data-jos_animation="zoom"
							>
								<Image
									src="/assets/img_placeholder/how-it-works2.png"
									alt="about-hero-image"
									width={1296}
									height={650}
									className="h-[650px] w-full object-cover"
								/>
							</div>
							{/* About Hero Image */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: About Us Section End :::... */}
				{/*...::: Content Section Start :::... */}
				<section id="content-section-2">
					{/* Section Spacer */}
					<div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
						{/* Section Container */}
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
								{/* Content Left Block */}
								<div
									className="jos order-2 overflow-hidden rounded-md"
									data-jos_animation="fade-left"
								>
									<Image
										src="/assets/img_placeholder/how-it-works1.png"
										alt="content-image-2"
										width={526}
										height={550}
										className="h-auto w-full"
									/>
								</div>
								{/* Content Left Block */}
								{/* Content Right Block */}
								<div className="jos order-1" data-jos_animation="fade-right">
									{/* Section Content Block */}
									<div className="mb-6">
										<h2>Partner with us</h2>
									</div>
									{/* Section Content Block */}
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
										At SmartNav, our research is driven by a commitment to solving fundamental challenges in autonomy. We believe in a collaborative approach, working closely with industry partners and academic institutions to push the boundaries of whats possible in AI for flight. Our focus is on developing practical, real-world solutions that enhance safety, efficiency, and adaptability in complex environments.
										</p>
										<Link
											href="mailto:info@smartnav.ai"
											className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
										>
											Get in touch
										</Link>
									</div>
								</div>
								{/* Content Right Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Content Section End :::... */}
				{/*...::: Core Value Section Start :::... */}
				<section id="core-value">
					{/* Section Spacer */}
					<div className="jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
									<h2 className="text-white">
									Featured Models
									</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Horizontal Separator */}
							<div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0" />
							{/* AI Models list */}
							<ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
								{/* AI Model Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex flex-col gap-x-3 md:mb-6">
										<div className="h-[200px] w-full mb-4">
											<Image
												src="/assets/img_placeholder/ai-labs-model1.webp"
												alt="SmartNav Flight Control Model"
												width={400}
												height={200}
												className="w-full h-full object-cover rounded-lg"
											/>
										</div>
										<h4 className="flex-1 text-white text-xl font-semibold mb-3">SmartNav Flight Control Model</h4>
										<p className="text-lg text-white lg:text-[21px] mb-4">
											An advanced model for precise and adaptive flight control in autonomous aircraft.
										</p>
										<button className="bg-colorOrangyRed text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
											Try Live Demo
										</button>
									</div>
								</li>
								{/* AI Model Item */}
								{/* AI Model Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex flex-col gap-x-3 md:mb-6">
										<div className="h-[200px] w-full mb-4">
											<Image
												src="/assets/img_placeholder/ai-labs-model2.webp"
												alt="SmartNav Path Planning Model"
												width={400}
												height={200}
												className="w-full h-full object-cover rounded-lg"
											/>
										</div>
										<h4 className="flex-1 text-white text-xl font-semibold mb-3">SmartNav Path Planning Model</h4>
										<p className="text-lg text-white lg:text-[21px] mb-4">
											A sophisticated model for generating optimal flight paths in complex and dynamic environments.
										</p>
										<button className="bg-colorOrangyRed text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
											Explore on Github
										</button>
									</div>
								</li>
								{/* AI Model Item */}
								{/* AI Model Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex flex-col gap-x-3 md:mb-6">
										<div className="h-[200px] w-full mb-4">
											<Image
												src="/assets/img_placeholder/ai-labs-model3.webp"
												alt="SmartNav Environmental Perception Model"
												width={400}
												height={200}
												className="w-full h-full object-cover rounded-lg"
											/>
										</div>
										<h4 className="flex-1 text-white text-xl font-semibold mb-3">SmartNav Environmental Perception Model</h4>
										<p className="text-lg text-white lg:text-[21px] mb-4">
											A cutting-edge model for real-time environmental perception and understanding in autonomous flight.
										</p>
										<button className="bg-colorOrangyRed text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300">
											View on Hugging Face
										</button>
									</div>
								</li>
								{/* AI Model Item */}
							</ul>
							{/* AI Models list */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Core Value Section End :::... */}
				{/*...::: Team Section Start :::... */}
				<section id="team-section">
					{/* Section Spacer */}
					<div className="py-20 xl:py-[130px]">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20">
								<div className="max-w-sm lg:max-w-3xl xl:max-w-[745px]">
									<h2>Our Blogs</h2>
									<p className="mt-4 text-lg text-gray-600">
										Stay updated with our latest research, breakthroughs, and insights in autonomous flight AI.
									</p>
								</div>
								<Link
									href="https://smartnav.hashnode.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
								>
									View All Posts
								</Link>
							</div>
							{/* Blog Posts Grid */}
							<BlogSection />
							{/* Blog Posts Grid */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Team Section End :::... */}
			</main>
			<Footer_01/>
		</>
	);
}

export default About;
