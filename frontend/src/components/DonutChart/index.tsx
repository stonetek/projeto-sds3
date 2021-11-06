import Chart from 'react-apexcharts';
import { BASE_URL } from 'util/requests';
import axios from 'axios';
import { saleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //FORMA ERRADA
    let chartData: ChartData = { labels: [], series: [] };

    //FORMA ERRADA
    axios.get(`${BASE_URL}/sales/sum-by-seller`)
        .then(response => {
            const data = response.data as saleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            chartData = { labels: myLabels, series: mySeries };
            console.log(chartData);
        });

    // const mockData = {
    //   series: [477138, 499928, 444867, 220426, 473088],
    // labels: ['Eorl', 'Éomer', 'Théoden', 'Helm', 'Éowyn']
    //}

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;