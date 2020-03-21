
import { NextPage } from 'next';
import axios from 'axios'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }) => {
  console.log('kendo jaa ')
  const request = axios.create({
    baseURL: 'http://gsx2json.com/api?id=1XjHHZ9GiIH4ZiOrEP48WjHj_NHHSq9WgqOVatTqpfpU&sheet=1',
    timeout: 1000,
  });
  const response = await request.get('')
  console.log('kendo jaa', response.data)
  
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;