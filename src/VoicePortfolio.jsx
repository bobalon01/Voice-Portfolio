export default function VoicePortfolio() {
  return (
    <div className=\"min-h-screen bg-gray-900 text-white font-sans\">
      <header className=\"text-center py-12 bg-gray-800 shadow-xl\">
        <h1 className=\"text-5xl font-bold\">Joseluis Alonzo</h1>
        <p className=\"text-xl mt-2 text-gray-400\">Voice Actor | Narrator | Character Specialist</p>
      </header>

      <section className=\"py-16 px-4 max-w-4xl mx-auto\">
        <h2 className=\"text-3xl font-semibold mb-6\">🎙 Voice Reels</h2>
        <div className=\"space-y-8\">
          <div>
            <h3 className=\"text-xl mb-2\">Commercial Demo</h3>
            <audio controls className=\"w-full\">
              <source src=\"/audio/commercial-demo.mp3\" type=\"audio/mpeg\" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div>
            <h3 className=\"text-xl mb-2\">Character Demo</h3>
            <audio controls className=\"w-full\">
              <source src=\"/audio/character-demo.mp3\" type=\"audio/mpeg\" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      <section className=\"py-16 px-4 bg-gray-800 max-w-4xl mx-auto rounded-xl\">
        <h2 className=\"text-3xl font-semibold mb-6\">🧔 About Me</h2>
        <p className=\"text-lg leading-relaxed text-gray-300\">
          I'm a versatile and dynamic voice actor with a passion for bringing characters and stories to life.
          Whether it's a commercial, video game, animation, or audiobook, I deliver professional quality with
          warmth, energy, and nuance.
        </p>
      </section>

      <section className=\"py-16 px-4 max-w-4xl mx-auto\">
        <h2 className=\"text-3xl font-semibold mb-6\">📄 Resume</h2>
        <a
          href=\"/resume.pdf\"
          download
          className=\"inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition\">
          Download My Resume
        </a>
      </section>

      <section className=\"py-16 px-4 bg-gray-800 max-w-4xl mx-auto rounded-xl\">
        <h2 className=\"text-3xl font-semibold mb-6\">📬 Contact Me</h2>
        <form className=\"space-y-6\">
          <input type=\"text\" placeholder=\"Your Name\" className=\"w-full p-3 rounded bg-gray-700 text-white\" />
          <input type=\"email\" placeholder=\"Your Email\" className=\"w-full p-3 rounded bg-gray-700 text-white\" />
          <textarea placeholder=\"Your Message\" rows=\"4\" className=\"w-full p-3 rounded bg-gray-700 text-white\"></textarea>
          <button type=\"submit\" className=\"bg-green-500 px-6 py-3 rounded-full text-white hover:bg-green-600 transition\">
            Send Message
          </button>
        </form>
      </section>

      <footer className=\"text-center py-6 text-gray-500 text-sm\">
        &copy; {new Date().getFullYear()} Joseluis Alonzo. All rights reserved.
      </footer>
    </div>
  );
}