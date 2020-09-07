import { GetServerSideProps } from "next";
import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "../libs/apolloClient";

const HELLO = gql`
  query {
    hello
  }
`;

const IndexPage = () => {
  const { data, loading, error } = useQuery(HELLO);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <h1>Home page</h1>
      <p>This is the home page</p>
      <p>{data.hello}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context);

  await apolloClient.query({
    query: HELLO,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
