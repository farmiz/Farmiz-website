"use client";
import AppHeader from "./components/header";
import Image from "next/image";
import AppPurpose from "./components/purpose";
import logo from "../../public/footer-logo.png";
import AppPreview from "./components/app-preview";
import AppPromise from "./components/app-promise";
import AppFAQ from "./components/app-faq";
import apple from "../../public/apple.svg";
import play from "../../public/play.svg";
import AppButton from "./components/app-button";
import file from "../../public/file.png";
import appleFill from "../../public/apple-fill.svg";
import playFill from "../../public/play-fill.svg";
import Footer from "./components/footer";
import Scan from "./components/scan";

export default function Home() {
  return (
    <main className="font-cabinet bg-base-white">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <AppFAQ />

      <Scan />

      <Footer />
    </main>
  );
}
