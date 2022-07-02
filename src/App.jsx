import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Magon0.png",
      name: "Matheus Magno",
      role: "Analista de TI @Yanna Gois Confeitaria",
    },
    content: [
      { type: "paragraph", content: "Fala galera!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-30 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/giovannalinda.png",
      name: "Yanna",
      role: "Confeiteira @Yanna Gois Confeitaria",
    },
    content: [
      { type: "paragraph", content: "Oie gente!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "yanna.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-29 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}