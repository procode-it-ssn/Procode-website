import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen w-full">{children}</div>
      <Footer />
    </>
  );
}
