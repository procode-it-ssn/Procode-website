import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full pt-20">{children}</main>
    </>
  );
}
