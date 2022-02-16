import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";
// css 모듈

export default function NavBar() {
    const router = useRouter();
    return <nav>
        <img src="/vercel.svg"/>
        <div>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
        </div>
        <style jsx>{`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }

          img {
            max-width: 100px;
            margin-bottom: 5px;
          }

          nav a {
            font-weight: 600;
            font-size: 18px;
          }

          .active {
            color: tomato;
          }

          nav div {
            display: flex;
            gap: 10px;
          }
        `}</style>
    </nav>
}
//<Link href="">Home</Link>도 가능하지만 style이나 className을 줄 수 없기때문에 a태그를 씀
// style은 다른 파일의 컴포넌트에 className은 줄 수 있지만 적용x scoped 한정
