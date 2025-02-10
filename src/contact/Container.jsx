export default function Container({ children }) {
  return (
    <div className="app">
      <h1>Contact Form</h1>
      <div className="content">{children}</div>
      <footer>
        <p>&copy; 2025. Belajar React Misbah</p>
      </footer>
    </div>
  );
}
