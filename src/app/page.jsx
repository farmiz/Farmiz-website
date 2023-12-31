"use client";
import AppHeader from "./components/header";
import AppPurpose from "./components/purpose";
import AppPreview from "./components/app-preview";
import AppPromise from "./components/app-promise";
import AppFAQ from "./components/app-faq";
import Footer from "./components/footer";
import Scan from "./components/scan";
import CardSlider from "./components/CardSlider";

export default function Home() {
  return (
    <main className="font-cabinet bg-base-white w-full">
      <AppHeader />
      <AppPurpose />
      <AppPreview />
      <AppPromise />
      <CardSlider/>
      {/* <Scan /> */}
      <Footer /> 
      {/*
      <AppPromise />
      <AppFAQ />

    */}
    </main>
  );
}
