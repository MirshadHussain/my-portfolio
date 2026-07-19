import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Loading from '../ui/Loading';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary selection:bg-accent/40">
      <Navbar />
      <main className="flex-1 relative z-10">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="relative z-10 py-8 text-center border-t border-border text-text-muted-dark text-sm bg-bg-surface/80 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Mirshad Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
