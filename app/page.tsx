"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const THEMES = [
  "bronze",
  "kittens",
  "laser-tag",
  "muted",
  "peach-aqua",
  "rugrat",
  "seafoam",
  "multi",
  "sunset",
  "twilight",
  // "zombie",
];

const SHOWS = [
  {
    date: new Date("12-19-2025"),
    venue: "Metro Chicago",
    link: "",
    image: "",
    time: "Doors - 6:30pm; Show - 7:00pm",
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  const randTheme = THEMES[getRandomInt(0, THEMES.length - 1)];
  const [theme, setTheme] = useState(randTheme);

  const [tab, setTab] = useState("music");
  const [drawerOpen, setDrawerOpen] = useState(false);
  console.log("tab: ", tab);
  console.log("drawer: ", drawerOpen ? "open" : "closed");

  const toggleDrawer = (force = false, newTab = "music") => {
    if (drawerOpen || force) {
      if (newTab === "mtvg") {
        scrollTo(0, 0);
        setDrawerOpen(false);
      } else {
        console.log("hit");
        scrollTo(0, 850);
        setDrawerOpen(true);
      }
    } else {
      scrollTo(0, 850);
      setDrawerOpen(true);
    }
  };
  const handleMenu = (newTab: string) => {
    console.log("toggleDrawer newTab: ", newTab);

    setTab(newTab);
    toggleDrawer(false, newTab);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans mtvg-body">
      <main className="flex min-h-screen w-full max-w-9xl flex-col items-center justify-between py-8 px-16">
        <Image
          alt="mtvg logo"
          src={"/assets/" + theme + ".png"}
          width={900}
          height={150}
          className="w-xxxl"
          style={{ marginTop: "200px", marginBottom: "200px" }}
        />
        <nav id="main-nav" className="flex items-center main-nav">
          <Image
            alt="mtvg logo"
            src={"/assets/" + theme + ".png"}
            width={140}
            height={150}
            className="w-l nav-image"
            onClick={() => {
              handleMenu("mtvg");
            }}
          />
          <a onClick={() => handleMenu("music")}>Music</a>
          <a onClick={() => handleMenu("shows")}>Shows</a>
          <a onClick={() => handleMenu("merch")}>Merch</a>
        </nav>

        {tab === "mtvg" && (
          <div
            id="mtvg"
            style={{
              width: "100%",
              height: "800px",
              padding: "16px",
              marginTop: "32px",
            }}
            className="flex flex-col gap-4 text-base font-medium justify-start items-center"
          >
            {THEMES.map((_theme) => {
              if (_theme !== theme) {
                return (
                  <Image
                    key={_theme}
                    alt="mtvg logo"
                    src={"/assets/" + _theme + ".png"}
                    width={600}
                    height={150}
                    style={{}}
                    className="w-xxxl"
                    onClick={() => {
                      setTheme(_theme);
                      toggleDrawer(true, "mtvg");
                    }}
                  />
                );
              }
            })}
          </div>
        )}
        {tab === "music" && (
          <div
            id="music"
            style={{
              width: "100%",
              height: "700px",
              padding: "16px",
              marginTop: "32px",
              flexWrap: "wrap",
            }}
            // className="flex flex-col gap-4 text-base font-medium justify-start items-center"
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <iframe
                width="500"
                height="500"
                style={{ marginRight: "20px" }}
                src="https://www.youtube.com/embed/_1kBHk9mCWs?list=RD_1kBHk9mCWs"
                title="mercutio   mtvghosts"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <iframe
                width="500"
                height="500"
                style={{ marginRight: "20px" }}
                src="https://www.youtube.com/embed/E8uVM436l_s?list=RDE8uVM436l_s"
                title="mtvghosts - The Wonder EP"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}

        {tab === "shows" && (
          <div
            id="shows"
            style={{
              width: "100%",
              height: "700px",
              padding: "16px",
              marginTop: "32px",
            }}
            className="flex flex-col gap-4 text-base font-medium justify-start items-center"
          >
            <h1>Upcoming</h1>
          </div>
        )}

        {tab === "merch" && (
          <div
            id="merch"
            style={{
              width: "100%",
              height: "700px",
              padding: "16px",
              marginTop: "32px",
            }}
            className="flex flex-col gap-4 text-base font-medium justify-start items-center"
          >
            <h2>
              Add merch here Add merch here Add merch here Add merch here Add
              merch here Add merch here Add merch here Add merch here Add merch
              here Add merch here Add merch here Add merch here Add merch here
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}
