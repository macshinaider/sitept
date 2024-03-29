import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Larean Priston Tale",
	description: "Beta Open",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}  bg-scroll bg-cover h-screen`} style={{ backgroundImage: "url('/imgfundo.png')", height: "1080px" }}>
				<Header />
				<ToastContainer />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
