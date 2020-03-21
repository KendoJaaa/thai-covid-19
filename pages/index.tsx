
import { NextPage } from 'next';
import axios from 'axios'
import TotalCasesChart from '../components/TotalCasesChart'

type Data = {
  date: string,
  confirmed: number
  recovered: number
  inhospital: number
  died: number  
  crosscheck: number  
  new: number  
  critical: number
}

const Home: NextPage<{ dataSet: Data[] }> = ({ dataSet }) => (
  <>
  <h1>ข้อมูล เกี่ยวกับ corona</h1>
  <TotalCasesChart 
    dataSet={dataSet}
  />
  </>
);

Home.getInitialProps = async ({ req }) => {
  console.log('kendo jaa ')
  const request = axios.create({
    baseURL: 'http://gsx2json.com/api?id=1XjHHZ9GiIH4ZiOrEP48WjHj_NHHSq9WgqOVatTqpfpU&sheet=1',
    timeout: 1000,
  });
  const response = await request.get('')
  const dataSet = response.data.rows
  
  return { dataSet };
};

export default Home;