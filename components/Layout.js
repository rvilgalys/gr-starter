import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>🔥HOT NEW PROJECT TITLE</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&family=Open+Sans:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="icon"
        type="image/png"
        href="favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-16x16.png"
        sizes="16x16"
      />
      <meta property="og:title" content=""></meta>
      <meta property="og:description" content=""></meta>
      <meta property="og:image" content=""></meta>
      <meta property="og:url" content=""></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
    </Head>
    {children}
  </>
);

export default Layout;
