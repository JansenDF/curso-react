import { Posts } from "../../components/Posts";
import { CounterProvider } from "../../contexts/CounterProvider";
import { PostsProvider } from "../../contexts/PostsProvider";
import "./styles.css";

export function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Posts />
      </PostsProvider>
    </CounterProvider>
  )
}