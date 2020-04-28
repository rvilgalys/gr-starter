import { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

const login = ({ token }) => {
  cookie.set("token", token, { expires: 1 });
  Router.push("/scripts");
};

const auth = (ctx) => {
  const { token } = nextCookie(ctx);
  if (!token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return token;
};

const logout = () => {
  cookie.remove("token");
  window.localStorage.setItem("logout", Date.now());
  Router.push("/");
};

const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/");
      }
    };
    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return <WrappedComponent {...props}></WrappedComponent>;
  };
  Wrapper.getInitialProps = async (ctx) => {
    const token = auth(ctx);
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, token };
  };
  return Wrapper;
};

export { login, auth, logout, withAuthSync };
