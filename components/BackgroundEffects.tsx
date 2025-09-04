"use client"

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Floating particles */}
      <div
        className="absolute top-1/4 left-1/6 w-2 h-2 holographic-gradient rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-1 h-1 holographic-gradient rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 holographic-gradient rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/6 w-2 h-2 holographic-gradient rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-1 h-1 holographic-gradient rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "4.5s" }}
      ></div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/5 left-1/5 w-32 h-32 holographic-gradient rounded-full blur-2xl opacity-20 animate-pulse"
        style={{ animationDelay: "0s", animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-1/5 right-1/5 w-48 h-48 holographic-gradient rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-24 h-24 holographic-gradient rounded-full blur-xl opacity-25 animate-pulse"
        style={{ animationDelay: "4s", animationDuration: "7s" }}
      ></div>
    </div>
  )
}
