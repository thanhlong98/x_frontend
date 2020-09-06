import { GetServerSideProps } from "next";
import { useQuery, gql } from "@apollo/client";

const HELLO = gql`
  query {
    hello
  }
`;

const IndexPage = () => {
  const { data, loading, error } = useQuery(HELLO);

  if (loading) return <p>loading...</p>;

  return <div>{data.hello}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      token: "1234",
    },
  };
};

export default IndexPage;
