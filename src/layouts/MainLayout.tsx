import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import WhatsAppBot from '../components/shared/WhatsAppBot';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MainLayout() {
  useScrollReveal();
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppBot />
    </>
  );
}
