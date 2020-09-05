import { GetServerSideProps } from "next";

const IndexPage = () => {
  return <div>Home Page</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      token: "1234",
    },
  };
};

export default IndexPage;
