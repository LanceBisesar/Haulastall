export default function Footer() {
  return (
    <footer className="border-t border-surface-light py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted text-sm">
        <p>&copy; {new Date().getFullYear()} Haul-A-Stall. All rights reserved.</p>
      </div>
    </footer>
  );
}
