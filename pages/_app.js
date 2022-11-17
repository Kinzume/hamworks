import "../styles/globals.css";
import localFont from "@next/font/local";

const orbitron = localFont({
  src: [
    { path: "./Orbitron-Regular.ttf", weight: "400" },
    { path: "./Orbitron-Medium.ttf", weight: "500" },
    { path: "./Orbitron-Bold.ttf", weight: "700" },
    { path: "./Orbitron-Black.ttf", weight: "900" },
  ],
  variable: "--orbitron",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${orbitron.variable} font-sans h-full`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
