import React from "react";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";

export default function RoutesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
            <Footer />
        </div>
    );
}
